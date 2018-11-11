FROM node:8.2.1-alpine

WORKDIR /opt/app

COPY application/package.json /opt/app

RUN npm install supervisor -g && npm install

COPY application/. /opt/app

CMD ["npm", "start"]