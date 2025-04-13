import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Testimonyitems = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-auto p-1">
          <img
            className="h-72 w-80 md:w-96 md:mr-60 object-cover rounded-2xl"
            src={data[currentIndex].image}
            alt="real estate"
          />
        </div>
        <div className="lg:px-21">
          <h1 className="font-Poppins text-xl text-ash text-center mt-11 md:mt-4 lg:mt-0">
            {data[currentIndex].text}
          </h1>
          <div className="flex justify-end">
            <div className="mb-10 md:mb-5 lg:mb-10">
              <h2 className="font-Poppins text-violet-700 text-lg text-right mt-10 lg:mt-5 font-semibold">
                - {data[currentIndex].name}
              </h2>
              <p className="font-Poppins text-ash text-right">{data[currentIndex].role}</p>
            </div>
          </div>
          {/*{<div className="flex items-center justify-center">
            {data.map((_, index) => (
              <span
                key={index}
                className={`py-1 w-10 rounded mx-1 cursor-pointer ${
                  index === currentIndex ? "bg-violet-700" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)} // Allow manual click
              />
            ))}
          </div>}*/}
        </div>
      </div>
    </div>
  );
};
Testimonyitems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonyitems;