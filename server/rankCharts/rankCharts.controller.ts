import * as express from 'express';
import { getRepository } from 'typeorm';
import loggerMiddleware from '../middleware/logger.mid';
import Tournaments from '../tournaments/tournaments.entity';

class RankingsController {
  public path = '/rankCharts';
  public router = express.Router();
  private rankChartsRepository = getRepository(Tournaments);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, loggerMiddleware, this.getRankingById);
  }
  private getRankingById = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const name = request.query.name;
    const year = request.query.year;
    const tourney = name + ' ' + year;
    console.log("'" + tourney + "'");
    const rankChart = await getRepository(Tournaments)
      .createQueryBuilder("tournaments")
      .leftJoinAndSelect("tournaments.rankings", "rankings")
      // .innerJoinAndSelect("wrestlers.rankings", "rankings")
      .innerJoinAndSelect("rankings.wrestler", "wrestlers")
      .where("tournaments.name = :name", { name: tourney })
      .getOne();
    if (rankChart) {
      response.send(rankChart);
    } else {
      next();
    }
  }

}
export default RankingsController;
