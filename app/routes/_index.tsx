import { json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CurrentForecast from '~/components/currentForecast';
import DailyForecast from '~/components/dailyForecast';
import Search from '~/components/search';
import { type WeatherForecast } from '~/types/weather';

export const meta: MetaFunction = () => {
  return [{ title: 'Remix Weather Demo' }, { name: 'description', content: 'Check the weather in...' }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const latLong = url.searchParams.get('location')?.split(',') ?? null;
  if (!latLong) return null;

  const timezone = 'timezone=auto';
  const forecast_days = 'forecast_days=14';
  const current = 'current=weather_code,temperature_2m';
  const daily = 'daily=weather_code,temperature_2m_max,temperature_2m_min';

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latLong[0]}&longitude=${latLong[1]}&${timezone}&${current}&${daily}&${forecast_days}`
  );
  if (res.ok) {
    return json(await res.json());
  }

  return null;
}

export default function Index() {
  const forecast = useLoaderData<WeatherForecast>();

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-4/5 mx-auto py-12">
      <Search />
      {forecast && forecast.current && <CurrentForecast data={forecast.current} />}
      {forecast && forecast.daily && <DailyForecast data={forecast.daily} />}
    </div>
  );
}
