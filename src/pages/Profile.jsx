import { useEffect, useState } from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaPlus,
  FaFacebook, FaTwitter, FaInstagram, FaTrashAlt, FaSave, FaTimes
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const capitalize = (str) => str?.charAt(0).toUpperCase() + str.slice(1);

const Profile = ({ onGetProperties, onUpdateProfile, onDeleteProperty }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const userProperties = useSelector((state) => state.property.userProperties);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [editableData, setEditableData] = useState({
    name: "", email: "", phone: "", location: "", about: "",
    experience: "", specialty: "", profilePic: null,
    socials: { facebook: "", twitter: "", instagram: "" }
  });

  useEffect(() => {
    dispatch(fetchProfile()).finally(() => setLoading(false));
  }, [dispatch]);

  const handleEdit = (property) => {
    navigate("/add-property", { state: { property } });
  };

  useEffect(() => {
    if (user?.id) {
      console.log(user.id)
      onGetProperties(user.id);
      setEditableData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        about: user.about || "",
        experience: user.agent_details?.experience || "",
        specialty: user.agent_details?.specialty || "",
        profilePic: null,
        socials: {
          facebook: user.socials?.facebook || "",
          twitter: user.socials?.twitter || "",
          instagram: user.socials?.instagram || ""
        }
      });
    }
  }, [onGetProperties, user]);

  const handleDeleteProperty = (propertyId) => {
    onDeleteProperty(propertyId);
    toast.success("Property deleted successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({
      ...prev,
      socials: { ...prev.socials, [name]: value }
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditableData((prev) => ({ ...prev, profilePic: file }));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const formData = new FormData();
    formData.append("name", editableData.name);
    formData.append("email", editableData.email);
    formData.append("phone", editableData.phone);
    formData.append("location", editableData.location);
    formData.append("about", editableData.about);
    if (editableData.profilePic) {
      formData.append("profile_image", editableData.profilePic);
    }
    Object.entries(editableData.socials).forEach(([platform, url]) => {
      formData.append(`socials[${platform}]`, url);
    });
    if (user.roles?.includes("agent")) {
      formData.append("agent_details[experience]", editableData.experience);
      formData.append("agent_details[specialty]", editableData.specialty);
    }

    const result = await onUpdateProfile(formData);
    if (result?.type === "auth/updateProfile/fulfilled") {
      await dispatch(fetchProfile());
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } else {
      toast.error("Failed to update profile.");
    }
    setSaving(false);
  };

  if (loading) return <div className="text-center py-20 text-lg text-gray-600">Loading profile...</div>;

  const isAgent = user?.roles?.includes("agent");

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-violet-600 shadow-md">
            {editableData.profilePic ? (
              <img src={URL.createObjectURL(editableData.profilePic)} alt="Preview" className="object-cover w-full h-full" />
            ) : user.profile_image?.url ? (
              <img src={user.profile_image.url} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <CgProfile className="text-violet-500 text-[130px]" />
            )}
            {isEditing && (
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            )}
          </div>

          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <input
                name="name"
                value={editableData.name}
                onChange={handleInputChange}
                className="text-3xl uppercase font-bold w-full border-b focus:outline-none"
              />
            ) : (
              <h1 className="text-3xl font-bold text-gray-800 uppercase">{user.name}</h1>
            )}
            <p className="text-sm text-gray-500 mt-1">
              Joined: {new Date(user.joined).toLocaleDateString()}
            </p>
            <button className="text-sm text-white py-1 px-5 rounded-4xl bg-purple-500 mt-1">
              {user.roles?.includes("agent") ? "Real Estate Agent" : "User"}
            </button>

            <div className="flex gap-4 items-center flex-wrap my-4">
              {["facebook", "twitter", "instagram"].map((platform) => {
                const Icon = platform === "facebook" ? FaFacebook : platform === "twitter" ? FaTwitter : FaInstagram;
                return (
                  <div key={platform}>
                    {isEditing ? (
                      <input
                        name={platform}
                        value={editableData.socials[platform]}
                        onChange={handleSocialChange}
                        placeholder={`${capitalize(platform)} URL`}
                        className="text-sm border px-3 py-1 rounded w-44"
                      />
                    ) : (
                      user.socials?.[platform] && (
                        <a href={user.socials[platform]} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-violet-600">
                          <Icon className="text-xl" />
                        </a>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <FaEdit /> Edit Profile
            </button>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {["email", "phone", "location"].map((field) => {
            const icons = { email: FaEnvelope, phone: FaPhone, location: FaMapMarkerAlt };
            const Icon = icons[field];
            return (
              <div key={field} className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <Icon className="text-violet-600" />
                {isEditing ? (
                  <input
                    name={field}
                    value={editableData[field]}
                    onChange={handleInputChange}
                    className="bg-transparent border-b focus:outline-none w-full"
                  />
                ) : (
                  <span className="text-gray-800 uppercase">{user[field] || "N/A"}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Agent Section */}
        {isAgent && (
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {["experience", "specialty"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-medium capitalize">{field}</label>
                {isEditing ? (
                  <input
                    name={field}
                    value={editableData[field]}
                    onChange={handleInputChange}
                    className="mt-1 w-full border rounded p-2"
                  />
                ) : (
                  <p className="text-gray-800 mt-1">
                    {user.agent_details?.[field]
                      ? `${user.agent_details[field]}${field === "experience" ? " years" : ""}`
                      : "N/A"}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* About Section */}
        <div className="mb-10">
          <label className="block text-gray-700 font-medium mb-2">About</label>
          {isEditing ? (
            <textarea
              name="about"
              value={editableData.about}
              onChange={handleInputChange}
              rows={4}
              className="w-full border rounded p-3"
            />
          ) : (
            <p className="text-gray-600">{user.about || "No about info."}</p>
          )}
        </div>

        {/* Save/Cancel */}
        {isEditing && (
          <div className="flex gap-4 justify-end">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaSave /> {saving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaTimes /> Cancel
            </button>
          </div>
        )}

        {/* Properties Section */}
        <div className="mt-14">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">My Properties</h2>
            <button
              onClick={() => navigate("/add-property")}
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <FaPlus /> Add Property
            </button>
          </div>

          {userProperties?.length ? (
            <ul className="grid gap-6 sm:grid-cols-2">
              {userProperties.map((property) => (
                <li
                  key={property._id}
                  className="bg-white border rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row"
                >
                  {/* Property Image */}
                  <div className="sm:w-1/3 h-48 sm:h-auto bg-gray-100">
                    {property.images?.[0] ? (
                      <img
                        src={property.images[0].url}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Property Details */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-violet-700">{property.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-3">{property.description}</p>
                      <p className="text-violet-800 font-bold mt-2">{property.price}</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={handleEdit.bind(null, property)}
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        <FaEdit /> Edit
                      </button>

                      <button
                        onClick={handleDeleteProperty(property._id)}
                        className="text-red-600 hover:underline text-sm flex items-center gap-1"
                      >
                        <FaTrashAlt /> Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          ) : (
            <p className="text-gray-500">No properties added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  onUpdateProfile: PropTypes.func.isRequired,
  onUpdateProperty: PropTypes.func.isRequired,
  onDeleteProperty: PropTypes.func.isRequired,
  onGetProperties: PropTypes.func.isRequired,
};

export default Profile;
