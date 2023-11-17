import type { CurrentForecast, CurrentUnits } from '~/types/weather';
import WeatherIcon from './weatherIcon';

export interface CurrentForecastProps {
  data: CurrentForecast;
  units?: CurrentUnits;
}

export default function CurrentForecast({ data, units }: CurrentForecastProps) {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h3 className="font-bold text-2xl text-slate-700">Currently</h3>
      <div className="flex gap-24 items-center py-8 px-24 bg-white">
        <div className="flex items-center gap-8">
          <WeatherIcon weather_code={data.weather_code} className="w-24 h-24" />
          <div className="flex gap-0.5">
            <span className="font-bold text-5xl tracking-wide">{data.temperature_2m.toFixed(0)}</span>
            <span>{units?.temperature_2m}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-slate-600">
          <div className="flex gap-0.5">
            <span>Feels like:</span>
            <span>{data.apparent_temperature.toFixed(0)}</span>
            <span>{units?.apparent_temperature}</span>
          </div>
          <div className="flex gap-0.5">
            <span>Precipitation:</span>
            <span>{data.precipitation.toFixed(0)}</span>
            <span>{units?.precipitation}</span>
          </div>
          <div className="flex gap-0.5">
            <span>Humidity:</span>
            <span>{data.relative_humidity_2m.toFixed(0)}</span>
            <span>{units?.relative_humidity_2m}</span>
          </div>
          <div className="flex gap-0.5">
            <span>Wind:</span>
            <span>{data.wind_speed_10m.toFixed(0)}</span>
            <span>{units?.wind_speed_10m}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
