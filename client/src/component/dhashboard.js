// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
// import {  SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

// function Admin() {
//     return (
//         <div>
// <ProSidebar>
//   <SidebarHeader>
 

//     <Menu iconShape="square">
//         <MenuItem >Dashboard</MenuItem>
//         <SubMenu title="Components" >
//         <MenuItem>Component 1</MenuItem>
//         <MenuItem>Component 2</MenuItem>
//         </SubMenu>
//     </Menu>
//   </SidebarHeader>
//   <SidebarContent>
 

//     <Menu iconShape="square">
//         <MenuItem >Dashboard</MenuItem>
//         <SubMenu title="Components" >
//         <MenuItem>Component 1</MenuItem>
//         <MenuItem>Component 2</MenuItem>
//         </SubMenu>
//     </Menu>
//   </SidebarContent>
//   <SidebarFooter>
 

//     <Menu iconShape="square">
//         <MenuItem >Dashboard</MenuItem>
//         <SubMenu title="Components" >
//         <MenuItem>Component 1</MenuItem>
//         <MenuItem>Component 2</MenuItem>
//         </SubMenu>
//     </Menu>
//   </SidebarFooter>
// </ProSidebar>

//         </div>
//     )
    
// }
// export default Admin


import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlat} from '../actions/actions'
import{Card,Button} from 'react-bootstrap'
import { getCommande } from '../actions/commande'
import AddMenu from './addPlat'
import {deleteProduct} from '../actions/actions'
import UpdateItem from './update'



export default function Admin() {

     
     const plats = useSelector(state => state.platReducer.plats)
     const loading = useSelector(state => state.platReducer.loading)
     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getPlat());
      },[]);
      console.log(plats, "did we ?");

       //DeleteMenu
   const deleteItemm =(id)=>{
    dispatch (deleteProduct(id) )
    console.log(deleteProduct(id))
  }


  
  
  


    return (
        <div>
          <div className="d-flex justify-content-center mb-5">
            <AddMenu/>
          </div>
            {/* <h1 className="text-center">Liste des plats</h1> */}

   <div className="d-flex justify-content-between flex-wrap text-center">
        {plats.map(plat => (<div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={plat.image} style={{ height: '16rem' }}/>
  <Card.Body>
    <Card.Title>{plat.nom}</Card.Title>
   
    <Card.Text>
    {plat.type}<br/>
    {plat.prix}
    </Card.Text>
    <button
						type='button'
						className='btn btn-danger btn-sm'
						onClick={() => deleteItemm(plat._id)}
					>
						<i className='far fa-trash-alt pr-1'></i>
						Delete
					</button>
         <UpdateItem id={plat._id}  el={plat} />
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>
   
        </div>
    )
}
