import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header';
import ScrollToTop from './pages/Scroll';
import ScrollToTopButton from './pages/ScrollingButton';
import Loading from './pages/Loading';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Agents from './components/Agents/Agents';
import Property from './components/Property/Property';
import Addproperty from './pages/Addproperty';
import Contact from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Service from './pages/Services';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

import {
  logoutUser,
  fetchProfile,
  registerUser,
  loginUser,
  updateProfile,
  fetchAllAgents
} from './redux/features/authSlice';

import {
  fetchAllProperties,
  fetchPropertyById,
  fetchPropertiesByUser,
  createProperty,
  updateProperty,
  deleteProperty,
} from './redux/features/propertySlice';

import ProtectedRoute from './pages/ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';
import MFooter from './components/MFooter/MFooter';
import MBlog from './pages/MBlog';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.info("You have been logged out.");
  };
  const handleGetAllAgents = () => dispatch(fetchAllAgents());
  const handleRegister = (formData) => dispatch(registerUser(formData));
  const handleLogin = (credentials) => dispatch(loginUser(credentials));
  const handleUpdateProfile = (formData) => dispatch(updateProfile(formData));

  const handleFetchProperties = () => dispatch(fetchAllProperties());
  const handleFetchPropertyById = (id) => dispatch(fetchPropertyById(id));
  const handleCreateProperty = (id,formData) => dispatch(createProperty(id,formData));
  const handleUpdateProperty = ({ id, formData }) => dispatch(updateProperty({ id, formData }));
  const handleDeleteProperty = (id) => dispatch(deleteProperty(id));
  const handleFetchPropertiesByUser = (userId) => dispatch(fetchPropertiesByUser(userId));
  useEffect(() => {
    const initializeApp = async () => {
      try {
        const profile = await dispatch(fetchProfile()).unwrap();
        dispatch(fetchAllProperties());

        if (profile?.user?._id) {
          dispatch(fetchPropertiesByUser(profile.user._id));
          toast.success(`Welcome back, ${profile.user.name || 'User'}!`);
        }
      } catch {
        dispatch(logoutUser());
        toast.error("Session expired. Please log in again.");
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    initializeApp();
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <div className="max-w-[1920px] mx-auto bg-[#F2EBF2]">
      <ScrollToTop />
      <Header onLogout={handleLogout} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        style={{ top: '100px' }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property onFetchAll={handleFetchProperties} />} />
        <Route path="/agents" element={<Agents onGetAgents={handleGetAllAgents} />} />
        <Route path="/property/:id" element={<PropertyDetails onFetch={handleFetchPropertyById} />} />
        <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onRegister={handleRegister} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/mblog' element={<MBlog />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/add-property"
            element={
              <Addproperty
                onCreate={handleCreateProperty}
                onUpdateProperty={handleUpdateProperty}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                onGetProperties={handleFetchPropertiesByUser}
                onUpdateProfile={handleUpdateProfile}
                onUpdateProperty={handleUpdateProperty}
                onDeleteProperty={handleDeleteProperty}
              />
            }
          />
        </Route>
      </Routes>
      <ScrollToTopButton />
      <MFooter />
    </div>
  );
}

export default App;
