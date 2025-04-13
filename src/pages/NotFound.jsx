import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <div className="text-8xl mb-4 animate-bounce">🧭❌</div>
      <h1 className="text-5xl font-bold text-violet-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">
        Uh-oh! Looks like you took a wrong turn...
      </p>
      <p className="text-lg text-gray-500 mb-8">
        The page you're looking for packed its bags and moved out 🏠💼
      </p>
      <Link
        to="/"
        className="bg-violet-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-violet-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
