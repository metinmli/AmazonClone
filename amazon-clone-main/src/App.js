import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home.js";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Checkout from "./Checkout";
import Login from './Login'
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";


function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser =>{
            console.log(authUser)

            if(authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
    }, []);


  return (
      <Router>
    <div className="app">
        <Switch>
            <Route path="/" exact>
                <Header/>
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/checkout">
                <Header/>
                <Checkout/>
            </Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
