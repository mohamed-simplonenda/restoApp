import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {addNewPlats} from "../actions/actions"
import {useDispatch,useSelector} from 'react-redux'
const AddMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()



const [input,setInput]=useState({image:"",nom:"",type:"",prix:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addPlat=()=>{
dispatch (addNewPlats(input.image, input.nom,input.type ,input.prix)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}
  return(
    <div>
    <div className='container mt-5'>
 <Button variant="primary" onClick={handleShow}>
   Add Menu
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Add Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Image</Form.Label>
<Form.Control type="text" placeholder="image" name='image' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Nom</Form.Label>
<Form.Control type="text" placeholder="enter name"  name='nom' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>type</Form.Label>
<Form.Control type="text" placeholder="enter type"  name='type' onChange={hanleChange}   />
</Form.Group>



<Form.Group controlId="formBasicPassword">
<Form.Label>Prix</Form.Label>
<Form.Control type="text" placeholder="enter prix"  name="prix" onChange={hanleChange}   />
</Form.Group>
<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button  onClick={addPlat}>add</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddMenu

      