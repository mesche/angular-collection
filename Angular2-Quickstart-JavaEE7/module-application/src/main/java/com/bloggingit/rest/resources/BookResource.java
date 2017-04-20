package com.bloggingit.rest.resources;

import java.text.MessageFormat;
import java.util.logging.Logger;
import javax.inject.Inject;
import javax.ws.rs.Path;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonArray;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * request url: .../api/rest/v1/books/list or /api/rest/v1/books/1
 * 
 * @author esche
 */
@Path("books")
public class BookResource {
    
    @Inject
    private Logger log;

    @GET
    @Path("/{no}")
    @Produces(MediaType.APPLICATION_JSON)
    public JsonObject book(@PathParam("no") int bookId) {
        log.info(MessageFormat.format("Call BookResource#book with id {0}", bookId));
        
        JsonObject book = Json
                .createObjectBuilder()
                .add("title", "The title " + bookId)
                .add("id", bookId)
                .build();
        
        return book;
    }

    
    @GET
    @Path("/list")
    @Produces(MediaType.APPLICATION_JSON)
    public JsonArray books(){
        log.info("Call BookResource#books");
        
        JsonArray books = Json
                .createArrayBuilder()
                .add(book(1))
                .add(book(2))
                .add(book(3))
                .build();
        
        return books;
    }
}
