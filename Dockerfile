FROM node:16.8.0 as node

WORKDIR /usr/src/react/

ENV APP_NAME react-app


COPY ./ ./

COPY . .

EXPOSE 3000

CMD [ "npm","run","start" ]
