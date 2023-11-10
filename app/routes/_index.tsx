import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Remix Weather Demo' }, { name: 'description', content: 'Check the weather in...' }];
};

export default function Index() {
  return (
    <div className="flex flex-col bg-green-200">
      <h1 className="font-bold text-2xl">A sweet Remix Weather App</h1>
    </div>
  );
}
