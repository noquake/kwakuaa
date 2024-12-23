FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*

COPY kwakuaa/*.html /usr/share/nginx/html/
COPY kwakuaa/css/*.css /usr/share/nginx/html/css/
COPY kwakuaa/assets/* /usr/share/nginx/html/assets/
COPY kwakuaa/js-files/*.js /usr/share/nginx/html/js-files/

EXPOSE 9000

CMD ["nginx", "-g", "daemon off;"]