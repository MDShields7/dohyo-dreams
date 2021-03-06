import * as express from 'express';
import { getRepository } from 'typeorm';
import validationMiddleware from '../middleware/validation.mid';
import loggerMiddleware from '../middleware/logger.mid';
import CreateWrestlersDto from './wrestlers.dto';
import Wrestlers from './wrestlers.entity';

class WrestlersController {
  public path = '/wrestlers';
  public router = express.Router();
  public wrestlersRepository = getRepository(Wrestlers);

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(this.path, this.getAllWrestlers);
    this.router.get(`${this.path}/:id`, this.getWrestlerById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, loggerMiddleware, validationMiddleware(CreateWrestlersDto), this.createWrestler)
      .put(`${this.path}/:id`, validationMiddleware(CreateWrestlersDto), this.modifyWrestler)
      .delete(`${this.path}/:id`, this.deleteWrestler);
  }
  private getAllWrestlers = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const wrestlers = await this.wrestlersRepository.find();
    response.send(wrestlers);
  }
  private getWrestlerById = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const id = request.params.id;
    const wrestlers = await this.wrestlersRepository.findOne(id);
    if (wrestlers) {
      response.send(wrestlers);
    } else {
      next();
    }
  }
  private createWrestler = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const wrestlersData: CreateWrestlersDto = request.body;
    const newWrestler = this.wrestlersRepository.create(wrestlersData);
    await this.wrestlersRepository.save(newWrestler);
    response.send(newWrestler);
  }
  private modifyWrestler = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const id = request.params.id;
    const wrestlersData: Wrestlers = request.body;
    const updateResponse = await this.wrestlersRepository.update(id, wrestlersData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next();
    }
  }
  private deleteWrestler = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const id = request.params.id;
    const deleteResponse = await this.wrestlersRepository.delete(id);
    if (deleteResponse) {
      response.send(deleteResponse);
    }
  }
}

export default WrestlersController;
