import axios from "axios"
import "./config"

export function getRequest (url){
    axios.get(url)
        .then(response=>{
            return response;
    })
}

