
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Views/NavBar/NavBar.js';
import './index.css';
import Home from './Views/Home/Home';
import Blog from './Views/Blog/Blog';
import Noticias from './Views/Noticias/Noticias.js';
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
      <Route path="/blog" exact component={Blog} /> 
      {/* <Route path="/usuario" exact component={Usuario} /> 
      <Route path="/referidos" exact component={Referidos} /> 
      <Route path="/llaves" exact component={Llaves} /> 
      <Route path="/ayuda" exact component={Ayuda} /> */}
      <Route path="/noticias/:cadena" exact component={Noticias} />

      {/* </div> */}
    </Switch> 

    {/* <BottomBar /> */}
   
  </Router>


    )}

export default App;
