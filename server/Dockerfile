FROM node:argon

# Create app directory
RUN mkdir -p /folf/src/app
WORKDIR /folf/src/app

# Install app dependencies
COPY package.json /folf/src/app/
RUN npm install

# Bundle app source
COPY . /folf/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
