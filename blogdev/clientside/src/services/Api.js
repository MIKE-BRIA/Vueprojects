import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Backend server URL
});

export default api;

// export default () => {
//   return axios.create({
//     baseURL: `http://localhost:3000/`,
//   });
// };

// const instance = axios.create({
//     baseURL: `http://localhost:3000/`,
// })
