// export default function platReducer(
//     state = {plats :  []},
//     action
// ) {
//     switch(action.type) {

//         case "GET_PLAT_SUCCEDED":
//             state = {
//                 ...state,
//                 plats:[action.payload]
//                 }
//                 break;


//     }
// return state
// }

//  
const initialState={
  plats : [],
  loading:true
} 

 export const platReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case "GET_PLAT_SUCCEDED":
      
      return {
        ...state,
        plats: payload,
        loading: false
      };

      case "POST_PLAT_SUCCEDED":
       return {
        ...state,
        plats: [...state.plats, payload]
  
       };
       case "DELETE_PLAT_SUCCEDED":
			return {
        ...state,
        plats: state.plats.filter(
          data => data._id !== payload
				),
			};
      
  

  }
  return state
};
// ;
// const commandes = [];

// export const commandeReducer = (state = commandes, action) => {
//   switch (action.type){
//     case "GET_COMMANDE_SUCCEDED":
      
//        return action.payload
       
        
      
// break

//   }
//   return state
// }