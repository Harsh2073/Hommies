import { BiBed, BiBath, BiArea, BiMap, BiHome, BiTimeFive } from 'react-icons/bi';
import PropTypes from 'prop-types';

const House = ({ properties }) => {
  const {
    title,
    description,
    price,
    property_type,
    bedrooms,
    bathrooms,
    area,
    address,
    city,
    state,
    zipCode,
    images,
    status,
    features,
    listed_date,
    country,
  } = properties;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-[360px] mx-auto">
      <img
        className="h-52 w-full object-cover"
        src={images?.[0]?.url || 'https://via.placeholder.com/360x208'}
        alt={title}
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div className="mb-3 flex justify-between text-sm">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">
            {property_type}
          </span>
          <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full font-medium">
            {country}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>

        <div className="mt-2 text-gray-600 text-sm">
          <div className="flex items-center text-left gap-2 mb-1">
            <BiMap className="text-violet-500" />
            <span>{`${address}, ${city}, ${state} ${zipCode}`}</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <BiHome className="text-violet-500" />
            <span>Status: <span className="capitalize">{status}</span></span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <BiTimeFive className="text-violet-500" />
            <span>Listed on: {new Date(listed_date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <BiBed className="text-xl text-violet-500" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiBath className="text-xl text-violet-500" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiArea className="text-xl text-violet-500" />
            <span>{area} sqft</span>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((feat, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-full"
              >
                {feat}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 text-violet-700 text-lg font-semibold">
          ₹ {price.toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  );
};

House.propTypes = {
  properties: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    property_type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    area: PropTypes.number,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string,
    zipCode: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
    status: PropTypes.oneOf(['available', 'sold', 'rented']),
    features: PropTypes.arrayOf(PropTypes.string),
    listed_date: PropTypes.string,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default House;
