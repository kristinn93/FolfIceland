FROM node:argon

# Create app directory
RUN mkdir -p /folf/src/app
WORKDIR /folf/src/app

COPY . /folf/src/app
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
