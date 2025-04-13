import { FaHome } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      {/* Animated icon */}
      <div className="animate-spin text-violet-600 text-6xl mb-4">
        <FaHome />
      </div>

      {/* Bouncy emoji */}
      <div className="text-5xl animate-bounce mb-3">🏗️🔄</div>

      {/* Loading text */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Loading your dream property...
      </h1>
      <p className="text-gray-600 mb-8 text-lg max-w-md">
        Hang tight! The agents are fluffing the pillows and fixing the Wi-Fi 🚪📶
      </p>

      {/* Progress bar container */}
      <div className="w-full max-w-md h-2 bg-violet-200 rounded-full overflow-hidden">
        {/* Animated bar */}
        <div className="h-full bg-violet-600 animate-fill rounded-full" />
      </div>
    </div>
  );
};

export default Loading;
