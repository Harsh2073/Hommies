import{ useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "/src/assets/login.png"


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
  
    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", email); // Store the email of the logged-in user
      navigate("/"); 
      window.location.reload(); 
    } else {
      alert("Invalid email or password!");
    }
  };
  

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${login})`,
          opacity: "0.4", // Adjust this value to reduce background opacity
        }}
      ></div>
      <div className="flex mx-10 my-20 bg-white bg-opacity-90 backdrop-blur-md rounded-xl">
        <div className="flex-1">
          <img className="rounded-l-xl h-full" src={login}/>
        </div>
        <div className="w-[40%] py-10 px-10 text-left flex flex-col gap-5">
          <h2 className="text-4xl text-left font-bold">Login to <span className="text-violet-700">Hommies</span></h2>
          <p className="text-gray-400 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsa?</p>
          <div className="flex flex-col gap-10 px-3">
            <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center text-xl underline underline-offset-7 decoration-2 decoration-violet-700">Login</div>
              <input
              type="email"
              placeholder="Enter Email"
              value={email}
              className=" border-[#899499] border-2 rounded-sm w-full px-3 py-2 bg-[#E5E4E2]"
              onChange={(e) => setEmail(e.target.value)}
              />

              <input
              type="password"
              placeholder="Enter Password"
              value={password}
              className="border-[#899499] border-2 rounded-sm w-full px-3 py-2 bg-[#E5E4E2]"
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin} className="text-center w-[40%] rounded-sm bg-violet-700 text-white p-3 cursor-pointer">Login</button>
            <p className="text-center">
              Don&apos;t have an account? <a href="/SignUp" className="text-violet-700">Register Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
