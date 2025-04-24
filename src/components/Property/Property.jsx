<<<<<<< HEAD
import { useState } from 'react';
import HouseList from '../HouseList/HouseList';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Property = ({ onFetchAll }) => {
  // Access properties from Redux store
  const properties = useSelector((state) => state.property.properties);

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for managing the filter visibility and values
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    country: '',
    priceRange: '',
    propertyType: '',
    status: '', // Sale or Rent
  });

  // Extract unique filter values from properties data
  const uniqueCountries = Array.from(new Set(properties.map((property) => property.country)));
  const uniquePriceRanges = Array.from(new Set(properties.map((property) => property.price)));
  const uniquePropertyTypes = Array.from(new Set(properties.map((property) => property.property_type)));
  const uniqueStatuses = Array.from(new Set(properties.map((property) => property.propertyStatus)));

  // Handle changes for each filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toggle filters visibility
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
            Find Your <span className="text-violet-600">Perfect Property</span>
          </h2>
          <p className="text-lg text-gray-600">
            Search, filter, and explore a wide range of properties to rent or buy.
          </p>
        </div>

        {/* Search Box */}
        <div className="flex items-center justify-between space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by property name or location"
            className="w-full lg:max-w-[400px] p-4 text-sm border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out"
          />
          <button
            onClick={toggleFilters}
            className="px-6 py-3 text-sm font-medium text-white bg-violet-600 rounded-lg shadow-md hover:bg-violet-700 focus:outline-none transition duration-200"
          >
            {filtersVisible ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filters - Hidden by default, toggle visibility on button click */}
        {filtersVisible && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-2xl p-6 shadow-lg mt-6">
            {/* Country Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="mt-2 block w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500"
              >
                <option value="">All Countries</option>
                {uniqueCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="mt-2 block w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500"
              >
                <option value="">All Prices</option>
                {uniquePriceRanges.map((priceRange) => (
                  <option key={priceRange} value={priceRange}>
                    {priceRange}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="mt-2 block w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500"
              >
                <option value="">All Types</option>
                {uniquePropertyTypes.map((propertyType) => (
                  <option key={propertyType} value={propertyType}>
                    {propertyType}
                  </option>
                ))}
              </select>
            </div>

            {/* Sale or Rent Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="mt-2 block w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500"
              >
                <option value="">All Status</option>
                {uniqueStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Property List */}
        <div>
          <HouseList
            filters={filters}
            searchQuery={searchQuery}
            onFetchAll={onFetchAll}
          />
        </div>
      </div>
    </div>
  );
};

// Removed properties from prop types, since it's being accessed from Redux
Property.propTypes = {
  onFetchAll: PropTypes.func.isRequired,
};

export default Property;
=======
import Search from '../Search/Search'
import HouseList from '../HouseList/HouseList'

const Property = () => {
  return (
    <div className='h-full my-12'>
        <Search/>
        <HouseList/>
    </div>
  )
}

export default Property
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
