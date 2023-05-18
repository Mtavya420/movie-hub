import axios from "axios";

export default axios.create({
  baseURL: "https://api.jamendo.com/v3.0",
  params: {
    client_id: "8f6bfd02",
    format: "json",
  },
});


