import axios from "axios";

export default axios.create({
  baseURL: "https://api.jamendo.com/v3.0",
  params: {
    client_id: "8f6bfd02",
    client_secret: "2445863a21a557f26b5fbb82c0cf441b",
    format: "json",
  },
});


