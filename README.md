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

## Commands

### Esential

Build

```shell
docker compose build
```

Run all services

```shell
docker compose up
```

**OR**

Build and run all services in the background

```shell
docker compose up -d --build
```

---

Stop all services

```shell
docker compose down
```

Stop all services and remove volumes, networks, and images created by `up`

```shell
docker compose down -v --remove-orphans --rmi all
```

### Utils

Show logs

```shell
docker compose logs -f
```

Show logs for a specific service

```shell
docker compose logs -f spring-boot
```

## Environment

All services are using the same global environment file `.env`

Variables used in following services:

-   `spring-boot` (Spring Boot)
    -   **FRONT_URL** (Cors configuration)
    -   **DATBASE_NAME**, **DATABASE_USERNAME**, **DATABASE_PASSWORD** (MariaDB connection) used in `docker-compose.yml` to generate a custom connection string using service name `mariadb` as host
-   `angular` (Angular)
    -   **BACK_URL** (Api URL)
    If you want to add more environment variables, you need to update the `./angular/propagate-env.sh` script to propagate them to the Angular environment file `./angular/src/environments/environment.ts`
-   `mariadb` (MariaDB)
    -   **DATABASE_NAME**, **DATABASE_ROOT_PASSWORD**, **DATABASE_USERNAME**, **DATABASE_PASSWORD** (MariaDB configuration)
