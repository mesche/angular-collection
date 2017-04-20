package com.bloggingit.rest.filter;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.util.List;

/*
 * A container response {@link Filter} to enable <b>C</b>ross-<b>O</b>rigin <b>R</b>esource
 * <b>S</b>haring (CORS) support for Jersey (JAX-RS)
 * <p>
 *  This is a Jersey (JAX-RS) container response filter implementation of 
 *  server-side CORS for web containers such as Apache Tomcat/TomEE and other servers.
 *  CORS is a mechanism supported by W3C to enable cross origin requests. 
 *  CORS requires support from server and browser to work. 
 * </p>
 * 
 * <p>
 *  Add the following class to your Java EE project, to activate the CORS support. No other configuration is needed!
 * </p>
 *
 * <dl>
 *  <dt>@Provider</dt>
 *  <dd>The annotation @Provider is needed to be discovered this filter by the JAX-RS runtime.</dd>
 * </dl>
 *
 *
 * @author Markus Eschenbach
 * @version 1.0.0
 * @see <a href="http://www.w3.org/TR/cors/">>W3C - Cross-Origin Resource Sharing specification</a> for more details.
 *
 */
@Provider
public class CorsResponseFilter implements ContainerResponseFilter {

    /**
     * Response header indicates whether the response can be shared with
     * resources with the given origin.
     */
    public static final String ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "Access-Control-Allow-Origin";
    /**
     * Allow any resource to access
     */
    public static final String DEFAULT_ALLOWED_ORIGINS = "*";

    /**
     * Response header specifies the methods allowed when accessing the resource
     * in response to a preflight request.
     */
    public static final String ACCESS_CONTROL_ALLOW_METHODS_HEADER = "Access-Control-Allow-Methods";
    /**
     * Comma delimited list of the allowed HTTP request methods.
     */
    public static final String DEFAULT_ALLOWED_METHODS = "GET, POST, PUT, DELETE, OPTIONS, HEAD";

    /**
     * Response header is used to a preflight request to indicate which HTTP
     * headers will be available via Access-Control-Expose-Headers.
     */
    public static final String ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "Access-Control-Allow-Headers";
    /**
     * Comma-delimited list of the supported request headers.
     */
    public static final String DEFAULT_ALLOWED_HEADERS = "origin, content-type, accept, x-requested-with";

    /**
     * Response header indicates how long the results of a preflight request can
     * be cached.
     */
    public static final String ACCESS_CONTROL_MAX_AGE_HEADER = "Access-Control-Max-Age";
    /**
     * Maximum number of seconds the results can be cached.
     */
    public static final int DEFAULT_MAX_AGE_IN_SECONDS = 12 * 60 * 60; //720 mins.

    /**
     * Response header indicates whether or not the response to the request can
     * be exposed to the page. It can be exposed when the true value is
     * returned. It can't in other cases.
     */
    public static final String ACCESS_CONTROL_ALLOW_CREDENTIALS_HEADER = "Access-Control-Allow-Credentials";
    /**
     * The only valid value for this header is true (case-sensitive). If you
     * don't need credentials, omit this header entirely (rather than setting
     * its value to false).
     */
    public static final String DEFAULT_ALLOWED_CREDENTIALS = "true";

    /**
     * Request header is used when issuing a preflight request to let the server
     * know which HTTP headers will be used when the actual request is made.
     */
    public static final String ACCESS_CONTROL_REQUEST_HEADERS_HEADER = "Access-Control-Request-Headers";

    /**
     * Starts the process to enable CORS support
     *
     * @param requestContext the container request context
     * @param responseContext the container response context
     * @throws IOException if an I/O exception occurs
     */
    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) throws IOException {
        handle(requestContext, responseContext);
    }

    /**
     * Adding the appropriate HTTP response headers to
     * {@link HttpServletResponse} to enable CORS support
     *
     * @param requestContext the container request context
     * @param responseContext the container response context
     * @throws IOException if an I/O exception occurs
     */
    private void handle(ContainerRequestContext requestContext, ContainerResponseContext responseContext) {
        final MultivaluedMap<String, Object> headers = responseContext.getHeaders();
        headers.add(ACCESS_CONTROL_ALLOW_ORIGIN_HEADER, DEFAULT_ALLOWED_ORIGINS);
        headers.add(ACCESS_CONTROL_ALLOW_HEADERS_HEADER, getRequestedHeaders(requestContext));
        headers.add(ACCESS_CONTROL_ALLOW_CREDENTIALS_HEADER, DEFAULT_ALLOWED_CREDENTIALS);
        headers.add(ACCESS_CONTROL_ALLOW_METHODS_HEADER, DEFAULT_ALLOWED_METHODS);
        headers.add(ACCESS_CONTROL_MAX_AGE_HEADER, DEFAULT_MAX_AGE_IN_SECONDS);
    }

    /**
     * Returns a comma-delimited list of HTTP headers that are included in the
     * request. If there are no HTTP header values specified by the key
     * {@link ACCESS_CONTROL_REQUEST_HEADERS_HEADER} defined, then the default
     * HTTPS headers will be returned.
     *
     * @param requestContext get the request headers from the actual request.
     * @return a comma-delimited list of the allowed request headers.
     */
    private String getRequestedHeaders(ContainerRequestContext requestContext) {
        List<String> headers = requestContext.getHeaders().get(ACCESS_CONTROL_REQUEST_HEADERS_HEADER);
        return createAllowedHeaderList(headers);
    }

    /**
     * Returns a comma-delimited list of HTTP headers from the the given string
     * list. If the parameter is <code>null</code> or empty, then the default
     * {@link #DEFAULT_ALLOWED_HEADERS} HTTPS headers will be returned.
     *
     * @param headers list of HTTP headers
     * @return a comma-delimited list of the supported request headers.
     */
    private String createAllowedHeaderList(List<String> headers) {
        StringBuilder retVal = new StringBuilder();
        if (headers != null && !headers.isEmpty()) {
            for (int i = 0; i < headers.size(); i++) {
                String header = headers.get(i);
                retVal.append(header);
                retVal.append(',');
            }
        }
        retVal.append(DEFAULT_ALLOWED_HEADERS);

        return retVal.toString();
    }

}
