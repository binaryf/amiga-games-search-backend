/* eslint-disable class-methods-use-this */
import models from '../models';
const Sequelize = require('sequelize');

class GamesController {
    importGames() {
        data.map((game) => (
            models.Game.create(game).then((game) => {
                process.stdout.write(game.id + 'Added successfully.\n');
            })
        ))
    }
    getGame(req, res) {
        const id = parseInt(req.params.id, 10);

        models.Game.findByPk(id).then((game) => {

            if (game) {
                return res.status(200).send({ game });
            }

            else {
                return res.status(404).send({ message: 'Game does not exist.' });
            }
        });
    }
    getAllGames(req, res) {
        models.Game.findAll().then((games) => {

            if (games) {
                return res.status(200).send({ games });
            }

            else {
                return res.status(404).send({ message: 'No games exist.' });
            }
        });
    }
    getTopGames(req, res) {

        // Default values.
        let offset = 0;
        let limit = 0;
        let where = {
            vote_count: {
                [Sequelize.Op.gt]: 0
            }
        };
        let order = [
            ['vote_count', 'DESC']
        ];

        if (req.body.filters) {

            let filters = req.body.filters;

            if (filters.order_by && filters.direction) {
                order = [
                    [filters.order_by, filters.direction],
                ];
            }

            if (filters.limit) {
                limit = filters.limit;
            }

            if (filters.page) {
                offset = filters.page * limit;
            }

            models.Game.count({ where: where }).then((count) => {

                models.Game.findAll({
                    offset: offset,
                    limit: limit,
                    order: order,
                    where: where

                }).then((games) => {

                    if (games) {
                        return res.status(200).send({ games, count });
                    }

                    else {
                        return res.status(404).send({ message: 'No games found.' });
                    }
                });
            });
        }
        else {
            return res.status(404).send({ message: 'No filter in request body.' });
        }
    }
    search(req, res) {

        // Default values.
        let offset = 0;
        let limit = 0;
        let where = null;
        let order = [
            ['title', 'ASC']
        ];

        if (req.body.filters) {

            let filters = req.body.filters;

            if (filters.title) {
                if (filters.title.length < 3) {
                    // Typehead on two first characters.
                    where = { title: { [Sequelize.Op.like]: filters.title + '%' } }
                }
                else {
                    // Sub-string search.
                    where = { title: { [Sequelize.Op.like]: '%' + filters.title + '%' } }
                }
            }
            if (filters.year) {
                where = { year: filters.year }
            }
            if (filters.producer) {
                where = { producer: filters.producer }
            }
            if (filters.size) {
                where = { size: { [Sequelize.Op.between]: [filters.size - 1024, filters.size + 1024] } }
            }
            if (filters.vote_count) {
                where = { vote_count: filters.vote_count }
            }
            if (filters.order_by && filters.direction) {
                order = [[filters.order_by, filters.direction]];
            }
            if (filters.limit) {
                limit = filters.limit;
            }
            if (filters.page) {
                offset = filters.page * limit;
            }

            models.Game.count({ where: where }).then((count) => {

                models.Game.findAll({
                    offset: offset,
                    limit: limit,
                    order: order,
                    where: where,

                }).then((games) => {

                    if (games) {
                        return res.status(200).send({ games, count });
                    }

                    else {
                        return res.status(404).send({ message: 'No games found.' });
                    }
                });
            });
        }
        else {
            return res.status(404).send({ message: 'No filter in request body.' });
        }
    }
}
const gamesController = new GamesController();
export default gamesController;