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

export const addTrainerImage = async (id, sendData, headers) => {
  try {
    return await api.post(`/trainers/upload/${id}`, sendData, headers);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteCardImage = async (id, imgName) => {
  try {
    return await api.delete(`/cards/upload/${id}/${imgName}`)
  } catch (err) {
    throw new Error(err.message);

  }
}

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

export const deleteTrainerCard = async (id) => {
  try {
    return await api.delete(`/trainers/${id}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteCoruse = async (id) => {
  try {
    return await api.delete(`/courses/${id}`);
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

export const getCourseData = async () => {
  try {
    return await api.get("/courses");
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getTrainersData = async () => {
  try {
    return await api.get("/trainers");
  } catch (err) {
    throw new Error(err.message);
  }
};

export const addCourseDescription = async (description, cardId) => {
  try {
    return await api.post(`/courses/${cardId}`, description);
  } catch (err) {
    throw new Error(err.message);
  }

}
