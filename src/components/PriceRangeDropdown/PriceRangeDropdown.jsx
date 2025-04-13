import { useState, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext/HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: "Price range (any)" },
    { value: "10,000 - 30,000" },
    { value: "30,000 - 40,000" },
    { value: "100,000 - 130,000" },
    { value: "130,000 - 160,000" },
    { value: "160,000 - 190,000" },
    { value: "190,000 - 220,000" },
  ];

  return (
    <Menu as="div" className="relative w-full lg:max-w-[296px] z-20">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between h-[64px] w-full px-4 border rounded-lg bg-white shadow-sm transition duration-200 focus:ring-2 ring-violet-300"
      >
        <div className="flex items-center gap-4">
          <RiWallet3Line className="text-2xl text-violet-700" />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-800">{price}</div>
            <div className="text-xs text-gray-500">Choose price range</div>
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-2xl text-violet-700" />
        ) : (
          <RiArrowDownSLine className="text-2xl text-violet-700" />
        )}
      </Menu.Button>

      <Menu.Items className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg py-3 max-h-64 overflow-y-auto ring-1 ring-gray-200 focus:outline-none">
        {prices.map((priceItem, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <button
                onClick={() => {
                  setPrice(priceItem.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  active
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-700 hover:bg-violet-50"
                } transition duration-150`}
              >
                {priceItem.value}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
