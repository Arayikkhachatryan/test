import axios from "axios";
let token = localStorage.getItem("accessToken")

export default axios.create({
  baseURL: "https://innova-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  withCredentials: true,
});
