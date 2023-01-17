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

/// Get Requests

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


/// Post Requests

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
export const addCourseImage = async (id, sendData, headers) => {
  try {
    return await api.post(`/courses/upload/${id}`, sendData, headers);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const addCourseDescription = async (description, cardId) => {
  try {
    return await api.post(`/courses/${cardId}`, { course_description: description });
  } catch (err) {
    throw new Error(err.message);
  }
}

export const cardSubmit = async (cardName, cardDescription) => {
  try {
    return await api.post("/cards", {
      card_name: cardName,
      card_description: cardDescription,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const addTrainerInfo = async (traienrName, trainerWorkplace) => {
  try {
    return await api.post("/trainers", {
      trainer_name: traienrName,
      trainer_workplace: trainerWorkplace
    })
  } catch (err) {
    throw new Error(err.message);
  }
}

export const loginReq = async (userEmail, userPassword) => {
  try {
    return await api.post("/login", { email: userEmail, password: userPassword })
  } catch (err) {
    throw new Error(err.message);
  }
}


/// Delete Requests

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


export const deleteCardImage = async (id, imgName) => {
  try {
    return await api.delete(`/cards/upload/${id}/${imgName}`)
  } catch (err) {
    throw new Error(err.message);

  }
}

export const deleteCourseImage = async (id, imgName) => {
  try {
    return await api.delete(`/courses/upload/${id}/${imgName}`)
  } catch (err) {
    throw new Error(err.message);

  }
}

export const deleteTrainerImage = async (id, imgName) => {
  try {
    return await api.delete(`/trainers/upload/${id}/${imgName}`)
  } catch (err) {
    throw new Error(err.message);

  }
}