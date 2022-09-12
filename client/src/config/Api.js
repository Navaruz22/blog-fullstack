import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:5000/api`,
});

instance.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    if (userData) {
      const { token } = userData;
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
