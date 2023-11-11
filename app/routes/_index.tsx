import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [{ title: 'Remix Weather Demo' }, { name: 'description', content: 'Check the weather in...' }];
};

export default function Index() {
  const [searchValue, setSearchValue] = useState('');

  function geoLocateUser() {
    function success(position: GeolocationPosition) {
      console.log(position.coords.latitude, position.coords.longitude);
    }

    function error() {
      alert('Could not locate user');
    }

    if (!navigator.geolocation) {
      alert('Geolocation not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-4/5 mx-auto py-12">
      <div className="w-full py-8 rounded bg-green-200">
        <input placeholder="Search for a location" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button className="w-10 h-10 rounded hover:bg-slate-300 text-slate-700" onClick={geoLocateUser}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 m-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        </button>
      </div>
      <div className="w-full py-8 rounded bg-pink-200">Current weather section</div>
      <div className="w-full py-8 rounded bg-amber-200">Forecast next days section</div>
    </div>
  );
}
