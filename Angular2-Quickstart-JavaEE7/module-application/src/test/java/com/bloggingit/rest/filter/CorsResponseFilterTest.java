package com.bloggingit.rest.filter;

import java.io.IOException;
import java.util.List;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.runners.MockitoJUnitRunner;

/**
 *
 * @author Markus Eschenbach
 */
@RunWith(MockitoJUnitRunner.class)
public class CorsResponseFilterTest {

    @Mock
    private ContainerResponseContext mockRespContext;

    @Mock
    private ContainerRequestContext mockReqContext;

    private final MultivaluedHashMap<String, String> fakeReqHeaderMap = new MultivaluedHashMap<>();
    private final MultivaluedMap<String, Object> fakeRespHeaderMap = new MultivaluedHashMap<>();

    private final static String TEST_HEADERS = "User-Agent, Pragma, accept";

    @Before
    public void setUp() {
        when(mockRespContext.getHeaders()).thenReturn(fakeRespHeaderMap);
        when(mockReqContext.getHeaders()).thenReturn(fakeReqHeaderMap);
    }

    /**
     * Test class {@link CorsResponseFilter} default constructor.
     */
    @Test
    public void testDefaultConstructor() {
        assertNotNull(new CorsResponseFilter());
    }

    /**
     * Test class {@link CorsResponseFilter} instanceof.
     */
    @Test
    public void testInstanceofContainerResponseFilter() {
        CorsResponseFilter respFilter = new CorsResponseFilter();
        assertTrue(respFilter instanceof ContainerResponseFilter);
    }



    /**
     * Test of
     * {@link CorsResponseFilter#filter(javax.ws.rs.container.ContainerRequestContext, javax.ws.rs.container.ContainerResponseContext)}
     * method with header values, of class {@link CorsResponseFilter}.
     *
     * @throws java.io.IOException
     */
    @Test
    public void testFilterWithHeaderValues() throws IOException {
        fakeReqHeaderMap.clear();
        fakeReqHeaderMap.putSingle(CorsResponseFilter.ACCESS_CONTROL_REQUEST_HEADERS_HEADER, TEST_HEADERS);

        CorsResponseFilter respFilter = new CorsResponseFilter();
        respFilter.filter(mockReqContext, mockRespContext);
        assertNotNull(mockReqContext.getHeaders());
        assertNotNull(mockRespContext.getHeaders());

        List<Object> actualHeader = mockRespContext.getHeaders().get(CorsResponseFilter.ACCESS_CONTROL_ALLOW_HEADERS_HEADER);
        String[] expectedHeaderValues = TEST_HEADERS.split(",");

        assertEquals(actualHeader.size(), 1);

        String actualHeaderValues = (String) actualHeader.get(0);

        for (String head : expectedHeaderValues) {
            assertTrue("assert header values not found: " + head, actualHeaderValues.contains(head));
        }
    }

    /**
     * Test of
     * {@link CorsResponseFilter#filter(javax.ws.rs.container.ContainerRequestContext, javax.ws.rs.container.ContainerResponseContext)}
     * method without header values, of class {@link CorsResponseFilter}.
     *
     * @throws java.io.IOException
     */
    @Test
    public void testFilterWithoutHeaderValues() throws IOException {
        fakeReqHeaderMap.clear();
        fakeReqHeaderMap.putSingle(CorsResponseFilter.ACCESS_CONTROL_REQUEST_HEADERS_HEADER, null);

        CorsResponseFilter respFilter = new CorsResponseFilter();
        respFilter.filter(mockReqContext, mockRespContext);
        assertNotNull(mockReqContext.getHeaders());
        assertNotNull(mockRespContext.getHeaders());

        List<Object> actualHeader = mockRespContext.getHeaders().get(CorsResponseFilter.ACCESS_CONTROL_ALLOW_HEADERS_HEADER);
        String[] expectedHeaderValues = CorsResponseFilter.DEFAULT_ALLOWED_HEADERS.split(",");

        assertEquals(actualHeader.size(), 1);

        String actualHeaderValues = (String) actualHeader.get(0);

        for (String head : expectedHeaderValues) {
            assertTrue("assert header values not found: " + head, actualHeaderValues.contains(head));
        }
    }

}
