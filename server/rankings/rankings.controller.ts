import * as express from 'express';
import Rankings from './rankings.entity';
import { getRepository } from 'typeorm';
import ValidationMiddleware from '../middleware/validation.mid';
import CreateRankingsDto from './rankings.dto';

class RankingsController {
  public path = '/rankings';
  public router = express.Router();
  private rankingsRepository = getRepository(Rankings)

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllRankings);
    this.router.get(`${this.path}/:id`, this.getRankingById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, ValidationMiddleware(CreateRankingsDto), this.createRanking)
      .put(`${this.path}/:id`, ValidationMiddleware(CreateRankingsDto), this.modifyRanking)
      .delete(`${this.path}/id`, this.deleteRanking);
  }
  private getAllRankings = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const rankings = await this.rankingsRepository.find();
    response.send(rankings);
  }
  private getRankingById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const rankings = await this.rankingsRepository.findOne(id);
    if (rankings) {
      response.send(rankings);
    } else {
      next()
    }
  }
  private createRanking = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentsData: Rankings = request.body;
    const createResponse = await this.rankingsRepository.create(tournamentsData);
    if (createResponse) {
      response.send(createResponse);
    } else {
      next()
    }
  }
  private modifyRanking = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const rankingsData: Rankings = request.body;
    const updateResponse = await this.rankingsRepository.update(id, rankingsData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next()
    }
  }
  private deleteRanking = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.rankingsRepository.delete(id);
    if (deleteResponse) {
      response.send(deleteResponse);
    }
  }
}
export default RankingsController;