
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Views/NavBar/NavBar.js';
import './index.css';
import Home from './Views/Home/Home';
function App() {
  return (

    <Router>
        <Navbar/>
    <Switch>
    {/* <Route path="/venta" exact component={Venta} />
      <Route path="/inventario" exact component={Inventario} />
      <Route path="/reportes" exact component={Reportes} />
      <Route path="/configuracion" exact component={Configuracion} />*/}
      {/* <Route path="/"  exact component={Login} /> */}
      {/* <div> */}
      
      <Route path="/" exact component={Home} />
      {/* <Route path="/info" exact component={Info} /> 
      <Route path="/usuario" exact component={Usuario} /> 
      <Route path="/referidos" exact component={Referidos} /> 
      <Route path="/llaves" exact component={Llaves} /> 
      <Route path="/ayuda" exact component={Ayuda} />
      <Route path="/ingresar/:cadena" exact component={Ingresar} /> */}

      {/* </div> */}
    </Switch> 

    {/* <BottomBar /> */}
   
  </Router>


    )}

export default App;
