import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loginImage from "../assets/login.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await onLogin({ email, password });
      console.log("Login Response:", response);

      if (response?.payload?.user) {
        toast.success("Login successful!");
        navigate("/");
      } else {
        const message =
          response?.payload?.message || "Login failed! Please try again.";
        toast.error(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gray-100">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 blur-sm"
        style={{ backgroundImage: `url(${loginImage})` }}
      />

      {/* Login card */}
      <div className="relative z-10 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
        {/* Left-side image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={loginImage}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Back to{" "}
            <span className="text-violet-700">Hommies</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Please login to continue managing your properties.
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-700"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-700"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-violet-700 text-white py-2 rounded-md transition duration-300 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-violet-800"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p
            className="text-center text-sm cursor-pointer text-gray-500 mt-6"
            onClick={() => navigate("/signup")}
          >
            Don&apos;t have an account?{" "}
            <span className="text-violet-700 hover:underline">
              Register Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
