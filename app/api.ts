import axios from "axios";

export const annotationAPI = axios.create({
  baseURL: "http://100.67.47.42:5800",
  timeout: 0,
});

export const loaderAPI = axios.create({
  baseURL: "http://100.67.47.42:8000",
  timeout: 0,
});

console.log(process.env)
