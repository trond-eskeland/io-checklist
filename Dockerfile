# ---- Staging ----

FROM node:14-alpine as builder
WORKDIR /app

RUN apk update
RUN npm install -g expo-cli
COPY package*.json ./
RUN npm install
COPY . .

RUN expo build:web

# ---- Prod ----

FROM nginx

EXPOSE 80
ENV APPSETTING_ENV=local

RUN echo 'server { listen 80; root /usr/share/nginx/html; index index.html; server_name _; location / { try_files $uri /index.html; } }' > /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf

COPY --from=builder /app/web-build /usr/share/nginx/html

CMD nginx -g 'daemon off;'
