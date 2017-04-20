#!/bin/bash

#===================================================================
#	              
# 		                  -- VERSION 1.0.0  --
#
#   Example command:
#        ./run.sh 
#
#    ::::::::::::::: www.blogging-it.com :::::::::::::::
#    
# Copyright (C) 2017 Markus Eschenbach. All rights reserved.
# 
# 
# This software is provided on an "as-is" basis, without any express or implied warranty.
# In no event shall the author be held liable for any damages arising from the
# use of this software.
# 
# Permission is granted to anyone to use this software for any purpose,
# including commercial applications, and to alter and redistribute it,
# provided that the following conditions are met:
# 
# 1. All redistributions of source code files must retain all copyright
#    notices that are currently in place, and this list of conditions without
#    modification.
# 
# 2. All redistributions in binary form must retain all occurrences of the
#    above copyright notice and web site addresses that are currently in
#    place (for example, in the About boxes).
# 
# 3. The origin of this software must not be misrepresented; you must not
#    claim that you wrote the original software. If you use this software to
#    distribute a product, an acknowledgment in the product documentation
#    would be appreciated but is not required.
# 
# 4. Modified versions in source or binary form must be plainly marked as
#    such, and must not be misrepresented as being the original software.
#    
#    ::::::::::::::: www.blogging-it.com :::::::::::::::
#===================================================================

set -e

if [ "${1:0:1}" != '-' ]; then
  exec "$@"
fi

exec java -jar lib/sonar-application-$SQ_VERSION.jar \
  -Dsonar.log.console="$SQ_LOG_CONSOLE" \
  -Dsonar.jdbc.username="$SQ_JDBC_USERNAME" \
  -Dsonar.jdbc.password="$SQ_JDBC_PASSWORD" \
  -Dsonar.jdbc.url="$SQ_JDBC_URL" \
  -Dsonar.embeddedDatabase.port="$SQ_JDBC_PORT" \
  -Dsonar.web.javaAdditionalOpts="$SQ_WEB_JVM_OPTS -Djava.security.egd=file:/dev/./urandom" \
  "$@"
