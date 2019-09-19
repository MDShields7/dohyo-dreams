import { Request } from 'express';
import Tournament from './tournaments.interface';

interface RequestWithTournament extends Request {
  tournament: Tournament;
}

export default RequestWithTournament;