FROM node:20.12.2-alpine AS base
WORKDIR /usr/src/app

FROM base as build
COPY package.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.27.0-alpine
ENV NODE_ENV production
# USER node
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .env.production /usr/share/nginx/html
COPY --from=build /usr/src/app/dist /usr/share/nginx/html