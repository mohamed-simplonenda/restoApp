import axios from "axios"

import {
    GET_PLAT_API
  
} from "./shared/apiUrls"

export const fetchPlat=()=>
axios.get(GET_PLAT_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data);
//   commande


// export const fetchCommande=()=>
// Axios.get(GET_COMMANDE_API,{
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }).then(res=>res.data);



const Api = axios.create({ baseURL: "http://localhost:4000/resto/plat" });

//addMenu
function addPlat(image,nom,type,prix ) {
    return Api.post("/addPlat", {image,nom,type,prix});
  }
  export  {addPlat}
  export default {addPlat}



  // delete plat


export const deleteItems=(id)=> {
  axios.delete(`http://localhost:4000/resto/plat/${id}/deletePlat` ).then(res=>res.data) ;
}
  

