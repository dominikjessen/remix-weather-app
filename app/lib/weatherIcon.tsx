import { Cloud, CloudRain, Sun, CloudFog } from 'lucide-react';

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
    case 0:
    case 45:
      return <CloudFog className={className} />;
    case 3:
      return <Cloud className={className} />;
    case 61:
    case 80:
      return <CloudRain className={className} />;
    default:
      return <Sun className={className} />;
  }
}
