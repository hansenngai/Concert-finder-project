import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Register from './Register'


export default class Login extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2"></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@email.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2"></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button>Login</Button>
        
        <Link to="/register"><Button>Register</Button></Link>
      
      </Form>


    );
  }
}
