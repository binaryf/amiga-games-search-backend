# amiga-games-search-backend

Amiga Games Search Node.js Backend.
Using Sequelize and Express.

# how to compile node.js backend

    $ cd rest-api-server
    $ npm install (for dependencies)

# how to populate database with the sequelize orm

    $ sequelize db:migrate

    - import the data from 'rest-api-server/data/data.js'
    - run GamesController.importGames();

