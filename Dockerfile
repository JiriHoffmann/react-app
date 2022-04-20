FROM node:17 AS app-build
WORKDIR /usr/src/app
COPY ./app .
RUN npm install
RUN npm run build 

EXPOSE 3000 3000

ENTRYPOINT ["npm", "run", "start"]