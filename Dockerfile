FROM node:6.9

# Enviroment variables
ENV HOMEDIR /data

RUN mkdir -p ${HOMEDIR}
WORKDIR ${HOMEDIR}

# install all dependencies
ADD package.json ./
RUN npm install -g yarn
RUN yarn install --production

# add node content initially
ADD . .
CMD node app.js prod
