import { NextFunction } from 'connect';
import * as express from 'express';
import { getRepository } from 'typeorm';
import validationMiddleware from '../middleware/validation.mid';
import CreateUsersDto from './users.dto';
import Users from './users.entity';

class UsersController {
  public path = '/users';
  public router = express.Router();
  public usersRepository = getRepository(Users);

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.get(`${this.path}/:id`, this.getUserById);
    this.router
      .all(`${this.path}/*`)
      .post(this.path, validationMiddleware(CreateUsersDto), this.createUser)
      .put(`${this.path}/:id`, validationMiddleware(CreateUsersDto), this.modifyUser)
      .delete(`${this.path}/id`, this.deleteUser);
  }
  private getAllUsers = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const users = await this.usersRepository.find();
    response.send(users);
  }

  private getUserById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const users = await this.usersRepository.findOne(id);
    if (users) {
      response.send(users);
    } else {
      next();
    }
  }
  private createUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const usersData: CreateUsersDto = request.body;
    const newUser = this.usersRepository.create(usersData);
    await this.usersRepository.save(newUser);
    response.send(newUser);
  }
  private modifyUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const usersData: Users = request.body;
    const updateResponse = await this.usersRepository.update(id, usersData);
    if (updateResponse) {
      response.send(updateResponse);
    } else {
      next();
    }
  }
  private deleteUser = async (request: express.Request, response: express.Response, next: NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.usersRepository.delete(id);
    if (deleteResponse) {
      response.send(deleteResponse);
    }
  }
}

export default UsersController;
