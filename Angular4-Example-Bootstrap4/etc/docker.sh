#!/bin/sh

#===================================================================
#
# 		                  -- VERSION 1.0.0  --
#
#   Description:
#        With this script it is possible to build an 
#        docker image and start and stop the container.
#        Uses the project data from package.json and the expose 
#        ports from the dockerfile during the build process.
#
#   Startparameter:
#        - build        - build the image
#        - start        - start the container in foreground
#        - startbg      - start the container in background
#        - stop         - stop the container
#        - remove       - remove the container and the image
#        - login        - login into the running container
#
#   Example command:
#        ./docker.sh build
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


#===================================================================
#	SETTINGS
#===================================================================

BASE_DIR="$(dirname $0)"
SCRIPT_DIR="$( cd -P -- "$(dirname -- "$(command -v -- "$0")")" && pwd -P )"
WORK_DIR="$SCRIPT_DIR/.."

PACKAGE_JSON_PATH="$WORK_DIR/package.json"

DOCKER_FILE_PATH="$WORK_DIR/dockerfile"
DOCKER_EXEC="docker"
DOCKER_REPO_NAME="blogging-it"

ACTION="$1"

#===================================================================
#	FUNCTIONS
#===================================================================

function isAppInstalled {
  local isInst_=1
  type $1 >/dev/null 2>&1 || { local isInst_=0; }  # set to 0 if not found
  echo "$isInst_"
}

function getPackageJsonValue() {
  local value_=$(cat "$PACKAGE_JSON_PATH" \
  | grep $1 \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
  echo "$value_"
}

function getDockerfileValue() {
  local value_=$(cat "$DOCKER_FILE_PATH" \
  | grep ^$1 \
  | head -1 \
  | sed 's/[^ ]* //' )
  echo "$value_"
}

#===================================================================
#	VALIDATION
#===================================================================

valid=true

# check if docker is installed
if [[ $(isAppInstalled docker) != 1 ]]; then
    echo "ERROR: Please install 'docker' to execute this script"
    valid=false
fi

# check if file exists
if [ ! -f "$PACKAGE_JSON_PATH" ]; then
    echo "ERROR: Can't read properties from $PACKAGE_JSON_PATH - file not found"
    valid=false
fi

# check if file exists
if [ ! -f "$DOCKER_FILE_PATH" ]; then
    echo "ERROR: Can't read properties from $DOCKER_FILE_PATH - file not found"
    valid=false
fi

if [ "$valid" = false ] ; then
    exit 1
fi

#===================================================================
#	INIT
#===================================================================

# read project settings from package.json
DOCKER_VERSION=$(getPackageJsonValue 'version')
DOCKER_NAME=$(getPackageJsonValue 'name')
DOCKER_IMAGE="$DOCKER_REPO_NAME/$DOCKER_NAME"
DOCKER_PORTS=$(getDockerfileValue "EXPOSE")

echo " ********* \n"  \
     "Run with config:\n"  \
     "Version:   $DOCKER_VERSION\n"  \
     "NAME:      $DOCKER_NAME \n"  \
     "IMAGE:     $DOCKER_IMAGE \n"  \
     "WORK DIR:  $WORK_DIR \n"  \
     "ACTION:    $ACTION \n"  \
     "EXPOSE:    $DOCKER_PORTS \n"  \
     "*********"

# create docker expose ports parameter
DOCKER_PORTS_PARAM=''
for port in $DOCKER_PORTS; do 
    DOCKER_PORTS_PARAM="$DOCKER_PORTS_PARAM -p $port:$port"
done

#===================================================================
#	MAIN
#===================================================================

EXEC_CMD=""
case "$ACTION" in
        build)
        	EXEC_CMD="$DOCKER_EXEC build -t $DOCKER_IMAGE:$DOCKER_VERSION ."
            ;;

        start)
        	EXEC_CMD="$DOCKER_EXEC run -P -it --rm $DOCKER_PORTS_PARAM --name $DOCKER_NAME $DOCKER_IMAGE:$DOCKER_VERSION"
            ;;

        startbg)
        	EXEC_CMD="$DOCKER_EXEC run -P -d -it --rm $DOCKER_PORTS_PARAM --name $DOCKER_NAME $DOCKER_IMAGE:$DOCKER_VERSION"
            ;;

        stop)
        	EXEC_CMD="$DOCKER_EXEC stop $DOCKER_NAME"
            ;;

        remove)
        	EXEC_CMD="$DOCKER_EXEC rm -f $DOCKER_NAME ; docker rmi -f $DOCKER_IMAGE:$DOCKER_VERSION"
            ;;

        login)
        	EXEC_CMD="$DOCKER_EXEC exec -i -t $DOCKER_NAME /bin/bash"
            ;;

        *)
            echo $"Usage: $ACTION {build|start|startbg|stop|remove|login}"
            exit 1
esac

# switch to working directory and execute command
cd "$WORK_DIR"

echo "Run '$EXEC_CMD'"
eval $EXEC_CMD

exit 0
