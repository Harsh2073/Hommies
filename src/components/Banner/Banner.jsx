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
            Your gateway to the property market. Whether you're ready to buy your dream home, sell your current one, or explore recent market trends, we offer expert guidance, a wide selection of properties, and a secure platform. We believe real estate is more than a transaction — it's about realizing dreams and securing futures.
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
            className="max-w-full h-auto object-cover rounded-lg shadow-lg"
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
