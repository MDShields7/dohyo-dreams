import locale from "./tournament.locale.enum";

interface Tournament {
  name: string;
  year: string;
  dateStart: string;
  dateEnd: string;
  cancelled: boolean;
  location: locale;
}

export default Tournament;