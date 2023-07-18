FROM node:18.13.0

WORKDIR /opt/app

COPY . .

RUN npm i

RUN npm run build

ENV NODE_ENV=production

CMD [ "npm", "run", "start" ]
