import { useEffect } from 'react';
import PropTypes from 'prop-types';
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
    return houses.filter((house) => {
      // Search filter (by house name, location, etc.)
      const matchesSearchQuery =
        house.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        house.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by selected filters
      const matchesFilters =
        (filters.country ? house.country === filters.country : true) &&
        (filters.priceRange
          ? (filters.priceRange === '0-100000' && house.price <= 100000) ||
            (filters.priceRange === '100000-500000' &&
              house.price >= 100000 &&
              house.price <= 500000) ||
            (filters.priceRange === '500000-1000000' &&
              house.price >= 500000 &&
              house.price <= 1000000) ||
            (filters.priceRange === '1000000+' && house.price > 1000000)
          : true) &&
        (filters.propertyType ? house.propertyType === filters.propertyType : true) &&
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
              <div className="hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <House properties={property} />
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
