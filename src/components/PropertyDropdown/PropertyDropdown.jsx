<<<<<<< HEAD
import { useState, useContext } from "react";
import {
  RiHome5Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext/HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative w-full lg:max-w-[296px] z-20">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between h-[64px] w-full px-4 border rounded-lg bg-white shadow-sm transition duration-200 focus:ring-2 ring-violet-300"
      >
        <div className="flex items-center gap-4">
          <RiHome5Line className="text-2xl text-violet-700" />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-800">{property}</div>
            <div className="text-xs text-gray-500">Select property type</div>
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-2xl text-violet-700" />
        ) : (
          <RiArrowDownSLine className="text-2xl text-violet-700" />
        )}
      </Menu.Button>

      <Menu.Items className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg py-3 max-h-64 overflow-y-auto ring-1 ring-gray-200 focus:outline-none">
        {properties.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <button
                onClick={() => {
                  setProperty(item);
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

export default PropertyDropdown;
=======
import { useState, useContext } from "react"

import {RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

import {Menu} from '@headlessui/react';
import {HouseContext} from '../HouseContext/HouseContext'


const PropertyDropdown = () => {
  const {property,setProperty,properties} =useContext(HouseContext);
  const [isOpen,setIsOpen]=useState(false)
  return (
    <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)}
      className="flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left">
        <RiHome5Line className="text-2xl mr-[18px] text-violet-700"/>
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {
          isOpen ?(
            <RiArrowUpSLine className="text-2xl  text-violet-700 ml-auto"/>
            ):(
            <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto"/>
            ) 
          }
      </Menu.Button>

      <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
        {properties.map((property,index)=>{
          return(
            <Menu.Item 
            onClick={()=>setProperty(property)}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li'
            key={index}>
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown;
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
