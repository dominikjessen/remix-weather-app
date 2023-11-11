import { useSearchParams } from '@remix-run/react';
import { useState } from 'react';

export default function Search() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');

  function geoLocateUser() {
    function success(position: GeolocationPosition) {
      const params = new URLSearchParams();
      params.set('location', `${position.coords.latitude},${position.coords.longitude}`);
      setSearchParams(params);
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
  );
}
