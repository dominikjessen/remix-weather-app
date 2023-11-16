import { Cloud, CloudDrizzle, CloudRain, Sun, CloudFog, Haze } from 'lucide-react';

export interface WeatherIconProps {
  weather_code: number;
  className?: string;
}

/*
 ** Depending on the weather code, this returns the correct icon.
 ** More info here: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 */
// TODO: Map all from 0 - 99
export default function WeatherIcon({ weather_code, className }: WeatherIconProps) {
  switch (weather_code) {
    case 5:
      return <Haze className={className} />;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 28:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
      return <CloudFog className={className} />;
    case 3:
      return <Cloud className={className} />;
    case 20:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 66:
    case 68:
    case 80:
    case 83:
      return <CloudDrizzle className={className} />;
    case 21:
    case 23:
    case 24:
    case 25:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 67:
    case 69:
    case 81:
    case 82:
    case 84:
      return <CloudRain className={className} />;
    default:
      return <Sun className={className} />;
  }
}
