import TestimonialItems from "../Testimonyitems/Testimonyitems";

import Client1 from "../../assets/client/Client1.jpg";
import Client2 from "../../assets/client/Client2.jpg";
import Client3 from "../../assets/client/Client3.jpg";
import Client4 from "../../assets/client/Client4.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "I love how easy it is to browse listings, but I wish there were more filter options! Searching by price, amenities, and location would make it even better.",
    name: "Riya Singh",
    role:"Client",
    image: Client1,
  },
  {
    id: "p2",
    text: "I’m constantly switching between the app and Google Maps to check locations. If I could see all properties on a map, it would save me so much time!",
    name: "Swet Patel",
    role:"Property Consultant",
    image: Client2,
  },
  {
    id: "p3",
    text: "I found a property I loved, but when I returned, I had to search all over again! A favorites section would be a lifesaver.",
    name: "Ishita Bera",
    role:"Builder",
    image: Client3,
  },
  {
    id: "p4",
    text: "High-quality images are great, but they slow everything down. Maybe optimizing them would improve loading times?",
    name: "Gopesh",
    role:"Client",
    image: Client4,
  },
  {
    id: "p5",
    text: "High-quality images are great, but they slow everything down. Maybe optimizing them would improve loading times?",
    name: "Nikhil Patel",
    role:"Client",
    image: Client4,
  },
  {
    id: "p6",
    text: "High-quality images are great, but they slow everything down. Maybe optimizing them would improve loading times?",
    name: "Kalp Patel",
    role:"Client",
    image: Client4,
  },
  {
    id: "p7",
    text: "High-quality images are great, but they slow everything down. Maybe optimizing them would improve loading times?",
    name: "Raj Sharma",
    role:"Client",
    image: Client4,
  },
];

const Testimony = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <section id="testimony" className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-center px-auto">
        <div>
          <h1 className="font-Poppins font-bold text-4xl text-center mb-3">
            What Our Client <span className="text-white bg-violet-600 border rounded-4xl px-3">Say</span>
          </h1>
          <p className="text-center text-lg">
            From Consultation to Keys—Client Satisfaction Speaks
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row my-6">
        {mappedList}
      </div>
    </section>
  );
};

export default Testimony;
