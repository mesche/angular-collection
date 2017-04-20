package com.bloggingit.rest.resources;

import java.util.logging.Logger;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.Path;
import org.junit.Test;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

/**
 * @author Markus Eschenbach
 */
@RunWith(MockitoJUnitRunner.class)
public class BookResourceTest {

    @Mock
    private Logger logger;

    @InjectMocks
    private BookResource mockBookResource;

    /**
     * Test of {@link BookResource} class annotation.
     */
    @Test
    public void testBookResourceAnnotation() {
        assertTrue(mockBookResource.getClass().isAnnotationPresent(Path.class));
        assertEquals("books", mockBookResource.getClass().getAnnotation(Path.class).value());
    }


    /**
     * Test of {@link BookResource#book(int)} method, of class
     * {@link BookResource}.
     */
    @Test
    public void testBook() {
        int bookId = 1;
        JsonObject result = mockBookResource.book(bookId);
        assertNotNull(result);
        assertEquals(bookId, result.getInt("id"));
    }

    /**
     * Test of {@link BookResource#books()} method, of class
     * {@link BookResource}.
     */
    @Test
    public void testBooks() {
        JsonArray result = mockBookResource.books();
        assertNotNull(result);
        assertFalse(result.isEmpty());
    }

}
