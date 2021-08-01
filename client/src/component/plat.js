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
            <h1>Liste des plats</h1>

   <div className="d-flex justify-content-between">
        {plats.map(plat => (<div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={plat.image} />
  <Card.Body>
    <Card.Title>{plat.nom}</Card.Title>
   
    <Card.Text>
    {plat.type}<br/>
    {plat.prix}
    </Card.Text>
    <Button variant="primary">Commander</Button>
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>

        </div>
    )
}
