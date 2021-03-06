import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateItem} from '../actions/actions'
import {useDispatch} from 'react-redux'

const UpdateItem = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({image:el.image,nom:el.nom,type:el.type,image:el.image,prix:el.prix})
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const updatefood=()=>{
        dispatch (updateItem(id,update.image, update.nom,update.type ,update.prix)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
    <button  onClick={handleShow} ><i class="far fa-edit"></i> </button>


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Modifier Produit</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>image de votre produit</Form.Label>
<Form.Control type="text" placeholder="title" name='image' defaultValue={el.image}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>description</Form.Label>
<Form.Control type="text" placeholder="enter year"  name='nom' defaultValue={el.nom}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>type</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='type'  defaultValue={el.type}   onChange={handleChange} />
</Form.Group>



<Form.Group controlId="formBasicPassword">
<Form.Label>url de l'image</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="prix"  defaultValue={el.prix}  onChange={handleChange} />
</Form.Group>
<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updatefood} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateItem