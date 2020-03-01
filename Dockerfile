FROM node:latest as node

WORKDIR /PORTO

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY --from=node dist/porto /usr/share/nginx/html