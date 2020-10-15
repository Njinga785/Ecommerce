import React from 'react'; 
// import Navbar from 'react-bootstrap/esm/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Product from './components/Product'
import CreateProduct from './components/CreateProduct'; 
// import SecuredRoutes from './components/SecuredRoutes'


function App() {
  return (
   <BrowserRouter>
      <div className="App"> 
      <NavBar/>
        <Switch>  
        <Route exact path='/' component={Home}/>
        
        <Route exact path='/signin' component={SignIn}/> 
        <Route exact path='/signup' component={SignUp}/> 
        <Route exact path='/create' component={CreateProduct}/> 
        <Route path='/:id' component={Product}/>
        </Switch>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
