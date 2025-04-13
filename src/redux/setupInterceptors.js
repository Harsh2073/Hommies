import { toast } from 'react-toastify';
import API from './api/axios';
import { logoutUser } from './features/authSlice';
import store from './store';
import Cookies from 'js-cookie';

const setupInterceptors = () => {
  API.interceptors?.response.use(
    (res) => res,
    async (error) => {
      const status = error?.response?.status;

      if (status === 401 || status === 403) {
        toast.error('Session expired. Please log in again.');

        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('is_auth');
        localStorage.clear();
        sessionStorage.clear();

        await store.dispatch(logoutUser());
        window.location.href = '/login';
      }

      return Promise.reject(error);
    }
  );
};


export default setupInterceptors;
