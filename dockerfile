#node_block
FROM node:alpine3.16 as nodework

WORKDIR /my-production-app

COPY package.json .

RUN npm install -f 

COPY . .

RUN npm run build

#nginx_block

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=nodework /my-production-app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
