import { useContext } from "react";
import { HouseContext } from "../HouseContext/HouseContext";
import House from "../House/House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-5xl mt-32" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-500 mt-48 font-semibold">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-20 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
          {houses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
