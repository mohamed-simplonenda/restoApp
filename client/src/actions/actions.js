import axios from 'axios'
import {addPlat,deleteItems} from '../request'


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

    export const addNewPlats=(image,nom,type,prix )=> async (dispatch) =>{
        try{
            const res=await addPlat (image,nom,type,prix);
            dispatch ({
                type:"POST_PLAT_SUCCEDED",
                payload:res.data
            })
            console.log("payload")
        }
        catch (error) {
                  console.log(error);
                 }
    }

    // delete plat 

    // export const deleteProduct = productId => async dispatch => {
    //     try {
       
    //         const response = await axios.delete(`http://localhost:4000/resto/plat/${productId}/deletePlat`);            
    //       dispatch({
    //             type: "DELETE_PLAT_SUCCEDED",
    //             payload: response.data,
    //         });
    //     } catch (err) {
    //         console.log('deleteProduct api error: ', err);
            
    //     }
    // };



export const deleteProduct = (id)=> async (dispatch) => {
    try {
      await deleteItems (id);
      dispatch({
        type:"DELETE_PLAT_SUCCEDED",
        payload:id
    })
      console.log("delete")
      dispatch(getPlat);
    } catch (error) {
      console.log(error);
    }
  };
    // update Menu
export const updateItem = (id,image,nom,type,prix) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:4000/resto/plat/${id}/updatePlat`,{image,nom,type,prix}).then(res=>  window.location.reload()) 
     
    dispatch({
      type:  "UPDATE_PLAT_SUCCEDED", 
      payload: res.data
    });
    console.log("superrr")
  } catch (error) {
    console.log(error);
  }
};