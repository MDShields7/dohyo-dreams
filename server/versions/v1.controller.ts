import * as express from 'express';

class vsController {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initializeControllers();
  }
  private initializeControllers(controllers: Controllers[]) {
    this.router.get(`${this.path}/v1`, this.getV1);
    this.router.get(`${this.path}/v2`, this.getV2)
  }
  private getV1() {
  }
  private getV2() {
  }
}