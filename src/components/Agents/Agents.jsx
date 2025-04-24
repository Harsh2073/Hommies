<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { agentsData } from "../../data";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [searchAgent, setSearchAgent] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [newAgent, setNewAgent] = useState({
    name: "",
    role: "",
    experience: "",
    email: "",
    phone: "",
    image: null,
    preview: "",
    addedByUser: false,
  });

  useEffect(() => {
    const storedAgents = JSON.parse(localStorage.getItem("agents"));
    if (storedAgents && storedAgents.length > 0) {
      setAgents(storedAgents);
    } else {
      setAgents(agentsData);
      localStorage.setItem("agents", JSON.stringify(agentsData));
    }
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (loggedIn === "true" && loggedInUser) {  // Check both values
      setIsLoggedIn(true);
    }
  }, []);
  

  const handleChange = (e) => {
    setNewAgent({ ...newAgent, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewAgent({ ...newAgent, image: reader.result, preview: reader.result });
      };
    }
  };

  const addNewAgent = (e) => {
    e.preventDefault();
  
    const loggedInUser = localStorage.getItem("loggedInUser"); 
  
    if (!loggedInUser) {
      alert("You must be logged in to add an agent!"); 
      return;
    }
  
    if (!newAgent.name || !newAgent.role || !newAgent.experience || !newAgent.email || !newAgent.phone || !newAgent.image) {
      alert("Please fill all fields before adding!");
      return;
    }
  
    const newAgentData = {
      id: Date.now(),
      name: newAgent.name,
      role: newAgent.role,
      experience: newAgent.experience,
      email: newAgent.email,
      phone: newAgent.phone,
      image: newAgent.image,
      addedBy: loggedInUser, // Store the logged-in user's email
    };
  
    const updatedAgents = [...agents, newAgentData];
    setAgents(updatedAgents);
    localStorage.setItem("agents", JSON.stringify(updatedAgents));
  
    setNewAgent({ name: "", role: "", experience: "", email: "", phone: "", image: null, preview: "" });
    setShowForm(false);
  };
  
  

  const deleteAgent = (id) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("You must be logged in to delete an agent!");
      return;
    }
  
    const agentToDelete = agents.find((agent) => agent.id === id);
    if (agentToDelete.addedBy !== loggedInUser) {
      alert("You can only delete agents that you added!");
      return;
    }
  
    const updatedAgents = agents.filter((agent) => agent.id !== id);
    setAgents(updatedAgents);
    localStorage.setItem("agents", JSON.stringify(updatedAgents));
  };
  

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchAgent.toLowerCase()) ||
    agent.role.toLowerCase().includes(searchAgent.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Agent List</h1>
      
      <div className="flex items-center justify-end gap-10 mb-4">
        <input
          className="border border-black p-2 rounded-md"
          type="text"
          placeholder="Search agents"
          value={searchAgent}
          onChange={(e) => setSearchAgent(e.target.value)}
        />
        {isLoggedIn && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-violet-700 text-white py-2 px-6 rounded-md hover:bg-violet-800 transition"
          >
            + Add Agent
          </button>
        )}
      </div>

      {isLoggedIn && showForm && (
        <form onSubmit={addNewAgent} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4">Add New Agent</h2>
          <input type="text" name="name" value={newAgent.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 mb-3 border border-gray-300 rounded" />
          <input type="text" name="role" value={newAgent.role} onChange={handleChange} placeholder="Role" className="w-full p-2 mb-3 border border-gray-300 rounded" />
          <input type="text" name="experience" value={newAgent.experience} onChange={handleChange} placeholder="Experience (e.g. 5 years)" className="w-full p-2 mb-3 border border-gray-300 rounded" />
          <input type="email" name="email" value={newAgent.email} onChange={handleChange} placeholder="Email" className="w-full p-2 mb-3 border border-gray-300 rounded" />
          <input type="text" name="phone" value={newAgent.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 mb-3 border border-gray-300 rounded" />
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 mb-3 border border-gray-300 rounded" />
          {newAgent.preview && <img src={newAgent.preview} alt="Preview" className="w-full h-40 object-cover mb-3 rounded" />}
          <div className="flex gap-4">
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Save Agent</button>
            <button type="button" onClick={() => setShowForm(false)} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Cancel</button>
          </div>
        </form>
      )}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredAgents.map((agent) => (
    <div key={agent.id} className="bg-white shadow-lg p-6 rounded-2xl w-full max-w-[350px] mx-auto hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
      <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover" src={agent.image} alt={agent.name} />
      <h2 className="text-xl font-bold text-gray-800 text-center">{agent.name}</h2>
      <div className="text-left mb-4">
        <hr className="my-2 border-gray-300" />
        <p className="text-gray-600">Role: {agent.role}</p>
        <p className="text-gray-600">Experience: {agent.experience}</p>
      </div>
      <div className="text-left mb-4">
        <p className="text-gray-600">Email: {agent.email}</p>
        <p className="text-gray-600">Phone: {agent.phone}</p>
      </div>
      <div className="flex gap-4 text-gray-500 text-xl">
        <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-800"><FaFacebook /></a>
      </div>

      {/* Show delete button only if the logged-in user added this agent */}
      {agent.addedBy === localStorage.getItem("loggedInUser") && (
        <button onClick={() => deleteAgent(agent.id)} className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700 transition mt-4">
          Delete
        </button>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default Agents;
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
