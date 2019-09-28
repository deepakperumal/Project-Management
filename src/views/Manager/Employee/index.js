import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

 

 

class Employee extends Component {


constructor(props)
{

     super(props)
     this.handleKeyUp = this.handleKeyUp.bind(this)
     this.handleChange = this.handleChange.bind(this)
     this.handleForm   = this.handleForm.bind(this)
     this.state = {
                   username:'',
                   email:'',
                   company:localStorage.getItem('id'),
                   password:'',
                   cpassword:'',
                   access:'',
                   result:[]
                  }
                   
            
}

componentDidMount()
{
   this.list()
}

list = ()=>{
   fetch('http://localhost:8000/users/0/'+localStorage.getItem('id')+'',{
      method:"GET",
      headers:{
         'content-type':'application/json'
 
      }
   }).then(response=>response.json()).then(result =>{
      this.setState({result:result})
   })
}

handleKeyUp  = (e) =>{
           console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})

}

handleChange  = (e) =>{
   
this.setState({[e.target.name]:e.target.value})

}

handleForm   = (e) =>{
        e.preventDefault()
        const form_data  = this.state
        console.log(this.state)
        if(!form_data.username.trim()||!form_data.email.trim()||!form_data.password.trim()||!form_data.cpassword.trim()||!form_data.access.trim())
        {
           toast('Please fill all the details')
           return
        }
        else if(form_data.password!=form_data.cpassword)
        {
           toast("Password did not match")
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
         if(result){
         toast('Client has been added')
         this.resetState()
         this.list()
         }
         else
         toast("Email already exist !!")
       })
        
}

resetState = () =>{
       const state = {
         username:'',
         email:'',
         password:'',
         cpassword:'',
         access:''
       }  
       this.setState(state)
       document.getElementById("entryform").reset();
       
    
}


 
  render() {
     const list = this.state.result
     console.log(list)
    return (
       
     <div className="container-fluid">
   <div className="animated fadeIn">
   <Form className="entryform" onSubmit={this.handleForm} id="entryform">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email"  placeholder="
              Enter the email address"  onKeyUp={this.handleKeyUp}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" placeholder="Password"  onKeyUp={this.handleKeyUp}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input type="text" name="username"  placeholder="Username"   onKeyUp={this.handleKeyUp}/>
            </FormGroup>
            <FormGroup>
          
                  <select name="access" className="form-control" onChange={this.handleChange}>
                        <option value="">Select Designation</option>
                        <option value="3">Project Manager</option>
                        <option value="4">Team Leader</option>
                        <option value="5">Employee</option>
                  </select>
            </FormGroup>

          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input type="password" name="cpassword"  placeholder="Confirm Password"   onKeyUp={this.handleKeyUp}/>
            </FormGroup>


          </Col>
        </Row>
 
 
        <Button outline  color="secondary">Submit</Button>

      </Form>
      <ToastContainer />
      <div className="row">
         <div className="col-xl-12">
            <div className="card">
               <div className="card-header">Employee List</div>
               <div className="card-body">
                  <div className="table-responsive">
                     <table className="table table-hover">
                        <thead>
                           <tr>
                              <th scope="col">id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Designation</th>
                              <th scope="col">Project</th>
                           </tr>
                        </thead>
                        <tbody>
                        {
                              list.map((item,key)=>{

                                 return(

                                              <tr  key={parseInt(key+1)}>
                                                <td scope="col">{parseInt(key+1)}</td>
                                                <td scope="col">{item.username}</td>
                                                <td scope="col">{item.email}</td>
                                                <td scope="col">Phone</td>
                                                <td >{item.access}</td>
                                                <td scope="col">Project</td>
                                             </tr>
                                    
                                 )



                              })


                           }
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

export default Employee;
