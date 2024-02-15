FROM node:20

# Installer Angular CLI
RUN npm install -g @angular/cli

WORKDIR /app

# Installer les dépendances du projet
COPY package.json /app
RUN npm install

# Copier le reste des fichiers du projet
COPY . /app

EXPOSE 3000

# Lancer l'application Angular
CMD ng serve --port 3000 --host 0.0.0.0
