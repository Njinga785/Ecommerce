import React from 'react'; 
// import Navbar from 'react-bootstrap/esm/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';


function App() {
  return (
   <BrowserRouter>
      <div className="App"> 
      <NavBar/>
        <Switch> 
        <Route path='/signin' component={SignIn}/> 
        <Route path='/signup' component={SignUp}/> 
        </Switch>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
