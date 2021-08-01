import Axios from "axios"

import {
    GET_PLAT_API
  
} from "./shared/apiUrls"

export const fetchPlat=()=>
Axios.get(GET_PLAT_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data);
//   commande


// export const fetchCommande=()=>
// Axios.get(GET_COMMANDE_API,{
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }).then(res=>res.data);



const Api = axios.create({ baseURL: "http://localhost:4000/RestoApp/menu" });

//addMenu
function addNewMenu(title, price,image,description ) {
    return Api.post("/post", { title, price,image,description});
  }
  export default {addNewMenu,getAllMenus}
  

