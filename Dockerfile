FROM node:17 AS app-build
WORKDIR /usr/src/app
COPY ./app .
RUN npm install
RUN npm run build 

EXPOSE 3000 3000

ENV REACT_APP_API_KEY=${REACT_APP_API_KEY}
ENV REACT_APP_AUTH_DOMAIN=${REACT_APP_AUTH_DOMAIN}
ENV REACT_APP_PROJECT_ID=${REACT_APP_PROJECT_ID}
ENV REACT_APP_STORAGE_BUCKET=${REACT_APP_STORAGE_BUCKET}
ENV REACT_APP_MESSAGING_SENDER_ID=${REACT_APP_MESSAGING_SENDER_ID}
ENV REACT_APP_APP_ID=${REACT_APP_APP_ID}
ENV REACT_APP_MEASUREMENT_ID=${REACT_APP_MEASUREMENT_ID}

ENTRYPOINT ["npm", "run", "start"]