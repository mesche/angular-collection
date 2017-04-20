# SonarQube Docker 

Docker image to build a [SonarQube](http://www.sonarqube.org) platform container for continuous inspection of [code quality](https://en.wikipedia.org/wiki/Software_quality) based on [OpenJDK 8](https://hub.docker.com/_/openjdk) image.

## Commands

### Build image

    $ docker build -t blogging-it/internal-sonarqube:1.0.0 .

### Run container (add `-d` parameter to start a container in detached mode)

    $ docker run -P -it --rm -p 9000:9000 -p 9092:9092 --name internal-sonarqube blogging-it/internal-sonarqube:1.0.0

### Stop container

    $ docker stop internal-sonarqube

### Remove container and image

    $ docker rm -f internal-sonarqube ; docker rmi -f blogging-it/internal-sonarqube:1.0.0



## Web-Application

### Access

    http://{docker.ip}:9000

### Credentials

    admin:admin

### Plugins

* [`SonarTsPlugin`](https://github.com/Pablissimo/SonarTsPlugin)



## Troubleshooting

### Check container logs

    $ docker logs internal-sonarqube


### Login into container
    $ docker exec -i -t internal-sonarqube /bin/bash

### Copy file from container to host

    $ docker cp internal-sonarqube:/opt/sonarqube/data ./data



## Contributing

Please submit all pull requests against the master branch. If your code contains new code, patches or features, you should include relevant unit tests.



## Authors

Markus Eschenbach

* [Blog](http://www.blogging-it.com)



## License

The license is committed to the repository in the project folder as `LICENSE.txt`.  
Please see the `LICENSE.txt` file for full informations.


----------------------------------
Markus Eschenbach  
[http://www.blogging-it.com](http://www.blogging-it.com)

