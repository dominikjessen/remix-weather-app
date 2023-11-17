import { arrayTransformDailyForecastData } from '~/lib/utils';
import type { DailyForecast, DailyUnits } from '~/types/weather';
import WeatherCard from './weatherCard';

export interface DailyForecastProps {
  data: DailyForecast;
  units?: DailyUnits;
}

export default function DailyForecast({ data, units }: DailyForecastProps) {
  return (
    <div className="w-full py-8 rounded bg-amber-200">
      <h3>In the coming days:</h3>
      <div className="grid grid-cols-5 gap-4">
        {arrayTransformDailyForecastData(data).map((day) => (
          <WeatherCard key={day.time} variant="minmax" data={day} />
        ))}
      </div>
    </div>
  );
}
