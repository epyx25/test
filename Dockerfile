# WARNING DOCKERFILE CURRENTLY IN WORKING PROGRESS

FROM phusion/baseimage:0.9.17

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# Install corresponding packages
# Git, pm2, curl
RUN apt-get update && apt-get install -y \
  git \
  pm2 \
  curl\

# Downloading NodeJs v0.12
RUN curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN apt-get install nodejs

# Cloning repository, could change with the good project git repository
RUN git clone https://github.com/Skahrz/project-skeleton.git

# Move inside of the project
RUN cd project-skeleton

# Install global dependencies
RUN npm install -g mocha gulp

# Install local dependencies
RUN npm install

# Pre-production tasks
RUN gulp

# Start the project as a daemon
#more informations to have pm2 reports on the github page : https://github.com/Unitech/pm2
RUN pm2 start {your-entry-point-here}


# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Run the image launching this command :
# docker run -p {real-machine-port}:{docker-image-port}
