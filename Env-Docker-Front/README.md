

Environnement ~ Docker Compose
==============

Docker Compose est un outils permettant l'administration et la gestion de multiples applications dans les conteneurs Docker.
Grâce à un fichier de configuration vous pourrez configurer les services de vos applications.
Une seule commande permet de créer et démarrer les services.

Docker Compose est très interessant pour le developpement, le testing et la gestion d'environement.

Commandes 
------------------------
`Docker-compose up`
`Docker-compose down`


Configuration 
-----------------------
Notre fichier de configuration est `docker-compose.yml`:
    
    version: '2'
    
    services:
      web:
        image: lavoweb/php-5.6
        ports:
            - "80:80"
        volumes:
            - ~/www:/var/www/html
        links:
            - db:db
     db:
        image: mysql:5.6
        volumes:
            - ~/mysql:/var/lib/mysql
        ports:
            - "3306:3306"
        environment:
            - MYSQL_ROOT_PASSWORD=root
     myadmin:
        image: phpmyadmin/phpmyadmin
        ports:
            - "8080:80"
        links:
            - db:db


Installation et documentation
------------------------------

- La documentation complète est disponible sur [Docker's website](https://docs.docker.com/compose/).
- Le repo github de docker compose : [GitHub](https://github.com/docker/compose)

Utilisation
------------------------------
- Après avoir lancé `docker-compose up` rendez-vous sur `http://localhost`.
- port `8080` - phpMyAdmin.
- port `3306` - mySQL.
