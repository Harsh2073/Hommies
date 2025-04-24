<<<<<<< HEAD
import PropertySlider from '../PropertySlider/PropertySlider';
import CountUp from "react-countup";
import Image from '/src/assets/house-banner.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="h-full mb-10">
      {/* Hero Section */}
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 py-14 px-4 bg-gray-200">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
          <motion.h1
            className="text-4xl lg:text-5xl font-semibold leading-tight mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-violet-700">Build </span>Your Dream House With Us.
          </motion.h1>

          <p className="text-lg text-gray-700 max-w-2xl">
            Your gateway to the property market. Whether you&apos;re ready to buy your dream home, sell your current one, or explore recent market trends, we offer expert guidance, a wide selection of properties, and a secure platform. We believe real estate is more than a transaction — it&apos;s about realizing dreams and securing futures.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            {[
              { end: 9000, label: 'Premium Property', start: 8800 },
              { end: 2000, label: 'Rented Property', start: 1950 },
              { end: 28000, label: 'Customers', start: 27980 },
              { end: 3000, label: 'Agents', start: 2900 },
            ].map(({ start = 0, end, label }, i) => (
              <div key={i} className="text-center">
                <span className="text-[32px] font-bold">
                  <CountUp start={start} end={end} duration={3} />
                  <span className="text-violet-700">+</span>
                </span>
                <div className="text-violet-700 text-sm font-semibold">{label}</div>
              </div>
            ))}
          </div>
            <Link
              to="/property"
              className="mt-6 inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
            >
              Explore Properties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
        </div>

        {/* Right Side Image */}
        <motion.div
          className="flex justify-end items-end flex-1"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="max-w-full h-auto object-cover rounded-lg"
            src={Image}
            alt="Real Estate Preview"
          />
        </motion.div>
      </div>

      {/* Slider Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start mt-10 gap-10 px-4">
        <div className="w-full md:w-8/12">
          <PropertySlider />
        </div>
        <div className="w-full md:w-3/12 text-center md:text-right">
          <h2 className="text-3xl lg:text-[54px] font-semibold mb-4">
            Explore the best <span className="text-violet-700">properties</span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of top properties and land listings across all major regions — just waiting for you to explore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
=======
import PropertySlider from '../PropertySlider/PropertySlider'
import CountUp from "react-countup";
import Image from '/src/assets/house-banner.png'
import {motion} from 'framer-motion'


const Banner = () => {
  return (
    <section className='h-full mb-10'>
        <div className='mx-auto flex justify-center gap-5 items-center flex-col lg:flex-row py-10 bg-gray-200'>
            <div className='lg:ml-8 flex flex-col gap-3 items-center lg:items-start text-center justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl text-left lg:text-[58px] font-semibold leading-none mb-6'>
                    <span className='text-violet-700'>Build </span>Your Dream House With Ous.
                </h1>
                <p className='mb-8 text-lg text-left font-normal'>Your gateway to the property market. Whether you are free to buy your dream property, sell your  current one, or gain valuable information on recent market trends. We offers a vast selection of properties, expert guidance, and a secure environment. We understand that buying or selling a property is more than a transaction; its about realizing dreams and securing investments.
                </p>
                <div className="flex items-center justify-center gap-9">
                    <div className="flex flex-col items-center">
                        <span className='text-[32px] font-[600]'>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span className='text-violet-700 text-[32px] font-bold'>+</span>
                        </span>
                        <span className="text-[14.4px] font-[600] text-violet-700"> Premium Products</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className='text-[32px] font-[600]'>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span className='text-violet-700 text-[32px] font-bold'>+</span>
                        </span>
                        <span className="text-[14.4px] font-[600] text-violet-700"> Happy Customers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className='text-[32px] font-[600]'>
                            <CountUp end={28}/>
                        <span className='text-violet-700 text-[32px] font-bold'>+</span>
                        </span>
                        <span className="text-[14.4px] font-[600] text-violet-700">Award Winnings</span>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-end items-end overflow-hidden">
                <motion.img
                    initial={{ y: -100, opacity: 0 }} // Start position (above screen)
                    animate={{ y: 0, opacity: 1 }} // End position (normal)
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                    className="transform transition duration-1000 ease-in max-w-full h-auto object-cover"
                    src={Image}
                    alt="Real Estate Preview"
                />
            </div>
        </div>
        <div className='flex mb-24 md:mt-20 justify-center items-center'>
            <div className='md:w-8/12 w-full'>
                <PropertySlider/>
            </div>
            <div className='md:w-3/12 md:block hidden'>
                <h1 className=' text-4xl lg:text-[54px] font-semibold mb-6 text-right'>
                    Explore best <span className='text-violet-700 text-right'>properties</span>
                </h1>
                <p className='text-right font-normal text-lg'>
                    We holds a wide range of great properties and lands available for sale across all major areas. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Banner
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
