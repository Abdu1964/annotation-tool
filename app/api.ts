import axios from "axios";

export const annotationAPI = axios.create({
  baseURL: "http://host.docker.internal:5800",
  timeout: 0,

});

export const loaderAPI = axios.create({
  baseURL: "http://host.docker.internal:8000",
  timeout: 0,

});
