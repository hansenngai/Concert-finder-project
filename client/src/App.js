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
import axios from 'axios';


class App extends Component {

  state = {
    data: null
  };

  componentDidMount = () => {
    // Make sure to change the (localhost) on the line bellow 
    // to the public DNS of your EC2 instance
    axios.get(`ec2-54-145-126-177.compute-1.amazonaws.com`)
    .then(res => {
      const dataFromServer = res.data;
      this.setState({ data: dataFromServer });
    });

    //trying to connect to express
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }


  //function for connecting to express
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


    render() {
      return (
        <Router>
          <div className="container">
          <p className="App-intro" style={{fontSize: 8}}>{this.state.data}</p> 
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
             <Route path ="/objectpage" component = {ObjectPage}/>
              
             <Footer/>

          </div>

          
        </Router>
      )
    }
  }
export default App