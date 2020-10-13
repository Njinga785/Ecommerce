import React from 'react'; 
// import Navbar from 'react-bootstrap/esm/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Product from './components/Product'
import CreateProduct from './components/CreateProduct';


function App() {
  return (
   <BrowserRouter>
      <div className="App"> 
      <NavBar/>
        <Switch>  
        <Route exact path='/'component={Home}/>
        <Route path='/product/:id'component={Product}/>
        <Route path='/signin' component={SignIn}/> 
        <Route path='/signup' component={SignUp}/> 
        <Route path='/create' component={CreateProduct}/>
        </Switch>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
