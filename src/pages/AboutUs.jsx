import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-violet-700 mb-4">Who We Are</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Building dreams, one home at a time. Discover a world of trusted property solutions, powered by innovation and driven by people.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            alt="Company Vision"
                            className="rounded-3xl shadow-2xl w-full object-cover"
                        />
                        <div className="absolute -bottom-6 left-6 bg-white shadow-xl px-6 py-3 rounded-2xl border">
                            <p className="text-violet-700 font-semibold">20,000+ Happy Clients</p>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-2">
                        <p className="text-gray-700 leading-relaxed">
                            At <strong>My World</strong>, our mission is to revolutionize the real estate experience by combining modern technology with dedicated human expertise. Whether you're buying, selling, renting, or listing — we're here to guide every step of the journey with transparency and care.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With a robust network of verified agents and a rapidly growing community of happy clients, we bring trust and simplicity to the often-complex real estate market.
                        </p>

                        {/* Why Choose Us
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Why Choose Us?</h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li className="text-base leading-snug ml-1">Expert and verified property agents</li>
                                <li className="text-base leading-snug ml-1">Wide coverage of Rent, Buy, and PG listings</li>
                                <li className="text-base leading-snug ml-1">Modern, secure, and user-friendly platform</li>
                                <li className="text-base leading-snug ml-1">Real-time support and personalized consultation</li>
                            </ul>
                        </div> */}

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="bg-white p-4 rounded-xl shadow text-center">
                                <p className="text-3xl font-bold text-violet-700">100+</p>
                                <p className="text-sm text-gray-500">Verified Agents</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow text-center">
                                <p className="text-3xl font-bold text-violet-700">3000+</p>
                                <p className="text-sm text-gray-500">Property Listings</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-6 text-center">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h4>
                            <div className="flex items-center justify-center gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-violet-100 hover:bg-violet-200 text-violet-700 p-3 rounded-full shadow-md transition transform hover:scale-110">
                                    <FaFacebookF />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-violet-100 hover:bg-violet-200 text-violet-700 p-3 rounded-full shadow-md transition transform hover:scale-110">
                                    <FaInstagram />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-violet-100 hover:bg-violet-200 text-violet-700 p-3 rounded-full shadow-md transition transform hover:scale-110">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-violet-100 hover:bg-violet-200 text-violet-700 p-3 rounded-full shadow-md transition transform hover:scale-110">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
