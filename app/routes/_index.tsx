import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Remix Weather Demo' }, { name: 'description', content: 'Check the weather in...' }];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-4/5 mx-auto py-12">
      <div className="w-full py-8 rounded bg-green-200">Searchbar</div>
      <div className="w-full py-8 rounded bg-pink-200">Current weather section</div>
      <div className="w-full py-8 rounded bg-amber-200">Forecast next days section</div>
    </div>
  );
}
