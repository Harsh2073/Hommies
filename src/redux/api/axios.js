import axios from 'axios';
import { logoutUser } from '../features/authSlice'; // adjust path
import { toast } from 'react-toastify';

const API = axios.create();

const setupInterceptors = (store) => {
  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;

      if ([401, 403, 500].includes(status)) {
        toast.warn(`🔁 Reloading due to error ${status}`, { autoClose: 1500 });

        try {
          await store.dispatch(logoutUser());
        } catch (e) {
          console.error('Logout failed:', e);
        }

        // Give time for toast to show and logout to dispatch
        setTimeout(() => {
          window.location.reload();
        }, 2000); // delay for logout + toast
      }

      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
