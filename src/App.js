import React, {Component} from 'react'
import Header from './components/layout/Header'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Table from './components/items/Table'
import Login from './components/pages/Login'
import Submission from './components/pages/Submission'
import Searchbar from './components/items/Searchbar';
import Results from './components/pages/Results';
import Register from './components/pages/Register';
import ObjectPage from './components/pages/ObjectPage';
import Footer from './components/layout/Footer';
import Slides from './components/layout/Slides';


/*
Hansen Ngai
Tyler Philips
4WW3
Assignment 1
*/

class App extends Component {
    render() {
      return (
        <Router>
          <div className="container">
            <Header />     
             <Route exact path ="/" render={props => (
               <React.Fragment>
                 <h3   style={myStyle}>Featured Venues</h3>
                 <Slides style={myStyle}/>
               </React.Fragment>
             )} />
             <Route path ="/login" component = {Login} />
             <Route path ="/submission" component = {Submission} />
             <Route path ="/results" component = {Results}/>
             <Route path ="/register" component = {Register}/>
             <Route path ="/objectpage" component = {ObjectPage}/>
             <Footer/>
          </div>

          
        </Router>
      )
    }
  }

const myStyle = {
    position:"center",
    width:"100%",
    textAlign:"center",
    fontFamily:"Arial Black"
  };

export default App

