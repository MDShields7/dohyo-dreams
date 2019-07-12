import * as express from 'express';
import { getRepository } from 'typeorm';
import validationMiddleware from '../middleware/validation.mid';
import CreateRankingsDto from './rankings.dto';
import Rankings from './rankings.entity';

class RankingsController {
  public path = '/rankings';
  public router = express.Router();
  private rankingsRepository = getRepository(Rankings);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllRankings);
    this.router.get(`${this.path}/:id`, this.getRankingById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, validationMiddleware(CreateRankingsDto), this.createRanking)
      .put(`${this.path}/:id`, validationMiddleware(CreateRankingsDto), this.modifyRanking)
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
      next();
    }
  }
  private createRanking = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const rankingsData: CreateRankingsDto = request.body;
    const newRanking = this.rankingsRepository.create(rankingsData);
    await this.rankingsRepository.save(newRanking);
    response.send(newRanking);

  }
  private modifyRanking = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const rankingsData: Rankings = request.body;
    const updateResponse = await this.rankingsRepository.update(id, rankingsData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next();
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
