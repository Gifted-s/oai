import React, { Component} from 'react';

import {BrowserRouter , Route, Switch} from 'react-router-dom'

import Home from './Components/Home/Home'

import firebase from '../node_modules/firebase'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Support from './Components/Home/Support';
import Policy from './Components/Home/Policy';
import Login from './Components/Home/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard2 from './Components/ClientDash/Dashboard';
import ChatRoom from './Components/Dashboard/ChatRoom';
import Mission from './Components/Home/Mission';
import Value from './Components/Home/Value';
export default class App extends Component {
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyDh35ue2T4DeYwsGVyJsw8hEawAcRurq38",
      authDomain: "oaiup-ee651.firebaseapp.com",
      databaseURL: "https://oaiup-ee651.firebaseio.com",
      projectId: "oaiup-ee651",
      storageBucket: "oaiup-ee651.appspot.com",
      messagingSenderId: "422189173484",
      appId: "1:422189173484:web:bed2262200dcbc95d6f3c9",
      measurementId: "G-EFKLMNXMWJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  render() {
    return (
     
          <BrowserRouter>
        
          <Switch>
          {/*  Home page */}
          {/* <Navbar/> */}
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/getstarted" component={GetStarted} exact/>
          <Route path="/support" component={Support} exact/>
          <Route path="/policy" component={Policy} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/chatroom" component={ChatRoom}/>
          <Route path="/signup" component={Login} exact/>
          <Route path="/cdashboard" component={Dashboard2} exact/>
          <Route path="/mission" component={Mission} exact/>
          <Route path="/value" component={Value} exact/>
          
          </Switch>
          </BrowserRouter>
 
    )
  }
}
