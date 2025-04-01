import {useState } from "react";

// eslint-disable-next-line react/prop-types
const Testimonyitems = ({ data }) => {
    const [current, setCurrent] = useState(data[0]);
    const [active, setActive] = useState(current);
  
    const handleClick = (e) => {
      setCurrent(data[e.target.getAttribute("data-testimonial")]);
      setActive(e.target.getAttribute("data-testimonial"));
    };
  
    return (
        <div>
          <div className="flex flex-col  md:flex-row justify-center items-center">
            <div className="w-auto  p-1 ">
              <img
                className="h-72 w-80 md:w-96 md:mr-60 object-cover rounded-2xl"
                src={current.image}
                alt="real estate"
              />
            </div>
            <div className="lg:px-21">
              <h1 className="font-Poppins text-xl text-ash text-right  mt-11 md:mt-4  lg:mt-0 ">
                {current.text}
              </h1>
              <div className="flex justify-end">
                <div className="mb-10 md:mb-5 lg:mb-10">
                  <h2 className="font-Poppins text-violet-700 text-lg text-right mt-10 lg:mt-5  font-semibold ">
                    {current.name}
                  </h2>
                  <p className="font-Poppins text-ash text-right ">Client</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {Object.keys(data).map((index) => (
                  <span
                    id={index}
                    key={index}
                    data-testimonial={index}
                    onClick={handleClick}
                    className={`py-1 w-10 rounded mx-1 cursor-pointer  ${
                      active === index ? "bg-violet-700" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    );
}

export default Testimonyitems