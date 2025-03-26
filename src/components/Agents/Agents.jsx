import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { agentsData } from "../../data";  // Import the data directly

const Agents = () => {
  const [searchagent, setSearchAgent] = useState("");

  // Filter agents based on search input
  const filteragents = agentsData.filter((agent) =>
    agent.name.toLowerCase().includes(searchagent.toLowerCase())
  );

  return (
    <div>
        <h1 className="p-2 text-3xl text-center">Agent List</h1>
        <div className="flex justify-end">
        <input
        className="border border-black p-2 rounded-4xl"
          type="text"
          placeholder="Search agents"
          value={searchagent}
          onChange={(e) => setSearchAgent(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
  {filteragents.map((agent, index) => (
    <div
      key={`${agent.id}-${agent.name}-${index}`}
      className="bg-white shadow-lg p-6 rounded-2xl w-full max-w-[350px] mx-auto cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
    >
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
        src={agent.image}
        alt={agent.name}
      />
      <div className="text-left mb-4">
        <h2 className="text-xl font-bold text-gray-800">{agent.name}</h2>
        <hr className="my-2 border-gray-300" />
        <p className="text-gray-600">Role:{agent.role}</p>
        <p className="text-gray-500">Experience:{agent.experience}</p>
      </div>
      <div className="text-left mb-4">
        <p className="text-gray-600">Email: {agent.email}</p>
        <p className="text-gray-600">Phone: {agent.phone}</p>
      </div>
      <div className="flex gap-4 text-gray-500 text-xl">
        <a href="#" className="hover:text-blue-600">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-blue-800">
          <FaFacebook />
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Agents;

