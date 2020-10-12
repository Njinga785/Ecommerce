import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
// import NavBar from './components/NavBar';


function App() {
  return (
   <BrowserRouter>
      <div className="App"> 
        <Switch> 
        <Route path='/signin' component={SignIn}/>
        </Switch>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
