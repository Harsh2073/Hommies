<<<<<<< HEAD
import { useState, useContext } from "react";
import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext/HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative w-full lg:max-w-[296px] z-20">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between h-[64px] w-full px-4 border rounded-lg bg-white shadow-sm transition duration-200 focus:ring-2 ring-violet-300"
      >
        <div className="flex items-center gap-4">
          <RiMapPinLine className="text-2xl text-violet-700" />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-800">{country}</div>
            <div className="text-xs text-gray-500">Select your place</div>
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-2xl text-violet-700" />
        ) : (
          <RiArrowDownSLine className="text-2xl text-violet-700" />
        )}
      </Menu.Button>

      <Menu.Items className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg py-3 max-h-64 overflow-y-auto ring-1 ring-gray-200 focus:outline-none">
        {countries.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <button
                onClick={() => {
                  setCountry(item);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  active
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-700 hover:bg-violet-50"
                } transition duration-150`}
              >
                {item}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
=======
import { useState, useContext } from "react"

import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

import {Menu} from '@headlessui/react';
import {HouseContext} from '../HouseContext/HouseContext'


const CountryDropdown = () => {
  const {country,setCountry,countries} =useContext(HouseContext);
  const [isOpen,setIsOpen]=useState(false)
  return (
    <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)}
      className="flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left">
        <RiMapPinLine className="text-2xl mr-[18px] text-violet-700"/>
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className="text-2xl text-violet-700 ml-auto"/>
          ) : (
            <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto"/>
          )
        }
      </Menu.Button>

      <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
        {countries.map((country,index)=>{
          return(
            <Menu.Item 
            onClick={()=>setCountry(country)}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li'
            key={index}>
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default CountryDropdown
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
