import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


// <<<<<<< HEAD:client/src/components/pages/Register.js


  function validate(){
           if( document.regForm.name.value == "" ) {
              alert( "Please Enter your name" );
              document.regForm.name.focus() ;
              return false;
           }
           if( document.regForm.email.value == "" ) {
              alert( "Please Enter your Email" );
              document.regForm.email.focus() ;
              return false;
           }
           if( document.regForm.password.value == "" ) {
              alert( "Please Enter a valid password" );
              document.regForm.email.focus() ;
              return false;
           }
           if( document.regForm.address.value == "-1" ) {
              alert( "Please enter address" );
              return false;
           }
           if( document.regForm.city.value == "-1" ) {
              alert( "Please enter City" );
              return false;
           }
           if( document.regForm.state.value == "-1" ) {
              alert( "Please enter State/Province" );
              return false;
           }
           if( document.regForm.zip.value == "" || isNaN( document.regForm.zip.value ) ||
              document.regForm.zip.value.length != 6 ) {
              
              alert( "Please enter a postal code in the format" );
              document.regForm.zip.focus() ;
              return false;
           }
           
           return( true );
  }


/*This page is used to collect infomraiton from the user to make an account */
// >>>>>>> c8234c8806c7328828fa35a7e6e658f5f3a7f8ba:src/components/pages/Register.js
export default class Register extends React.Component {

  
  render() {
    return (
      <Form action = "Register.js" name = "regForm" onsubmit = "return(validate());">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter email address" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" pattern="(?=.*\d)(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}" id="examplePassword" placeholder="Enter password ( At least length of 10 and include 3 numbers)" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="Enter Address"/>
        </FormGroup>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" placeholder="Enter City"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" placeholder="Enter State or Province"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip"  pattern="[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d"  id="exampleZip" placeholder="Zip code" />
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Confirm Signup</Label>
        </FormGroup>
        <Button>Register</Button>
      </Form>
    );
  }
}