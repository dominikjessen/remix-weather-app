import type { SingleDayForecast } from '~/types/weather';

export interface WeatherCardProps {
  variant: 'minmax' | 'single';
  data: SingleDayForecast;
}

export default function WeatherCard({ variant, data }: WeatherCardProps) {
  console.log('weather data', data);

  return (
    <div className="w-full h-full p-16 rounded bg-white">
      <p>DAY</p>
      <div className="flex gap-2">
        <div>{data.weather_code}</div>
        {variant === 'minmax' ? (
          <div>
            <div>{data.temperature_2m_max}</div>
            <div>{data.temperature_2m_min}</div>
          </div>
        ) : (
          <div>{data.temperature_2m}</div>
        )}
      </div>
    </div>
  );
}
