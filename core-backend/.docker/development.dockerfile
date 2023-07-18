FROM node:18.13.0

WORKDIR /opt/app

COPY package.json .
COPY package-lock.json .

RUN npm i
