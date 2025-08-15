import axios from "axios";

export const annotationAPI = axios.create({
  baseURL: "http://http://localhost:5800",
  timeout: 0,

});

export const loaderAPI = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 0,

});
