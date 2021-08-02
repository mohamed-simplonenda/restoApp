import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlat} from '../actions/actions'
import{Card,Button} from 'react-bootstrap'
import { getCommande } from '../actions/commande'

export default function PlatList() {

     
     const plats = useSelector(state => state.platReducer.plats)
     const loading = useSelector(state => state.platReducer.loading)
     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getPlat());
      },[]);
      console.log(plats, "did we ?");

    
  
  


    return (
        <div>
            {/* <h1 className="text-center">Liste des plats</h1> */}

   <div className="d-flex desc text-center justify-content-between flex-wrap ">
        {plats.map(plat => (<div className="mb-5">
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={plat.image} style={{ height: '16rem' }}/>
  <Card.Body>
    <Card.Title>{plat.nom}</Card.Title>
   
    <Card.Text>
    {plat.type}<br/>
    {plat.prix}
    </Card.Text>
    <Button variant="primary">Order Now</Button>
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>

        </div>
    )
}
