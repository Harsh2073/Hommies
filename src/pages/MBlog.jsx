import { useState, useEffect } from "react";
import axios from "axios";

const MBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const newsAPIKey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=real estate OR property&language=en&pageSize=50&sortBy=publishedAt&apiKey=${newsAPIKey}`
        );

        if (response.data.status === "ok") {
          setBlogs(response.data.articles);
        } else {
          console.error("Error fetching news articles");
        }
      } catch (error) {
        console.error("Error fetching news articles", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [newsAPIKey]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>No real estate news found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div id="blog" className="bg-gray-50 py-16 px-6 md:px-16 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our{" "}
          <span className="text-white bg-violet-600 px-3 py-1 rounded-2xl">
            Market Blogs
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Discover the latest insights, trends, and guides from industry experts in real estate.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.urlToImage || "/fallback-image.jpg"}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <p className="text-orange-500 text-xs font-medium">
              {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full self-start mb-2">
              {blog.source.name}
            </span>
            <h2 className="text-md font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{blog.description}</p>
            <button
              onClick={() => setSelectedBlog(blog)}
              className="text-violet-600 text-sm font-medium hover:underline self-end"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">

            {/* Close Icon */}
            <button
              className="absolute top-3 right-4 text-2xl text-white bg-black rounded-full px-3 py-1 
             hover:text-black hover:bg-gray-200 transition-all duration-300 ease-in-out 
             shadow-md hover:scale-110 animate-fadeIn"
              onClick={() => setSelectedBlog(null)}
            >
              &times;
            </button>


            {/* Blog Content */}
            <img
              src={selectedBlog.urlToImage || "/fallback-image.jpg"}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-2">
              {new Date(selectedBlog.publishedAt).toLocaleDateString()} |{" "}
              <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                {selectedBlog.source.name}
              </span>
            </p>
            <h2 className="text-xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-gray-700 mb-4">{selectedBlog.content || selectedBlog.description}</p>
            <a
              href={selectedBlog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              View Full Article on Source →
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default MBlog;
