FROM node:6.9

# Enviroment variables
ENV HOMEDIR /data

RUN mkdir -p ${HOMEDIR}
WORKDIR ${HOMEDIR}

# install all dependencies
ADD package.json ./
RUN npm install -g yarn
RUN yarn install

# add the source files and build the project
ADD . .
RUN yarn run build

# start the project
CMD node ./dist/app.js prod
