import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Login extends Component {

constructor(props)
{
  localStorage.clear();
  super(props);
  this.state={
    "email":"",
    "password":""
  }
this.handleChange = this.handleChange.bind(this)
this.handleForm   = this.handleForm.bind(this)
}

handleChange = (e) =>{
 this.setState({ [e.target.name]: e.target.value });
}

handleForm = (e) =>{
  e.preventDefault()
  fetch('http://localhost:8000/login', {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((response) => response.json())
.then((result) => {
  if(result){
 
  localStorage.setItem('id', result[0]['_id']);
  localStorage.setItem('access', result[0]['access']);
  if(parseInt(result[0]['access'])===1)
  localStorage.setItem('company', result[0]['_id']);
  else
  localStorage.setItem('company', result[0]['company']);

  this.props.history.push("./Dashboard/Dashboard.js");

}
else{
toast("Invalid username or password")
localStorage.clear();
}

})
  console.log(JSON.stringify(this.state))
}

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleForm}>Login</Button>
                          <ToastContainer />
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                     
                      <p>Not a member yet ?</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
