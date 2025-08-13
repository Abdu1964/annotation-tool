import axios from "axios";

export const annotationAPI = axios.create({
  baseURL: "http://http://172.30.195.249:5800",
  timeout: 0,

});

export const loaderAPI = axios.create({
  baseURL: "http://172.30.195.249:8000",
  timeout: 0,

});
