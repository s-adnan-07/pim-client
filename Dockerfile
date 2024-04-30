FROM node:20.12.2 AS build

WORKDIR /usr/src/pim-client

COPY package.json yarn.lock /usr/src/pim-client/

RUN yarn

COPY . .

RUN yarn build

RUN rm -rf ./src

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/pim-client/dist /usr/share/nginx/html