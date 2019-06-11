import locale from "./tournament.locale.enum";

interface Tournament {
  name: string;
  year: Date;
  dateStart: Date;
  dateEnd: Date;
  cancelled: boolean;
  location: locale;
  tournament: Rankings[];
}

export default Tournament;