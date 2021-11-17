FROM node:16.8.0 as node

WORKDIR /usr/src/react/

ENV APP_NAME react-app

RUN echo 'Running copies'
COPY ./ ./
RUN echo 'Running mocks'
COPY ./mocks ./src/mocks
# 
RUN echo 'End Running copies'
EXPOSE 3000

CMD [ "npm","run","start" ]
