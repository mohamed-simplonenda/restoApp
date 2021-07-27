import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./component/navbar";
function App() {
  
  const [plat, setPalt] = useState([]);
  const getPlat = () => {
    axios
      .get("/resto/getPlat")
      .then((res) => {
        console.log("nekhdem", res.data);
        var a = res.data;
        setPalt(a);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getPlat();
  }, []);
  return (
    
  
    <div className="App">
        < Menu />

      {plat.map((el) => (
        <div>
          <h1>{el.nom}</h1>
          <h2>{el.type}</h2>
          <h3>{el.quantite}</h3>
          <p>{el.prix}</p>
        </div>
      ))}
    </div>
  );
}

export default App;