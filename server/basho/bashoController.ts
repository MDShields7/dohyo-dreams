import * as express from 'express';
import Basho from './basho.interface';
import { getRepository } from 'typeorm'; //not downloaded

class BashoController {
  public path = '/basho';
  public router = express.Router();
  private bashoRepository = getRepository(Basho) //not ready

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllBasho);
  }

  private getAllBasho = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const bashos = await this.bashoRepository.find();
    response.send(bashos);
  }
}
