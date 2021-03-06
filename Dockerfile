FROM node:13-alpine

RUN apk --no-cache add --virtual native-deps \
    g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
    npm install --quiet node-gyp -g

RUN [ "mkdir", "/app"]

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

ENV PORT=80

EXPOSE 80

ENTRYPOINT [ "npm" ]

CMD ["start"]
