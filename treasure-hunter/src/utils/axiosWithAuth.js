import axios from "axios";
token = REACT_APP_API_KEY

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Token ${token}`
    },
    baseURL: process.env.REACT_APP_BASEURL
  });
};
