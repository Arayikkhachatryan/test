import axios from "axios";
let token = localStorage.getItem("accessToken");

export const api = axios.create({
  baseURL: "https://innova-api.onrender.com/api",
  // withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const addCardImage = async (id, sendData, headers) => {
  try {
    return await api.post(`/cards/upload/${id}`, sendData, headers);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const cardSubmit = async (cardInfo) => {
  try {
    return await api.post("/cards", cardInfo);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteCard = async (id) => {
  try {
    return await api.delete(`/cards/${id}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getCardsData = async () => {
  try {
    return await api.get("/cards");
  } catch (err) {
    throw new Error(err.message);
  }
};
