FROM node:14.2.0-alpine3.11

RUN mkdir app && mkdir app/sessions

WORKDIR /app/

COPY ./package*.json ./

RUN npm ci && \
    chmod +x ./sessions

COPY . .
