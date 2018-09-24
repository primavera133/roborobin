FROM node:8-alpine

# install yarn
RUN apk add --no-cache yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN yarn
WORKDIR /usr/src/app/client
RUN yarn

WORKDIR /usr/src/app
RUN yarn run build

EXPOSE 3001
CMD ["yarn", "run", "start"]
