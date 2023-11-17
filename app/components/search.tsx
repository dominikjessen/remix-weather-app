import { useSearchParams } from '@remix-run/react';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

export interface SearchProps {
  onLocationSearched: (newLocation: string) => void;
}

export default function Search({ onLocationSearched }: SearchProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');

  function geoLocateUser() {
    function success(position: GeolocationPosition) {
      const params = new URLSearchParams();
      params.set('location', `${position.coords.latitude},${position.coords.longitude}`);
      setSearchParams(params);
      onLocationSearched('Your Location');
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
    <div className="w-full flex gap-8 items-center">
      <div className="flex relative w-full grow">
        <SearchIcon className="absolute top-[1.3rem] left-[1rem] text-slate-400 h-6 w-6" />
        <input
          placeholder="Search for a location"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="pl-12 pr-2 py-5 bg-white grow rounded-xl text-lg"
        />
      </div>
      <button className="w-16 h-16 rounded bg-slate-200 hover:bg-slate-300 text-slate-700" onClick={geoLocateUser} title="Use your current location">
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
