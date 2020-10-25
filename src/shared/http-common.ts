import axios from "axios";

export default axios.create({
  baseURL: "https://api.mercadolibre.com/",
  headers: {
    "Content-type": "application/json"
  }
});