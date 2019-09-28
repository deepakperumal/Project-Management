import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Register extends Component {

constructor(props)
{
  super(props)
  this.state = {
    username: '',
    email: '',
    company: '',
    password: '',
    access: '1',
    cpassword: '',
    redirect: false
  }
this.handleChange = this.handleChange.bind(this)
this.handleForm   = this.handleForm.bind(this)
  
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
  
  
}

handleForm = (e) =>{
  e.preventDefault()
  console.log(JSON.stringify(this.state))
  var form_data =  this.state
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(!form_data['username'].trim()||!form_data['email'].trim()||!form_data['company'].trim()||!form_data['password'].trim()||!form_data['cpassword'].trim())
  {
    toast(" Please fill all the  details")
    return
  }
  else if(form_data['password']!=form_data['cpassword'])
  {
    toast("Password did not match")
    return
  }
  else if(!reg.test(form_data['email']))
  {
    toast("Invalid email address")
    return
  }

  fetch('http://localhost:8000/registration', {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((response) => response.json())
.then((result) => {
  if(result)
  this.setState({ redirect: true })
  else
  toast("Email already exist !!")
})
 
}
  render() {
    const { redirect } = this.state;
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" name="username"  onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" name="email"  onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-building "></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Company Name" name="company"  onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" name="cpassword" onChange={this.handleChange} />
                    </InputGroup>
                    <Button color="success" block onClick={this.handleForm}>Create Account</Button>
                    <ToastContainer />
                  </Form>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
