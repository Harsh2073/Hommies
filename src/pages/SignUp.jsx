import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../assets/login.png";

const SignUp = ({ onRegister }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    roles: "user",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.password || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("phone", form.phone);
    formData.append("roles", form.roles);
    if (image) {
      formData.append("profile_image", image);
    }

    try {
      await onRegister(formData).unwrap();
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
      const errorMsg =
        err?.data?.message || "Registration failed. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gray-100">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ backgroundImage: `url(${login})` }}
      />

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row z-10 overflow-hidden w-full max-w-5xl">
        {/* Left Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={login}
            alt="Sign Up Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Join <span className="text-violet-600">Hommies</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Image Upload */}
            <div className="flex justify-center">
              <label htmlFor="image" className="cursor-pointer relative group">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-violet-400 flex items-center justify-center overflow-hidden hover:border-violet-600 transition">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-500 px-2 text-center">
                      Upload Image
                    </span>
                  )}
                </div>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Form Fields */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <select
              name="roles"
              value={form.roles}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-violet-600 text-white py-2 rounded-xl font-semibold transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-700"
              }`}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          {/* Navigation Link */}
          <p
            className="mt-4 text-sm text-center text-gray-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account?{" "}
            <span className="text-violet-600 hover:underline">
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default SignUp;
