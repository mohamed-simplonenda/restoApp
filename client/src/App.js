import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./component/navbar";
import PlatList from "./component/plat.js";
import Admin from "./component/dhashboard";
import Footer from "./component/footer";
import Description from "./component/description";
import{Card,Button,Container} from 'react-bootstrap'
function App() {
  
  // const [plats, setPalt] = useState([]);
  // const getPlat = () => {
  //   axios
  //     .get("/resto/plat/getPlat")
  //     .then((res) => {
  //       console.log("nekhdem", res.data);
  //       var a = res.data;
  //       setPalt(a);
  //     })
  //     .catch((error) => console.error(error));
  // };
  // useEffect(() => {
  //   getPlat();
  // }, []);
  return (
    <div className='App'>
      <div className="head">
      <Menu/>
      <Description/>
      </div>
      
    <Container>
      <div>
    <PlatList />
     </div>
    </Container>


    {/* {plats.map(plat => (<div className='d-flex justify-content-between'>
      <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>{plat.nom}</Card.Title>
<Card.Text>
{plat.type}
</Card.Text>
<Card.Text>
{plat.quantite}<br/>
{plat.prix}
</Card.Text>
<Button variant="primary">Commander</Button>
</Card.Body>
</Card>
    

      </div>
    ))} */}
  <Footer/>
    </div>
)
}

export default App;