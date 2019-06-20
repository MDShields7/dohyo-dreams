
import * as express from 'express';
import Tournament from './tournament.interface';
import { getRepository } from 'typeorm'; //not downloaded
import ValidationMiddleware from '../middleware/validation.mid';
import CreateTournamentDto from './tournament.dto';

class TournamentController {
  public path = '/v1/tournament';
  public router = express.Router();
  private tournamentRepository = getRepository(Tournament)

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllTournaments);
    this.router.get(`${this.path}/:id`, this.getTournamentById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, ValidationMiddleware(CreateTournamentDto), this.createTournament)
      .put(`${this.path}/:id`, ValidationMiddleware(CreateTournamentDto), this.modifyTournament)
      .delete(`${this.path}/id`, this.deleteTournament);
  }
  private getAllTournaments = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournaments = await this.tournamentRepository.find();
    response.send(tournaments);
  }
  private getTournamentById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const tournaments = await this.tournamentRepository.findOne(id);
    if (tournaments) {
      response.send(tournaments);
    } else {
      next()
    }
  }
  private createTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentsData: Tournament = request.body;
    const createResponse = await this.tournamentRepository.create(tournamentsData);
    if (createResponse) {
      response.send(createResponse);
    } else {
      next()
    }
  }
  private modifyTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const tournamentsData: Tournament = request.body;
    const updateResponse = await this.tournamentRepository.update(id, tournamentsData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next()
    }
  }
  private deleteTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.tournamentRepository.delete(id);
    if (deleteResponse) {
      response.send(deleteResponse);
    }
  }
}
export default TournamentController;