import * as express from 'express';
import { getRepository } from 'typeorm';
import validationMiddleware from '../middleware/validation.mid';
import loggerMiddleware from '../middleware/logger.mid';
import CreateTournamentsDto from './tournaments.dto';
import Tournaments from './tournaments.entity';

class TournamentsController {
  public path = '/tournaments';
  public router = express.Router();
  private tournamentsRepository = getRepository(Tournaments);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, loggerMiddleware, this.getAllTournaments);
    this.router.get(`${this.path}/:id`, loggerMiddleware, this.getTournamentById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, loggerMiddleware, validationMiddleware(CreateTournamentsDto), this.createTournament)
      .put(`${this.path}/:id`, loggerMiddleware, validationMiddleware(CreateTournamentsDto), this.modifyTournament)
      .delete(`${this.path}/:id`, loggerMiddleware, this.deleteTournament);
  }
  private getAllTournaments = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    // const tournaments = await this.tournamentsRepository.find({ relations: ['rankings', 'rankings.wrestler'] });
    const tournaments = await this.tournamentsRepository.find();
    response.send(tournaments);
  }
  private getTournamentById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const tournaments = await this.tournamentsRepository.findOne(id);
    if (tournaments) {
      response.send(tournaments);
    } else {
      next();
    }
  }
  private createTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentsData: CreateTournamentsDto = request.body;
    const newTournament = this.tournamentsRepository.create(tournamentsData);
    await this.tournamentsRepository.save(newTournament);
    response.send(newTournament);
  }
  private modifyTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const tournamentsData: Tournaments = request.body;
    const updateResponse = await this.tournamentsRepository.update(id, tournamentsData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next();
    }
  }
  private deleteTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.tournamentsRepository.delete(id);
    if (deleteResponse) {
      response.send(deleteResponse);
    }
  }
}

export default TournamentsController;
