FROM socialengine/nginx-spa:latest
COPY . /app 
RUN chmod -R 777 /app