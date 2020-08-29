import axios from "axios";
import config from "./config";

const Api = axios.create({
     baseURL: `${config.api.protocol}://${config.api.host}/data/`,
     headers: {
          common: {
               Authorization: "Bearer ",
          },
     },
});

export default Api;
