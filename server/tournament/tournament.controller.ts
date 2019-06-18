
import * as express from 'express';
import Tournaments from './tournament.interface';
import { getRepository } from 'typeorm'; //not downloaded
import ValidationMiddleware from '../middleware/validation.mid';

class BashoController {
  public path = '/tournament';
  public router = express.Router();
  private tournamentRepository = getRepository(Tournaments) //not ready

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllTournaments);
    this.router.get(`${this.path}/:id`, this.getTournamentsById);
    this.router
      .post(this.path, ValidationMiddleware(CreateTournamentDto), this.createTournament)
  }

  private getAllTournaments = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournaments = await this.tournamentRepository.find();
    response.send(tournaments);
  }
}
