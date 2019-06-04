enum locale {
  Tokyo = 1,
  Osaka,
  Nagoya,
  Fukuoka,
}

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