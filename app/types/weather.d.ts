export type WeatherForecast = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units?: CurrentUnits;
  current?: CurrentForecast;
  daily_units?: DailyUnits;
  daily?: DailyForecast;
};

export type CurrentUnits = {
  time?: 'iso8601';
  interval?: 'seconds';
  weather_code?: 'wmo code';
  temperature_2m?: '°C';
};

export type CurrentForecast = {
  time?: string;
  interval?: number;
  weather_code?: number;
  temperature_2m?: number;
};

export type DailyUnits = {
  time?: 'iso8601';
  interval?: 'seconds';
  weather_code?: 'wmo code';
  temperature_2m_max?: '°C';
  temperature_2m_min?: '°C';
};

export type DailyForecast = {
  time?: string[];
  weather_code?: number[];
  temperature_2m_max?: number[];
  temperature_2m_min?: number[];
};

export type SingleDayForecast = {
  time?: string;
  interval?: number;
  weather_code?: number;
  temperature_2m?: number;
  temperature_2m_max?: number;
  temperature_2m_min?: number;
};
