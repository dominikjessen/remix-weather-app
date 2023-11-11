import type { CurrentForecast, CurrentUnits } from '~/types/weather';

export interface CurrentForecastProps {
  units?: CurrentUnits;
  data: CurrentForecast;
}

export default function CurrentForecast({ units, data }: CurrentForecastProps) {
  return <div className="w-full py-8 rounded bg-amber-200">Forecast next days section</div>;
}
