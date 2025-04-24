<<<<<<< HEAD
import blog1 from "../../assets/blog/blog-1.png";
import blog2 from "../../assets/blog/blog-2.png";
import blog3 from "../../assets/blog/blog-3.png";

const Blog = () => {
  return (
    <div id="blog">
      <div className="flex flex-col gap-10 mx-auto px-6 md:px-16 lg:px-20 py-10 md:py-16">
        {/* Heading Section */}
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Latest Insights of{" "}
            <span className="text-white bg-violet-600 rounded-2xl px-3">
              Market
            </span>
          </h1>
          <p className="text-base md:text-lg font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            accusamus.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left (Featured Blog) */}
          <div className="h-full flex flex-col p-4 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
            <img
              src={blog1}
              alt="Blog 1"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col gap-3 mt-4 h-full">
              <p className="text-orange-500 text-sm md:text-lg text-left font-medium">
                7 March 2025
              </p>
              <div className="flex justify-end">
                <p className="bg-purple-300 rounded-xl px-2 text-sm">
                  Interior Design
                </p>
              </div>
              <p className="text-lg font-medium text-left">Interior Design Trends</p>
              <p className="text-sm text-left text-gray-700 flex-1">
                If you were to turn your space into your ultimate comfort zone,
                how would you do it? Wouldn&apos;t you prefer to decorate your room
                in a way that reflects your personal style and vision? As we
                step into 2025, emerging trends blend with modern spaces,
                embracing sleek, minimalistic, and stylish decor.
              </p>
              <div className="flex justify-end mt-auto">
                <a
                  className="hover:text-violet-700 hover:font-medium hover:underline text-sm"
                  href="https://www.krahejarealty.com/blog/interior-design-trends-2025-an-ultimate-guide"
                >
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Right (Stacked Blogs) */}
          <div className="grid grid-rows-2 gap-6">
            {/* Blog 2 */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <img
                src={blog2}
                alt="Blog 2"
                className="w-full sm:w-1/2 h-full object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between sm:w-1/2">
                <div>
                  <p className="text-orange-500 text-sm font-medium text-left">
                    18 February 2025
                  </p>
                  <div className="flex justify-end">
                    <p className="bg-purple-300 rounded-xl px-2 text-sm">
                      Research
                    </p>
                  </div>
                  <p className="text-md font-medium mt-2 text-left">
                    Key to Expand Market Reach
                  </p>
                  <p className="text-sm text-gray-700 text-left">
                    Channel partners are crucial for real estate developers to
                    reach property seekers. They help in marketing and selling
                    properties.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    className="hover:text-violet-700 hover:font-medium hover:underline text-sm"
                    href="https://www.krahejarealty.com/blog/the-role-of-a-channel-partner-in-real-estate-key-to-expanding-market-reach"
                  >
                    Read More....
                  </a>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <img
                src={blog3}
                alt="Blog 3"
                className="w-full h-full sm:w-1/2 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between sm:w-1/2">
                <div>
                  <p className="text-orange-500 text-sm font-medium text-left">
                    5 March 2025
                  </p>
                  <div className="flex justify-end">
                    <p className="bg-purple-300 rounded-xl px-2 text-sm">
                      Research
                    </p>
                  </div>
                  <p className="text-md font-medium mt-2 text-left">
                    Commercial Property & Investment
                  </p>
                  <p className="text-sm text-gray-700 text-left">
                    Have you wondered where business owners set up shops or
                    offices? It’s commercial property—from IT parks to malls...
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    className="hover:text-violet-700 hover:font-medium hover:underline text-sm"
                    href="https://www.confident-group.com/blog/what-is-commercial-real-estate-and-how-to-invest-in-2025/"
                  >
                    Read More....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
=======
import blog1 from "../../assets/blog/blog-1.png";
import blog2 from "../../assets/blog/blog-2.png";
import blog3 from "../../assets/blog/blog-3.png";

const Blog = () => {
  return (
    <div id="blog">
      <div className="flex flex-col gap-10 mx-auto px-6 md:px-16 lg:px-20 py-10 md:py-16">
        {/* Heading Section */}
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Latest Insights of{" "}
            <span className="text-white bg-violet-600 rounded-2xl px-3">
              Market
            </span>
          </h1>
          <p className="text-base md:text-lg font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            accusamus.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left (Featured Blog) */}
          <div className="h-full flex flex-col p-4 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
            <img
              src={blog1}
              alt="Blog 1"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col gap-3 mt-4 h-full">
              <p className="text-orange-500 text-sm md:text-lg text-left font-medium">
                7 March 2025
              </p>
              <div className="flex justify-end">
                <p className="bg-purple-300 rounded-xl px-2 text-sm">
                  Interior Design
                </p>
              </div>
              <p className="text-lg font-medium text-left">Interior Design Trends</p>
              <p className="text-sm text-left text-gray-700 flex-1">
                If you were to turn your space into your ultimate comfort zone,
                how would you do it? Wouldn&apos;t you prefer to decorate your room
                in a way that reflects your personal style and vision? As we
                step into 2025, emerging trends blend with modern spaces,
                embracing sleek, minimalistic, and stylish decor.
              </p>
              <div className="flex justify-end mt-auto">
                <a
                  className="hover:text-violet-700 hover:font-medium hover:underline text-sm"
                  href="https://www.krahejarealty.com/blog/interior-design-trends-2025-an-ultimate-guide"
                >
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Right (Stacked Blogs) */}
          <div className="grid grid-rows-2 gap-6">
            {/* Blog 2 */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <img
                src={blog2}
                alt="Blog 2"
                className="w-full sm:w-1/2 h-full object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between sm:w-1/2">
                <div>
                  <p className="text-orange-500 text-sm font-medium text-left">
                    18 February 2025
                  </p>
                  <div className="flex justify-end">
                    <p className="bg-purple-300 rounded-xl px-2 text-sm">
                      Research
                    </p>
                  </div>
                  <p className="text-md font-medium mt-2 text-left">
                    Key to Expand Market Reach
                  </p>
                  <p className="text-sm text-gray-700 text-left">
                    Channel partners are crucial for real estate developers to
                    reach property seekers. They help in marketing and selling
                    properties.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    className="hover:text-violet-700 hover:font-medium hover:underline text-sm"
                    href="https://www.krahejarealty.com/blog/the-role-of-a-channel-partner-in-real-estate-key-to-expanding-market-reach"
                  >
                    Read More....
                  </a>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <img
                src={blog3}
                alt="Blog 3"
                className="w-full h-full sm:w-1/2 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between sm:w-1/2">
                <div>
                  <p className="text-orange-500 text-sm font-medium text-left">
                    5 March 2025
                  </p>
                  <div className="flex justify-end">
                    <p className="bg-purple-300 rounded-xl px-2 text-sm">
                      Research
                    </p>
                  </div>
                  <p className="text-md font-medium mt-2 text-left">
                    Commercial Property & Investment
                  </p>
                  <p className="text-sm text-gray-700 text-left">
                    Have you wondered where business owners set up shops or
                    offices? It’s commercial property—from IT parks to malls...
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    className="hover:text-violet-700 hover:font-medium hover:underline text-sm"
                    href="https://www.confident-group.com/blog/what-is-commercial-real-estate-and-how-to-invest-in-2025/"
                  >
                    Read More....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
