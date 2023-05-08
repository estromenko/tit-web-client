FROM node:18-alpine3.17 AS builder

WORKDIR /var/www/tit-web-client

COPY . /var/www/tit-web-client

RUN cd /var/www/tit-web-client \
 && yarn && yarn build

FROM node:18-alpine3.17

COPY --from=builder /var/www/tit-web-client/dist /var/www/tit-web-client

COPY docker/docker-entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
