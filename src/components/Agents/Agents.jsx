import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Agents = ({ onGetAgents }) => {
  const [searchAgent, setSearchAgent] = useState("");
  const agents = useSelector((state) => state.auth.agents); // ensure correct slice
  useEffect(() => {
    onGetAgents();
  }, [onGetAgents]);

  const filteredAgents = agents?.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchAgent.toLowerCase()) ||
      agent.roles.join(',').toLowerCase().includes(searchAgent.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-violet-700">Meet Our Amazing Agents</h1>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search agents by name or role..."
          value={searchAgent}
          onChange={(e) => setSearchAgent(e.target.value)}
          className="w-full max-w-lg px-5 py-3 border-2 border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded-lg shadow-md transition"
        />
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAgents?.map((agent) => (
          <div
            key={agent._id}
            className="bg-white rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition duration-300 p-6"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={agent.profile_image?.url || "/default-avatar.png"}
                alt={agent.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-violet-300 shadow"
              />
              <h2 className="text-2xl font-semibold mt-4 text-gray-800">{agent.name}</h2>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FaUserTie /> {agent.roles.join(", ")}
              </p>
              <p className="mt-2 text-sm text-gray-500 italic">Joined on {new Date(agent.joined).toLocaleDateString()}</p>
            </div>

            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <p className="flex items-center gap-2"><FaEnvelope className="text-violet-500" /> {agent.email}</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-violet-500" /> {agent.phone}</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-violet-500" /> {agent.location}</p>
              
            </div>

            {agent.agent_details && (
              <div className="mt-4 text-sm text-left text-gray-600 border-t pt-4 space-y-1">
                <p><strong>Experience:</strong> {agent.agent_details.experience} years</p>
                <p><strong>Specialty:</strong> {agent.agent_details.specialty}</p>
              </div>
            )}

            <div className="flex justify-center gap-5 mt-6 text-xl text-gray-400">
              {agent.socials?.instagram && (
                <a href={agent.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
              )}
              {agent.socials?.facebook && (
                <a href={agent.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <FaFacebook />
                </a>
              )}
              {agent.socials?.twitter && (
                <a href={agent.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredAgents?.length === 0 && (
        <div className="flex flex-col items-center mt-20 animate-pulse">
          <div className="text-6xl mb-3">🕵️‍♀️</div>
          <p className="text-red-500 text-xl font-semibold text-center">
            No agents found. Try another search!
          </p>
        </div>
      )}
    </div>
  );
};

Agents.propTypes = {
  onGetAgents: PropTypes.func.isRequired,
};

export default Agents;
