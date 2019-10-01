import React, {Component} from 'react'
import Header from './components/layout/Header'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Table from './components/items/Table'
import Login from './components/pages/Login'
import Submission from './components/pages/Submission'
import Searchbar from './components/items/Searchbar';
import Results from './components/pages/Results';
import Register from './components/pages/Register';



class App extends Component {
    render() {
      return (
        <Router>
          <div className="container">
            <Header />     
             <Route exact path ="/" render={props => (
               <React.Fragment>
                 <p>home page</p>
                 <Searchbar/>
               </React.Fragment>
             )} />
             <Route path ="/login" component = {Login} />
             <Route path ="/submission" component = {Submission} />
             <Route path ="/results" component = {Results}/>
             <Route path ="/register" component = {Register}/>
          </div>
        </Router>
      )
    }
  }
export default App