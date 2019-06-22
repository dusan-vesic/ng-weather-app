export interface City {
  name: string;
  main?: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  weather?: {
    main: string,
    description: string,
    icon: string
  };
}
