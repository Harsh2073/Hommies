<<<<<<< HEAD
import { useEffect } from "react";
import PropTypes from "prop-types";
import House from "../House/House";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HouseList = ({ onFetchAll, filters, searchQuery }) => {
  const properties = useSelector((state) => state.property.properties);

  // Fetch properties when the component mounts
  useEffect(() => {
    onFetchAll();
  }, [onFetchAll]);

  // Filter properties based on filters and search query
  const filterAndSearchProperties = (houses) => {
    if (!houses || !Array.isArray(houses)) return [];

    return houses.filter((house) => {
      const name = house.name ?? "";
      const location = house.location ?? "";
      const search = (searchQuery ?? "").toLowerCase();

      const matchesSearchQuery =
        name.toLowerCase().includes(search) ||
        location.toLowerCase().includes(search);

      const matchesFilters =
        (filters.country ? house.country === filters.country : true) &&
        (filters.priceRange
          ? (filters.priceRange === "0-100000" && house.price <= 100000) ||
            (filters.priceRange === "100000-500000" &&
              house.price >= 100000 &&
              house.price <= 500000) ||
            (filters.priceRange === "500000-1000000" &&
              house.price >= 500000 &&
              house.price <= 1000000) ||
            (filters.priceRange === "1000000+" && house.price > 1000000)
          : true) &&
        (filters.propertyType
          ? house.propertyType === filters.propertyType
          : true) &&
        (filters.status ? house.status === filters.status : true);

      return matchesSearchQuery && matchesFilters;
    });
  };

  // Filter the properties list based on the filters and search query
  const filteredProperties = filterAndSearchProperties(properties);

  if (!filteredProperties || filteredProperties.length < 1) {
    return (
      <div className="text-center mt-32 text-gray-500 text-2xl md:text-3xl font-medium">
        😕 Sorry, no properties match your search or filters.
      </div>
    );
  }

  return (
    <section className="px-4 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProperties.map((property, index) => (
            <Link to={`/property/${property._id}`} key={index}>
              <div className="h-full flex justify-center">
                <div className="hover:scale-[1.02] transition-transform duration-300 ease-in-out w-full">
                  <House properties={property} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

HouseList.propTypes = {
  onFetchAll: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default HouseList;
=======
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
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
