
import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const Services = () => {

  return (
    <section id="services" className="mx-auto flex flex-col px-10 md:px-16 lg:px-20">
        <div className="px-auto lg:px-32">
            <h1 className="font-Poppins font-bold text-4xl text-center mb-4">
                Our Main <span className="text-violet-700">Focus</span>
            </h1>
            <p className="text-center text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                facilis libero, esse recusandae nam veniam aut accusamus.
            </p>
        </div>
        <div className="px-10 pt-20 py-20 grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-3 py-16 px-4 rounded-2xl shadow-xl">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="text-violet-700 text-6xl"><HiOutlineHome/></div>
                    <div className="text-2xl font-medium">Buy A Home</div>
                </div>
                <div>
                    <h3 className="text-base">Lorem ipsum dolor sit,amet consectetur <br/> adipisicing elit.</h3>
                </div>
            </div>
            <div className="flex flex-col gap-3 py-16 px-4 rounded-2xl shadow-xl">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="text-violet-700 text-6xl"><FiKey/></div>
                    <div className="text-2xl font-medium">Rent A Home</div>
                </div>
                <div>
                    <h3 className="text-base">Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit.</h3>
                </div>
            </div>
            <div className="flex flex-col gap-3 py-16 px-4 rounded-2xl shadow-xl">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="text-violet-700 text-6xl"><FaHandshake/></div>
                    <div className="text-2xl font-medium">Sell A Home</div>
                </div>
                <div>
                    <h3 className="text-base">Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit.</h3>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
