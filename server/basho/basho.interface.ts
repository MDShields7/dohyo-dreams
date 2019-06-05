import locale from "./basho.locale.enum";

interface Basho {
  name: string;
  year: Date;
  dateStart: Date;
  dateEnd: Date;
  cancelled: boolean;
  location: locale;
  banzukeId: number;
}

export default Basho;