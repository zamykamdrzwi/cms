FROM php:8.2-cli
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
EXPOSE 5000
CMD [ "php", "-S", "0.0.0.0:5000", "-t", "." ]