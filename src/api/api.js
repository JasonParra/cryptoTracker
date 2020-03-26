import axios from "axios"
import {API_KEY} from "./config"

export function cryptoToCurrency(crypto,currency){
     return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}&api_key={${API_KEY}}`)
}

export function getTopCurrencyByMarketCap(currency,limit){
     return axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=${currency}&api_key={${API_KEY}}`)
}