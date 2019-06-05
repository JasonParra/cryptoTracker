import axios from "axios"
import "./config"

// export function getRequest (url){
//     return axios.get(url).then(response=>{response.data})
// }

export default {
    getData: params => axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key={e49f0c3d16d1d870dd7935b2964b0439059d9bd1601ecb1c64950a102f04ce6b}', { params }),
}