import { housesData } from "../data";
import { Link, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useState, useEffect } from "react";
import { GiPositionMarker } from "react-icons/gi";
import { MdCurrencyRupee } from "react-icons/md";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignIN, setIsSignIN] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const signIN = localStorage.getItem("issignIN");
    if (loggedIn === "true" || signIN === "true") {
      setIsLoggedIn(true);
      setIsSignIN(true);
    }
  }, []);

  return (
    <section className="p-10">
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col text-left">
          <h2 className="text-2xl font-semibold">{house.name}</h2>
          <h3 className="text-lg mb-4">{house.address}</h3>
        </div>
        <div className="flex flex-col gap-8">
          {/* Property Details */}
          <div className="flex flex-col gap-5">
            <div className="mb-8 w-full">
              <img
                className="w-full h-full rounded-xl max-h-[500px] object-fit-cover"
                src={house.imageLg}
              />
            </div>
          </div>
          {isLoggedIn || isSignIN ? (
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 p-5">
              {/* Location */}
              <div className="flex flex-col text-left justify-center gap-5 p-4 w-full lg:w-1/3 rounded-2xl shadow-xl">
                <h1 className="text-center text-xl font-semibold">Location</h1>
                <h3 className="flex flex-wrap items-center gap-2 text-lg">
                  Available for:
                  <span className="bg-green-400 rounded-xl px-2 text-white">
                    Rent
                  </span>
                  <span className="bg-violet-500 rounded-xl px-2 text-white">
                    Buy
                  </span>
                </h3>
                <p className="flex gap-2 text-lg">
                  <span className="text-red-600 pt-1">
                    <GiPositionMarker />
                  </span>
                  {house.address}, {house.country}
                </p>
              </div>

              {/* Specifications */}
              <div className="flex flex-col gap-5 p-4 w-full lg:w-1/2 rounded-2xl shadow-xl">
                <h1 className="text-center text-xl font-semibold">
                  Specification
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-violet-700 mb-4 text-2xl">
                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1">
                      {house.bedrooms}
                      <BiBed className="text-3xl pt-1" />
                    </p>
                    <div>Bedrooms</div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-violet-500"></div>
                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1">
                      {house.bathrooms}
                      <BiBath className="text-3xl pt-1" />
                    </p>
                    <div>Bathrooms</div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-violet-500"></div>
                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1">
                      {house.surface}
                      <BiArea className="text-3xl pt-1" />
                    </p>
                    <div>Surface Area</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-left text-lg gap-3 sm:gap-0">
                  <p className="flex items-center bg-green-500 px-2 rounded-lg text-white font-semibold">
                    Price: <MdCurrencyRupee className="ml-1" />
                    {house.price}
                  </p>
                  <p>Built In: {house.year}</p>
                </div>
              </div>

              {/* Agent Info */}
              <div className="flex flex-col gap-5 p-4 w-full lg:w-1/3 rounded-2xl shadow-xl">
                <h1 className="text-center text-xl font-semibold">
                  Agent Details
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    className="w-20 h-20 p-1 border border-gray-300 rounded-full"
                    src={house.agent.image}
                  />
                  <div className="text-lg text-left whitespace-pre-line">
                    {house.agent.name.split(" ")[0]}
                    <br />
                    {house.agent.name.split(" ")[1]}
                  </div>
                </div>
                <div className="text-left text-base space-y-1">
                  <p>Contact: {house.agent.phone}</p>
                  <p>Email: {house.agent.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-red-500 font-semibold text-center">
              Please{" "}
              <Link to="/login" className="text-violet-700 underline">
                login
              </Link>{" "}
              to see more information.
            </p>
          )}

          <div className="flex flex-col gap-5 mt-10">
            <h2 className="flex items-center gap-4 text-xl md:text-2xl text-center">
              <span className="flex-grow h-px bg-violet-500"></span>
              <span className="bg-violet-500 rounded-xl px-3 py-1 text-white">
                About Property
              </span>
              <span className="flex-grow h-px bg-violet-500"></span>
            </h2>
            <p className="text-base md:text-lg font-normal text-left">
              {house.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
