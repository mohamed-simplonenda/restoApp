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
import AddMenu from "./component/addPlat";
import Section1 from "./component/section1";
import { BrowserRouter as Router, Route} from "react-router-dom";

function Home() {
  
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
  
      <div>
      <Menu/>
      </div>
      <Description/>
      <Section1/>
     
      
    <Container>
      <div>
    <PlatList />
     </div>
    </Container>


   
    
  <Footer/>
    </div>
)
}

export default Home;