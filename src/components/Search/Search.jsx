<<<<<<< HEAD
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown';
import PriceRangeDropdown from '../PriceRangeDropdown/PriceRangeDropdown';

import { RiSearch2Line } from "react-icons/ri";
import { useContext } from 'react';
import { HouseContext } from '../HouseContext/HouseContext';

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
      
      {/* Dropdowns */}
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
      </div>

      {/* Search Button */}
      <button
        onClick={() => handleClick()}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 text-white px-6 py-4 rounded-xl text-lg font-semibold transition"
      >
        <RiSearch2Line className="text-2xl" />
        Search
      </button>
    </div>
  );
};

export default Search;
=======
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown';
import PriceRangeDropdown from '../PriceRangeDropdown/PriceRangeDropdown';

import { RiSearch2Line } from "react-icons/ri";
import { useContext } from 'react';
import { HouseContext } from '../HouseContext/HouseContext';


const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] flex flex-col mx-auto items-center lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent rounded-ld '>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={()=>handleClick()}
      className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
