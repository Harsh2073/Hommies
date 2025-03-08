import PropTypes from "prop-types";

const Agents = ({ agent }) => {
  console.log("Agent received in Agents.js:", agent);

  if (!agent) {
    return <p></p>;
  }
  
  const { name, role, experience, email, phone, image } = agent;

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} />
      <div className="mb-4 font-semibold text-lg text-left border-b-2">
        {name}
      </div>
      <div className="flex flex-col gap-5 border-b-2">
        <div className="text-lg text-left flex flex-col gap-1 ">
          <p>{role}</p>
          <p>{experience}</p>
        </div>
        <div className="text-lg text-left flex flex-col gap-1">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className="text-lg text-left flex gap-1">
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
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
