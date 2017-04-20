package com.bloggingit.producers;

import java.util.logging.Logger;
import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;


/**
 *
 * @author esche
 */
public class LoggerProducer {
    
    @Produces
    public Logger logger(InjectionPoint injectionPoint){
        return Logger.getLogger(injectionPoint.getMember().getDeclaringClass().getName());
    }
}
