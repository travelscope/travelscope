import axios from "axios";

const BASE_URL =
  "https://api.kontenbase.com/query/api/v1/1a072d48-bcee-416d-a062-9ae1a27fa690/";

const RequestAPI = axios.create({
  baseURL: BASE_URL,
});

export default RequestAPI;
