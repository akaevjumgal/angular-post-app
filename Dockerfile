# Stage 1
FROM node:14.4.0-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build --prod

# Stage 2
FROM nginx:1.19.9-alpine
COPY --from=build app/dist/angular-post-app /usr/share/nginx/html
