import WeatherIcon from '~/lib/weatherIcon';
import type { SingleDayForecast } from '~/types/weather';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface WeatherCardProps {
  variant: 'minmax' | 'single';
  data: SingleDayForecast;
}

export default function WeatherCard({ variant, data }: WeatherCardProps) {
  if (!data.weather_code || !(data.temperature_2m || (data.temperature_2m_min && data.temperature_2m_max)) || !data.time) return null;

  return (
    <div className="w-full h-full p-16 rounded bg-white">
      <div>
        <span>{DAYS_OF_WEEK[new Date(data.time).getDay()]}</span>
        <span>{new Date(data.time).getDate()}</span>
        <span>{new Date(data.time).getMonth()}</span>
      </div>
      <div className="flex gap-2">
        <WeatherIcon weather_code={data.weather_code} className="w-16 h-16" />
        {variant === 'minmax' ? (
          <div>
            <div>H: {data.temperature_2m_max}</div>
            <div>L: {data.temperature_2m_min}</div>
          </div>
        ) : (
          <div>{data.temperature_2m}</div>
        )}
      </div>
    </div>
  );
}
