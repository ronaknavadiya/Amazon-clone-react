import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-react-7fbb6/us-central1/api", // api url (cloud fun)
});

export default instance;
