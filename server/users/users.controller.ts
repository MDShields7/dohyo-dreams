import * as express from 'express';
import Users from './users.entity';
import { getRepository } from "typeorm";
import ValidationMiddleware from '../middleware/validation.mid';
import CreateUsersDto from './users.dto';

class WrestlersController {
  public path = '/users';
  public router = express.Router();
  public wrestlersRepository = getRepository(Users)

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(this.path, this.getAllUsers):
    this.router.get(`${this.path}/:id`, this.getUserById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, ValidationMiddleware(CreateUsersDto), this.createUser)
      .put(`${this.path}/:id`, ValidationMiddleware(CreateUsersDto), this.modifyUser)
      .delete(`${this.path}/id`, this.deleteUser);
  }
  private getAllUsers = (){ }
  private getUserById = (){ }
  private createUser = (){ }
  private modifyUser = (){ }
  private deleteUser = (){ }
}

export default WrestlersController;
