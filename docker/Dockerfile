FROM node:alpine as build

RUN <<EOF
apk add git
git clone https://github.com/ChriZZ2406/Abschlussprojekt-Front-Backend Frontend
cd  Frontend
npm ci
npm run build
EOF

FROM nginx:alpine  

COPY --from=build /Frontend/dist /usr/share/nginx/html

EXPOSE 80
