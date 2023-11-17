import { arrayTransformDailyForecastData } from '~/lib/utils';
import type { DailyForecast, DailyUnits } from '~/types/weather';
import WeatherCard from './weatherCard';

export interface DailyForecastProps {
  data: DailyForecast;
  units?: DailyUnits;
}

export default function DailyForecast({ data, units }: DailyForecastProps) {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h3 className="font-bold text-2xl text-slate-700">10-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4">
        {arrayTransformDailyForecastData(data).map((day) => (
          <WeatherCard key={day.time} variant="minmax" data={day} />
        ))}
      </div>
    </div>
  );
}
