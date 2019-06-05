import axios from "axios"
import {API_KEY} from "./config"

export function cryptoToCurrency(cryptos,currency){
     return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${cryptos}&tsyms=${currency}&api_key={${API_KEY}}`)
}