FROM maven:3.8.1-openjdk-11

WORKDIR /app

# Copier les fichiers du projet
COPY . /app

EXPOSE 8080

# Lancer l'application Spring Boot
CMD mvn spring-boot:run
