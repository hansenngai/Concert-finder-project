import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
/*
Hansen Ngai
Tyler Philips
4WW3
Assignment 1
*/



export default class Submission extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label> 
          <Input type="text" name="name" required="required" pattern="[a-zA-Z0-9]{1,25}" id="exampleName" placeholder="Name of establishment" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDescription">Description</Label>
          <Input type="textarea" style={myStyle} name="description" required="required" id="exampleDescription" pattern="[a-zA-Z0-9]{10,200}" placeholder="Enter a brief description" />
        </FormGroup>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleText">Longitude and Latitude </Label>
              <Input type="textarea" name="text" required="required" id="exampleText" pattern="[a-zA-Z0-9]{5,30}" style={myStyle} placeholder=" Longitude/Latitude" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" name="address" required="required" id="exampleAddress" pattern="\d\d\d\d\s[a-zA-Z0-9]{5,}" placeholder="1234 Main St"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip"  required="required" pattern="[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d"  id="exampleZip" placeholder="zip code"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload an image
          </FormText>
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}
const myStyle = {
    height:"40px"
  };

/* Input.propTypes = {
    children: PropTypes.node,
    // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
    type: PropTypes.string,
    size: PropTypes.string,
    bsSize: PropTypes.string,
    state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
    valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
    invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
    plaintext: PropTypes.bool,
    addon: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  
  CustomInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired, // radio, checkbox, select, range, switch, file.
    label: PropTypes.string, // used for checkbox and radios
    inline: PropTypes.bool,
    valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
    invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
    bsSize: PropTypes.string,
    cssModule: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]), // for type="select"
    // innerRef would be referenced to select node or input DOM node, depends on type property
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ])
  };
  
  Form.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  
  FormFeedback.propTypes = {
    children: PropTypes.node,
    // Pass in a Component to override default element
    tag: PropTypes.string, // default: 'div'
    className: PropTypes.string,
    cssModule: PropTypes.object,
    valid: PropTypes.bool, // default: undefined
    tooltip: PropTypes.bool
  };
  
  FormGroup.propTypes = {
    children: PropTypes.node,
    // Applied the row class when true, does nothing when false
    row: PropTypes.bool,
    // Applied the form-check class when true, form-group when false
    check: PropTypes.bool,
    inline: PropTypes.bool,
    // Applied the disabled class when the check and disabled props are true, does nothing when false
    disabled: PropTypes.bool,
    // Pass in a Component to override default element
    tag: PropTypes.string, // default: 'div'
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  
  FormText.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
    color: PropTypes.string, // default: 'muted'
    className: PropTypes.string,
    cssModule: PropTypes.object,
  }; */