import * as bodyParser from 'body-parser';
import * as express from 'express';
import Controller from './interfaces/interface.controller';
// import errorMiddleware from './middleware/error.middleware';

class App {
  public app: express.Application;

  constructor(vsControllers: Controller[]) {
    this.app = express();

    // this.initializeMiddlewares();
    // this.initializeErrorHandling();
    this.initializeControllers(vsControllers);
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  // private initializeMiddlewares() {
  //   this.app.use(bodyParser.json());
  // }

  // private initializeErrorHandling() {
  //   this.app.use(errorMiddleware);
  // }

  private initializeControllers(vsControllers: Controller[]) {
    vsControllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;