<<<<<<< HEAD
import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="flex flex-col p-6 md:px-12 lg:px-20 bg-gray-200">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-Poppins font-bold text-3xl md:text-4xl">
          Our Main{" "}
          <span className="text-white rounded-2xl px-3 bg-violet-600">
            Focus
          </span>
        </h1>
        <p className="text-base md:text-lg">
          Dedicated to Connecting You with Your Dream Home Through Trust,
          <br className="hidden sm:block" />
          Quality Service, and Expert Guidance Every Step of the Way
        </p>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Buy A Home */}
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col gap-6 items-center text-center">
            <HiOutlineHome className="text-violet-700 text-5xl md:text-6xl" />
            <h2 className="text-xl font-bold md:text-2xl">Buy A Home</h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <Link to='/property'>
              <p className="flex justify-center items-center gap-1 text-gray-500 hover:text-violet-700 hover:text-lg hover:font-medium transition">
                Find a Home
                <FaLongArrowAltRight className="pt-1" />
              </p>
            </Link>
          </div>
        </div>

        {/* Rent A Home */}
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col gap-6 items-center text-center">
            <FiKey className="text-violet-700 text-5xl md:text-6xl" />
            <h2 className="text-xl font-bold md:text-2xl">Rent A Home</h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <Link to='/property'>
              <p className="flex justify-center items-center gap-1 text-gray-500 hover:text-violet-700 hover:text-lg hover:font-medium transition">
                Find a Home
                <FaLongArrowAltRight className="pt-1" />
              </p>
            </Link>
          </div>
        </div>

        {/* Sell A Home */}
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col gap-6 items-center text-center">
            <FaHandshake className="text-violet-700 text-5xl md:text-6xl" />
            <h2 className="text-xl font-bold md:text-2xl">Sell A Home</h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <Link to='/property'>
              <p className="flex justify-center items-center gap-1 text-gray-500 hover:text-violet-700 hover:text-lg hover:font-medium transition">
                Find a Home
                <FaLongArrowAltRight className="pt-1" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
=======
import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="flex flex-col p-6 md:px-12 lg:px-20 bg-gray-200">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-Poppins font-bold text-3xl md:text-4xl">
          Our Main{" "}
          <span className="text-white rounded-2xl px-3 bg-violet-600">
            Focus
          </span>
        </h1>
        <p className="text-base md:text-lg">
          Dedicated to Connecting You with Your Dream Home Through Trust,
          <br className="hidden sm:block" />
          Quality Service, and Expert Guidance Every Step of the Way
        </p>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Buy A Home */}
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col gap-6 items-center text-center">
            <HiOutlineHome className="text-violet-700 text-5xl md:text-6xl" />
            <h2 className="text-xl font-bold md:text-2xl">Buy A Home</h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-500 hover:text-violet-700 hover:text-lg hover:font-medium transition">
              Find a Home
              <FaLongArrowAltRight className="pt-1" />
            </p>
          </div>
        </div>

        {/* Rent A Home */}
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col gap-6 items-center text-center">
            <FiKey className="text-violet-700 text-5xl md:text-6xl" />
            <h2 className="text-xl font-bold md:text-2xl">Rent A Home</h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-500 hover:text-violet-700 hover:text-lg hover:font-medium transition">
              Find a Home
              <FaLongArrowAltRight className="pt-1" />
            </p>
          </div>
        </div>

        {/* Sell A Home */}
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col gap-6 items-center text-center">
            <FaHandshake className="text-violet-700 text-5xl md:text-6xl" />
            <h2 className="text-xl font-bold md:text-2xl">Sell A Home</h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-500 hover:text-violet-700 hover:text-lg hover:font-medium transition">
              Find a Home
              <FaLongArrowAltRight className="pt-1" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
