import axios from "axios";

export default axios.create({
    baseURL: "https://innova-api.onrender.com/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})