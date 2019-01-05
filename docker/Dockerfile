FROM node:10.7

LABEL maintainer "Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 8000

CMD [ "yarn", "serve:dev" ]
