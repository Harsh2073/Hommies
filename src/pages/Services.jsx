import { FaHome, FaBuilding, FaUserTie, FaTools, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="text-4xl text-violet-700" />,
    title: "Buy & Sell Properties",
    description: "Browse through thousands of verified residential and commercial properties for secure transactions.",
  },
  {
    icon: <FaBuilding className="text-4xl text-violet-700" />,
    title: "PG & Rental Spaces",
    description: "Explore affordable and hygienic PGs, hostels, and rental homes curated for comfort and accessibility.",
  },
  {
    icon: <FaUserTie className="text-4xl text-violet-700" />,
    title: "Verified Agents",
    description: "Our network of certified agents help you with honest advice, market insights, and smooth documentation.",
  },
  {
    icon: <FaTools className="text-4xl text-violet-700" />,
    title: "Property Maintenance",
    description: "From repairs to renovations — we connect you to trusted maintenance professionals in your area.",
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl text-violet-700" />,
    title: "Virtual Tours & Site Visits",
    description: "Experience properties virtually with 3D walkthroughs or schedule guided visits with our team.",
  },
  {
    icon: <FaHeadset className="text-4xl text-violet-700" />,
    title: "24/7 Customer Support",
    description: "Get real-time assistance anytime — whether it's a query, concern, or consultation.",
  },
];

const Service = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-bold text-violet-700 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We deliver a complete real estate experience — tailored to your needs, backed by technology, and guided by people.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center transform hover:scale-105 transition duration-300"
          >
            <div className="mb-5 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
