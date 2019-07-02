import * as express from 'express';
import Wrestlers from './wrestlers.entity';
import { getRepository } from "typeorm";
import ValidationMiddleware from '../middleware/validation.mid';
import CreateWrestlersDto from './wrestlers.dto';

class WrestlersController {
  public path = '/wrestlers';
  public router = express.Router();
  public wrestlersRepository = getRepository(Wrestlers)

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(this.path, this.getAllWrestlers):
    this.router.get(`${this.path}/:id`, this.getWrestlerById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, ValidationMiddleware(CreateWrestlersDto), this.createWrestler)
      .put(`${this.path}/:id`, ValidationMiddleware(CreateWrestlersDto), this.modifyWrestler)
      .delete(`${this.path}/id`, this.deleteWrestler);
  }
  private getAllWrestlers = (){ }
  private getWrestlerById = (){ }
  private createWrestler = (){ }
  private modifyWrestler = (){ }
  private deleteWrestler = (){ }
}

export default WrestlersController;
