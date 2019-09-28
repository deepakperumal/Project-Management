import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'

 

 

class Colors extends Component {
  render() {
    return (
       
     <div className="container-fluid">
   <div className="animated fadeIn">
   <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
      <div className="row">
         <div className="col-xl-6">
            <div className="card">
               <div className="card-header"><i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small></div>
               <div className="card-body">
                  <div className="table-responsive">
                     <table className="table table-hover">
                        <thead>
                           <tr>
                              <th scope="col">id</th>
                              <th scope="col">name</th>
                              <th scope="col">registered</th>
                              <th scope="col">role</th>
                              <th scope="col">status</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row"><a href="#/users/0">0</a></th>
                              <td><a href="#/users/0">John Doe</a></td>
                              <td>2018/01/01</td>
                              <td>Guest</td>
                              <td><a href="#/users/0"><span className="badge badge-warning">Pending</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/1">1</a></th>
                              <td><a href="#/users/1">Samppa Nori</a></td>
                              <td>2018/01/01</td>
                              <td>Member</td>
                              <td><a href="#/users/1"><span className="badge badge-success">Active</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/2">2</a></th>
                              <td><a href="#/users/2">Estavan Lykos</a></td>
                              <td>2018/02/01</td>
                              <td>Staff</td>
                              <td><a href="#/users/2"><span className="badge badge-danger">Banned</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/3">3</a></th>
                              <td><a href="#/users/3">Chetan Mohamed</a></td>
                              <td>2018/02/01</td>
                              <td>Admin</td>
                              <td><a href="#/users/3"><span className="badge badge-secondary">Inactive</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/4">4</a></th>
                              <td><a href="#/users/4">Derick Maximinus</a></td>
                              <td>2018/03/01</td>
                              <td>Member</td>
                              <td><a href="#/users/4"><span className="badge badge-warning">Pending</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/5">5</a></th>
                              <td><a href="#/users/5">Friderik Dávid</a></td>
                              <td>2018/01/21</td>
                              <td>Staff</td>
                              <td><a href="#/users/5"><span className="badge badge-success">Active</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/6">6</a></th>
                              <td><a href="#/users/6">Yiorgos Avraamu</a></td>
                              <td>2018/01/01</td>
                              <td>Member</td>
                              <td><a href="#/users/6"><span className="badge badge-success">Active</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/7">7</a></th>
                              <td><a href="#/users/7">Avram Tarasios</a></td>
                              <td>2018/02/01</td>
                              <td>Staff</td>
                              <td><a href="#/users/7"><span className="badge badge-danger">Banned</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/8">8</a></th>
                              <td><a href="#/users/8">Quintin Ed</a></td>
                              <td>2018/02/01</td>
                              <td>Admin</td>
                              <td><a href="#/users/8"><span className="badge badge-secondary">Inactive</span></a></td>
                           </tr>
                           <tr>
                              <th scope="row"><a href="#/users/9">9</a></th>
                              <td><a href="#/users/9">Enéas Kwadwo</a></td>
                              <td>2018/03/01</td>
                              <td>Member</td>
                              <td><a href="#/users/9"><span className="badge badge-warning">Pending</span></a></td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>);
  }
}

export default Colors;
