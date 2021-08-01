import axios from 'axios'
import {fetchPlat} from '../request'


// export function getPlat() {
//     return dispatch => {
//         fetchPlat()
//         .then (plats =>dispatch (
//             {type: "GET_PLAT_SUCCEDED",payload: plats})
//         )

//         .catch(err=>dispatch( {
//             type: "GET_PLAT_FAILED",
//             payload: err
//           }))
//     }

// }

export const getPlat=()=> async (dispatch)=> {
    try{
    const res = await axios.get('http://localhost:4000/resto/plat/getPlat')
    dispatch({
        type:"GET_PLAT_SUCCEDED",
        payload:res.data 

    })
    console.log('sara',res.data)
    }
    catch (error) {
                  console.log(error);
                 }
    }


    // post plat

    export const addMenuApi=(image, nom,type,prix )=> async (dispatch) =>{
        try{
            const res=await addNewMenu (image, nom,type,prix);
            dispatch ({
                type:ADD_MENU,
                payload:res.data
            })
            console.log("payload")
        }
        catch (error) {
                  console.log(error);
                 }
    }