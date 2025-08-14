import axios from "axios";

export const annotationAPI = axios.create({
  baseURL: "http://172.16.11.183:5800",
  timeout: 0,

});

export const loaderAPI = axios.create({
  baseURL: "http://172.16.11.183:8000",
  timeout: 0,

});
