# WARNING DOCKERFILE CURRENTLY IN WORKING PROGRESS

FROM phusion/baseimage:0.9.17

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# Install corresponding packages
# Git, pm2, curl
RUN apt-get update && apt-get install -y \
  git \
  curl

# Downloading NodeJs v0.12
RUN curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN apt-get install -y nodejs

# Cloning repository, could change with the good project git repository
RUN git clone https://github.com/Skahrz/project-skeleton.git

# Install global dependencies
RUN npm install -g mocha gulp esdoc pm2

# Move inside of the project
RUN cd test-docker && npm install && esdoc -c esdoc.json  &&  npm test && pm2 start dist/app.js


# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Run the image launching this command :
# docker run -p {real-machine-port}:{docker-image-port}
