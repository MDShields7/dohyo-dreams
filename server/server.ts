import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
// import PostController from './post/post.controller';
import validateEnv from './utils/validateEnv';
import UsersController from './users/users.controller'
import TournamentsController from './tournaments/tournaments.controller'
import WrestlersController from './wrestlers/wrestlers.controller'
import RankingsController from './rankings/rankings.controller'

validateEnv();

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new UsersController(),
      new TournamentsController(),
      new WrestlersController(),
      new RankingsController(),
    ],
    // [
    //   new VersionController(),
    // ],
  );
  app.listen();
})();
