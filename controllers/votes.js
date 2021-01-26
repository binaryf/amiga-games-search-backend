/* eslint-disable class-methods-use-this */
import models from '../models';

class VotesController {
    setVote(req, res) {
        const id = parseInt(req.params.id, 10);

        // Using forwarded client ip address from Proxy.
        let ip = req.header('x-forwarded-for');

        models.Game.findByPk(id).then((game) => {

            if (game) {

                // Lookup on game-id and client ip.
                models.Vote.count({ where: { gameId: game.id, ip: ip } }).then((count) => {

                    if (count === 0) {

                        // If no vote exists, create a new vote.
                        const new_vote = {
                            vote: 1,
                            ip: ip,
                            gameId: game.id,
                        }

                        models.Vote.create(new_vote).then((vote) => {

                            // And then update the Games table with a vote count.
                            game.update(
                                { vote_count: game.vote_count + 1 },
                            );

                            return res.status(200).send({
                                game,
                            });
                        });
                    }
                    else {
                        return res.status(404).send({
                            message: 'Vote is already registred.',
                            votes,
                        });
                    }
                });
            }
            else {
                return res.status(404).send({
                    message: 'Game does not exist.',
                });
            }
        });
    }
}

const voteController = new VotesController();
export default voteController;