import PropTypes from "prop-types";
import { useContext } from "react";
import { AgentContext } from "../AgentContext/AgentContext";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Agents = () => {
  const {agents}=useContext(AgentContext);
  console.log("Agent received in Agents.js:", agents);

  if (!agents || agents.length === 0) {
    return <p>No agents found</p>;
  }
  
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 py-5">
        {agents.map((agent,index)=>(
          <div key={index}>
            <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
              <img className="mb-8" src={agent.image} />
              <div className="mb-4 font-semibold text-lg text-left border-b-2">
                {agent.name}
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-lg text-left flex flex-col gap-1 ">
                  <p>{agent.role}</p>
                  <p>{agent.experience}</p>
                </div>
                <div className="text-lg text-left flex flex-col gap-1">
                  <p>{agent.email}</p>
                  <p>{agent.phone}</p>
                </div>
                <div className="text-lg text-left flex gap-1 cursor-pointer">
                  <a href="#"><FaInstagram /></a>
                  <a href='#'><FaFacebook /></a>
                </div>
              </div>
            </div>
          </div>  
        ))}
      </div>
    </div>
  );
};
Agents.propTypes = {
  agent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Agents;
