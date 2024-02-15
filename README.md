# Spring Boot + Angular 15 CRUD example

Full-stack Angular 15 + Spring Boot Tutorial CRUD Application in that:

-   Each Tutorial has id, title, description, published status.
-   We can create, retrieve, update, delete Tutorials.
-   We can also find Tutorials by title.

![spring-boot-angular-15-example-crud.png](spring-boot-angular-15-example-crud.png)

> [Spring Boot + Angular 15 CRUD example](https://www.bezkoder.com/spring-boot-angular-15-crud/)

Run both Back-end & Front-end in one place:

> [Integrate Angular with Spring Boot Rest API](https://www.bezkoder.com/integrate-angular-spring-boot/)

More Practice:

> [Angular + Spring Boot: File upload example](https://www.bezkoder.com/angular-15-spring-boot-file-upload/)

> [Angular + Spring Boot: JWT Authentication and Authorization example](https://www.bezkoder.com/angular-15-spring-boot-jwt-auth/)

## Run Spring Boot and Angular using Docker

```shell
docker compose up -d --build
```

## Run Spring Boot application

```shell
mvn spring-boot:run
# or using docker
docker compose up spring-boot -d --build
```

The Spring Boot Server will export API at port `8080`.

## Run Angular Client

```shell
npm install
ng serve --port 3000
# or using docker
docker compose up angular -d --build
```

The Angular Client will be running on port `3000`.
