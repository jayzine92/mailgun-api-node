FROM ubuntu:latest
# FROM alpine:3.19
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

WORKDIR /mailgunApp

COPY . .

COPY package.json ./mailgunApp

COPY package-lock.json ./mailgunApp

EXPOSE 3006

RUN npm ci
CMD ["npm", "run", "start:dev"]