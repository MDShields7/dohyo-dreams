require('dotenv').config();
import { } from 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import * as config from './ormconfig';

import RankingsController from './rankings/rankings.controller';
import RankChartsController from './rankCharts/rankCharts.controller';
import TournamentsController from './tournaments/tournaments.controller';
import UsersController from './users/users.controller';
import validateEnv from './utils/validateEnv';
import WrestlersController from './wrestlers/wrestlers.controller';

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
      new TournamentsController(),
      new WrestlersController(),
      new RankingsController(),
      new RankChartsController(),
      new UsersController(),
    ],
  );
  app.listen();
})();
