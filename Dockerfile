FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx"]