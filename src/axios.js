import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-7f680.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-7f680/us-central1/api",
});

export default instance;
