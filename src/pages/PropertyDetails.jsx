<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // ⬅️ Added useNavigate
import { useSelector } from "react-redux";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import { MdCurrencyRupee } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import PropTypes from "prop-types";

const PropertyDetails = ({ onFetch }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // ⬅️ useNavigate hook
  const [selectedImage, setSelectedImage] = useState("");
  const selectedProperty = useSelector((state) => state.property.selectedProperty);
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (onFetch && id) onFetch(id);
  }, [id, onFetch]);

  useEffect(() => {
    if (selectedProperty?.images?.length) {
      setSelectedImage(selectedProperty.images[0].url || selectedProperty.images[0]);
    }
  }, [selectedProperty]);

  if (!selectedProperty) {
    return (
      <div className="p-10 text-center text-red-500 text-xl font-semibold">
        Property not found.
      </div>
    );
  }

  const {
    title, address, city, state, country, zipCode,
    area, bedrooms, bathrooms, price, listed_date,
    listed_by, images = [], description,
    availableType, propertyStatus, property_type, features
  } = selectedProperty;

  return (
    <section className="bg-gradient-to-br from-violet-50 to-white p-6 md:p-12 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition mb-4"
        >
          ← Go Back
        </button>

        {/* Title & Location */}
        <div>
          <h1 className="text-4xl font-extrabold text-violet-800 mb-2">{title}</h1>
          <p className="text-gray-600 flex items-center gap-2 text-lg">
            <GiPositionMarker className="text-red-500" />
            {`${address}, ${city}, ${state}, ${country} - ${zipCode}`}
          </p>
        </div>
        {/* Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[450px]">
            {images.map((img, idx) => {
              const url = img.url || img;
              return (
                <img
                  key={idx}
                  src={url}
                  onClick={() => setSelectedImage(url)}
                  className={`w-20 h-20 object-cover rounded-md border-2 cursor-pointer ${selectedImage === url ? "border-violet-600" : "border-gray-200"
                    }`}
                  alt={`Thumbnail ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Main Image */}
          <div className="w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Property Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <span className="font-semibold mr-1">Availability:</span> {availableType}
            </span>
            <span className={`inline-flex items-center ${propertyStatus === "available"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-red-100 text-red-800"
              } px-3 py-1 rounded-full`}>
              <span className="font-semibold mr-1">Status:</span> {propertyStatus}
            </span>
            <span className="inline-flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              <span className="font-semibold mr-1">Type:</span> {property_type}
            </span>
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-violet-900">
            <div className="flex items-center gap-2 text-lg">
              <BiBed /> {bedrooms} Beds
            </div>
            <div className="flex items-center gap-2 text-lg">
              <BiBath /> {bathrooms} Baths
            </div>
            <div className="flex items-center gap-2 text-lg">
              <BiArea /> {area} sqft
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-green-700">
              <MdCurrencyRupee /> {price.toLocaleString()}
            </div>
          </div>
          <p className="text-sm text-gray-500">Listed on: {new Date(listed_date).toLocaleDateString()}</p>
        </div>

        {/* Agent Info (Authenticated Users Only) */}
        {isAuth && listed_by && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-violet-700 mb-4">Listed By</h2>
            <div className="flex items-center gap-4">
              <img
                src={listed_by.profile_image?.url}
                alt={listed_by.name}
                className="w-16 h-16 rounded-full border-2 border-violet-300 object-cover"
              />
              <div>
                <p className="text-lg font-bold uppercase">{listed_by.name}</p>
                <p className="text-sm text-gray-500">{listed_by.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        {features?.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-violet-700 mb-4">Features & Amenities</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="bg-violet-100 text-violet-800 px-3 py-2 rounded shadow flex items-center gap-2">
                  <BsHouseDoor /> {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-violet-700 mb-4">About This Property</h2>
          {isAuth ? (
            <p className="text-gray-700 leading-relaxed">{description}</p>
          ) : (
            <p className="text-red-500 font-semibold text-center">
              Please{" "}
              <Link to="/login" className="underline text-violet-700">
                login
              </Link>{" "}
              to view the full property description.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

PropertyDetails.propTypes = {
  onFetch: PropTypes.func.isRequired,
};

export default PropertyDetails;
=======
import { housesData } from "../data";
import { Link, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useState, useEffect } from "react";
import { GiPositionMarker } from "react-icons/gi";
import { MdCurrencyRupee } from "react-icons/md";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignIN, setIsSignIN] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const signIN = localStorage.getItem("issignIN");
    if (loggedIn === "true" || signIN === "true") {
      setIsLoggedIn(true);
      setIsSignIN(true);
    }
  }, []);

  return (
    <section className="p-10">
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col text-left">
          <h2 className="text-2xl font-semibold">{house.name}</h2>
          <h3 className="text-lg mb-4">{house.address}</h3>
        </div>
        <div className="flex flex-col gap-8">
          {/* Property Details */}
          <div className="flex flex-col gap-5">
            <div className="mb-8 w-full">
              <img
                className="w-full h-full rounded-xl max-h-[500px] object-fit-cover"
                src={house.imageLg}
              />
            </div>
          </div>
          {isLoggedIn || isSignIN ? (
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 p-5">
              {/* Location */}
              <div className="flex flex-col text-left justify-center gap-5 p-4 w-full lg:w-1/3 rounded-2xl shadow-xl">
                <h1 className="text-center text-xl font-semibold">Location</h1>
                <h3 className="flex flex-wrap items-center gap-2 text-lg">
                  Available for:
                  <span className="bg-green-400 rounded-xl px-2 text-white">
                    Rent
                  </span>
                  <span className="bg-violet-500 rounded-xl px-2 text-white">
                    Buy
                  </span>
                </h3>
                <p className="flex gap-2 text-lg">
                  <span className="text-red-600 pt-1">
                    <GiPositionMarker />
                  </span>
                  {house.address}, {house.country}
                </p>
              </div>

              {/* Specifications */}
              <div className="flex flex-col gap-5 p-4 w-full lg:w-1/2 rounded-2xl shadow-xl">
                <h1 className="text-center text-xl font-semibold">
                  Specification
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-violet-700 mb-4 text-2xl">
                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1">
                      {house.bedrooms}
                      <BiBed className="text-3xl pt-1" />
                    </p>
                    <div>Bedrooms</div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-violet-500"></div>
                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1">
                      {house.bathrooms}
                      <BiBath className="text-3xl pt-1" />
                    </p>
                    <div>Bathrooms</div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-violet-500"></div>
                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1">
                      {house.surface}
                      <BiArea className="text-3xl pt-1" />
                    </p>
                    <div>Surface Area</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-left text-lg gap-3 sm:gap-0">
                  <p className="flex items-center bg-green-500 px-2 rounded-lg text-white font-semibold">
                    Price: <MdCurrencyRupee className="ml-1" />
                    {house.price}
                  </p>
                  <p>Built In: {house.year}</p>
                </div>
              </div>

              {/* Agent Info */}
              <div className="flex flex-col gap-5 p-4 w-full lg:w-1/3 rounded-2xl shadow-xl">
                <h1 className="text-center text-xl font-semibold">
                  Agent Details
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    className="w-20 h-20 p-1 border border-gray-300 rounded-full"
                    src={house.agent.image}
                  />
                  <div className="text-lg text-left whitespace-pre-line">
                    {house.agent.name.split(" ")[0]}
                    <br />
                    {house.agent.name.split(" ")[1]}
                  </div>
                </div>
                <div className="text-left text-base space-y-1">
                  <p>Contact: {house.agent.phone}</p>
                  <p>Email: {house.agent.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-red-500 font-semibold text-center">
              Please{" "}
              <Link to="/login" className="text-violet-700 underline">
                login
              </Link>{" "}
              to see more information.
            </p>
          )}

          <div className="flex flex-col gap-5 mt-10">
            <h2 className="flex items-center gap-4 text-xl md:text-2xl text-center">
              <span className="flex-grow h-px bg-violet-500"></span>
              <span className="bg-violet-500 rounded-xl px-3 py-1 text-white">
                About Property
              </span>
              <span className="flex-grow h-px bg-violet-500"></span>
            </h2>
            <p className="text-base md:text-lg font-normal text-left">
              {house.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
