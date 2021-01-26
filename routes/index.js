import express from 'express';
import GamesController from '../controllers/games';
import VotesController from '../controllers/votes';

const router = express.Router();

router.get('/games', GamesController.getAllGames);
router.get('/games/:id', GamesController.getGame);
router.get('/games/vote/:id', VotesController.setVote);
router.post('/games/top', GamesController.getTopGames);
router.post('/games/search', GamesController.search);

export default router;