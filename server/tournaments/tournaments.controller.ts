import * as express from 'express';
import Tournaments from './tournaments.entity';
import { getRepository } from 'typeorm';
import ValidationMiddleware from '../middleware/validation.mid';
import CreateTournamentsDto from './tournaments.dto';

class TournamentsController {
  public path = '/tournaments';
  public router = express.Router();
  private tournamentsRepository = getRepository(Tournaments)

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllTournaments);
    this.router.get(`${this.path}/:id`, this.getTournamentById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, ValidationMiddleware(CreateTournamentsDto), this.createTournament)
      .put(`${this.path}/:id`, ValidationMiddleware(CreateTournamentsDto), this.modifyTournament)
      .delete(`${this.path}/id`, this.deleteTournament);
  }
  private getAllTournaments = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournaments = await this.tournamentsRepository.find();
    response.send(tournaments);
  }
  private getTournamentById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const tournaments = await this.tournamentsRepository.findOne(id);
    if (tournaments) {
      response.send(tournaments);
    } else {
      next()
    }
  }
  private createTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentsData: Tournaments = request.body;
    const createResponse = await this.tournamentsRepository.create(tournamentsData);
    if (createResponse) {
      response.send(createResponse);
    } else {
      next()
    }
  }
  private modifyTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const tournamentsData: Tournaments = request.body;
    const updateResponse = await this.tournamentsRepository.update(id, tournamentsData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next()
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