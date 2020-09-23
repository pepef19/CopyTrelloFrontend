import React from 'react';
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Signup from "./Components/SignupPage/signuppage";
import HomePage from "./Components/HomePage/HomePage";
import LoginForm from "./Components/LoginForm/LoginForm";
import PrivateRoute from "./Components/PrivateRoute/privateRoute";
import RenderBoard from "./Components/BoardsComponents/RenderBoard/RenderBoard";

function App() {
  return (
      <Router forceRefresh={true}>
        <div className="App">
            <Switch>
                <Route exact path="/navbar" component={Navbar}/>
                <Route exact path="/" render={props => <LandingPage {...props}/>}/>
                <Route exact path="/signup" render={props => <Signup {...props}/>}/>
                <PrivateRoute exact path="/home" component={props => <HomePage {...props}/>}/>
                <Route exact path="/board/:id" render={props => <RenderBoard {...props}/>}/>
                <Route exact path="/login"><LoginForm/></Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
