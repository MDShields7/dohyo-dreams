import locale from '../tournaments/tournaments.locale.enum';

interface Tournament {
  name: string;
  dateStart: string;
  dateEnd: string;
  cancelled: boolean;
  location: locale;
}
export default Tournament;
