import { Request } from 'express';
import Wrestler from './wrestlers.interface';

interface RequestWithWrestler extends Request {
  wrestler: Wrestler
}
export default RequestWithWrestler;
