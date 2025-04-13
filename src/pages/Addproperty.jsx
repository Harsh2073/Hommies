import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import login from "../assets/login.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const FormRow = ({ label, children }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
    <label className="md:w-48 text-sm font-medium">{label}</label>
    <div className="flex-1">{children}</div>
  </div>
);

FormRow.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

const AddProperty = ({ onCreate, onUpdateProperty }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  const editingProperty = location.state?.property || null;

  const [form, setForm] = useState({
    title: editingProperty?.title || "",
    description: editingProperty?.description || "",
    price: editingProperty?.price || "",
    property_type: editingProperty?.property_type || "",
    bedrooms: editingProperty?.bedrooms || "",
    bathrooms: editingProperty?.bathrooms || "",
    area: editingProperty?.area || "",
    address: editingProperty?.address || "",
    city: editingProperty?.city || "",
    state: editingProperty?.state || "",
    zipCode: editingProperty?.zipCode || "",
    country: editingProperty?.country || "",
    availableType: editingProperty?.availableType || "",
    propertyStatus: editingProperty?.propertyStatus || "available",
    features: editingProperty?.features?.join(", ") || "",
  });

  const [images, setImages] = useState(editingProperty?.images || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    // Append raw fields
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", Number(form.price));
    formData.append("property_type", form.property_type);
    formData.append("bedrooms", Number(form.bedrooms));
    formData.append("bathrooms", Number(form.bathrooms));
    formData.append("area", Number(form.area));
    formData.append("address", form.address);
    formData.append("city", form.city);
    formData.append("state", form.state);
    formData.append("zipCode", form.zipCode);
    formData.append("country", form.country);
    formData.append("availableType", form.availableType);
    formData.append("propertyStatus", form.propertyStatus);
    formData.append("features", form.features); // 👈 plain string (e.g. "pool, gym, parking")
  
    // Append existing images if editing
    if (editingProperty && editingProperty.images) {
      editingProperty.images.forEach((img) => {
        // Use the image URL or the cloudinary URL for existing images (do not overwrite)
        formData.append("existingImages", img.url);
      });
    }
  
    // Append new images
    images.forEach((img) => {
      if (img instanceof File) {
        formData.append("images", img); // New images selected by the user
      }
    });
  
    try {
      if (editingProperty && editingProperty._id) {
        await onUpdateProperty({ id: editingProperty._id, formData });
        toast.success("Property updated!");
      } else {
        await onCreate(formData); // ✅ removed userId, backend gets req.user._id
        toast.success("Property added!");
      }
  
      navigate("/profile");
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(`Submission failed: ${err?.response?.data?.message || err.message}`);
    }
  };
  


  const fieldList = [
    ["Title *", "title", "text", true],
    ["Description", "description", "textarea"],
    ["Price *", "price", "number", true],
    ["Area", "area", "number"],
    ["Bedrooms", "bedrooms", "number"],
    ["Bathrooms", "bathrooms", "number"],
    ["Address *", "address", "text", true],
    ["City *", "city", "text", true],
    ["State", "state", "text"],
    ["Zip Code", "zipCode", "text"],
    ["Country *", "country", "text", true],
    ["Features", "features", "text"],
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${login})`, opacity: 0.25 }}
      ></div>

      <div className="relative w-full max-w-5xl bg-white bg-opacity-95 backdrop-blur-md shadow-2xl rounded-xl p-10 space-y-8 z-10">
        <h2 className="text-2xl font-bold mb-4">
          {editingProperty ? "Update Property" : "Add Property"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fieldList.map(([label, name, type, required = false]) => (
            <FormRow key={name} label={<span title={name}>{label}</span>}>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  required={required}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              )}
            </FormRow>
          ))}

          <FormRow label={<span title="property_type">Property Type *</span>}>
            <select
              name="property_type"
              value={form.property_type}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Type</option>
              {["Apartment", "Villa", "House", "Land", "Commercial", "Industrial", "Farm", "Other"].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </FormRow>

          <FormRow label={<span title="availableType">Available For *</span>}>
            <select
              name="availableType"
              value={form.availableType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </select>
          </FormRow>

          <FormRow label={<span title="propertyStatus">Status *</span>}>
            <select
              name="propertyStatus"
              value={form.propertyStatus}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="available">Available</option>
              <option value="sold">Sold</option>
              <option value="rented">Rented</option>
            </select>
          </FormRow>

          <FormRow label={<span title="images">Images</span>}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md p-2 cursor-pointer"
            />
          </FormRow>

          <div className="md:col-span-2 text-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md"
            >
              Submit Property
            </button>
          </div>
        </form>

        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {images.map((img, idx) => {
              const src = img instanceof File ? URL.createObjectURL(img) : img.url || img;

              return (
                <div
                  key={idx}
                  className="relative group border rounded shadow overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`preview-${idx}`}
                    className="w-full h-24 object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setImages((prev) => prev.filter((_, i) => i !== idx))
                    }
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Remove image ${idx + 1}`}
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

AddProperty.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onUpdateProperty: PropTypes.func.isRequired,
};

export default AddProperty;
