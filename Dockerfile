FROM node:8-alpine as builder

ENV PORT=3000
ENV NODE_ENV=production

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

# Shave off some unecessary bytes
FROM node:8-alpine as prod

RUN npm install -g nodemon

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY --from=builder /usr/src/app .
RUN rm -rf ./client
# RUN rm -rf ./node_modules

EXPOSE 3000
## CMD ["yarn", "run", "start"]
CMD ["nodemon", "./bin/www"]
