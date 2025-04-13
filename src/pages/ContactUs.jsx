import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    console.log("Submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-violet-100 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-violet-800 mb-8">Let’s Connect</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between h-full">
          <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Contact Info</h2>
            <p className="text-gray-600">
              We’re here to answer any questions. Reach out to us and we’ll respond as soon as we can.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-violet-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-violet-700 text-lg" />
                </div>
                <span>123 Dream Street, Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-violet-100 p-3 rounded-full">
                  <FaPhone className="text-violet-700 text-lg" />
                </div>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-violet-100 p-3 rounded-full">
                  <FaEnvelope className="text-violet-700 text-lg" />
                </div>
                <span>support@myworld.com</span>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609818804!2d73.7228791664877!3d18.524616065035236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfab205a1f8d%3A0xc05f2cbf8af0b75a!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649682141671!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-64 border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
