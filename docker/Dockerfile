FROM node:18-alpine3.17

WORKDIR /var/www/tit-web-client

COPY .. /var/www/tit-web-client

RUN cd /var/www/tit-web-client \
 && yarn && yarn build

COPY docker/docker-entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
