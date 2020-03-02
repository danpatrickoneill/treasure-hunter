import axios from "axios";

export const axiosWithAuth = token => {
  return axios.create({
    headers: {
      Authorization: `Token ${token}`
    },
    baseURL: process.env.REACT_APP_BASEURL
  });
};
