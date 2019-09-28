import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 


class Project extends Component {
   constructor(prop)
   {
      super(prop)
      this.state={
         "name":"",
         "location":"",
         "progress":"",
         "client":"",
         "start_date":"",
         "end_date":"",
         "company":localStorage.getItem('id'),
         result:[]
          
  
      }

      this.handleChange  = this.handleChange.bind(this)//If your functions don't require access to the state of your component, then sure, you don't need to bind them.
      this.handleForm    = this.handleForm.bind(this)
      this.list          = this.list.bind(this)
   }
   
   handleChange = (e) =>{
      this.setState({[e.target.name]  : e.target.value})
   }

   componentDidMount() {    //Loads a function everytime a coponent is called
    this.list()
 }




 handleForm = (e) =>{
        
        e.preventDefault()
        
        var form_data =  this.state
      
        if(!form_data['name'].trim()||!form_data['location'].trim()||!form_data['progress'].trim()||!form_data['client'].trim()||!form_data['start_date'].trim()||!form_data['end_date'].trim())
        {
          toast(" Please fill all the  details")
          return
        }
        if(new Date(form_data['start_date']).getTime() > new Date(form_data['end_date']).getTime())
        {
           toast("Invalid Date")
           return false;
        }    
        fetch('http://localhost:8000/project', {
         method: "POST",
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(this.state)
       })
       .then((response) => response.json())
       .then((result) => {
          if(result){
          toast("Project has been created")
          this.resetState()
          this.list()
         }
          else
          toast("Something went wrong")
           
       })
 }

 resetState = ()=>{
  const initialState = {
    name: '', 
    location: '',
    progress: '',
    client:'',
    start_date:'',
    end_date:'',
   };
   
   this.setState(initialState);
   document.getElementById("entryform").reset();
   
 }

 list = ()=> {
     
  
   fetch('http://localhost:8000/project/'+localStorage.getItem('id')+'', {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },
       
    })
    .then((response) => response.json())
    .then((result) => {
       if(result){
        this.setState({'result':result})
       
      }
       
        
    })

   
 
 }
  render() {
       
        var result = this.state.result
    return (<div className="container-fluid">
        
        <div className="animated fadeIn">
        <Form onSubmit={this.handleForm} className="entryform" id="entryform">
             <Row form>
               <Col md={6}>
                 <FormGroup>
                   <Label for="Project Name">Project Name</Label>
                   <Input type="text" name="name"   placeholder="Name"  onChange ={this.handleChange}/>
                 </FormGroup>
               </Col>
               <Col md={6}>
                 <FormGroup>
                   <Label for="Client">Client</Label>
                   <Input type="client" name="client"  placeholder="Client Name" onChange ={this.handleChange} />
                 </FormGroup>
               </Col>
             </Row>
             <FormGroup>
               <Label for="exampleAddress">Location</Label>
               <Input type="text" name="location"  placeholder="1234 Main St" onChange ={this.handleChange}/>
             </FormGroup>
          
             <Row form>
               <Col md={3}>
                 <FormGroup>
                   <Label for="exampleCity">Progress</Label>
                   <Input type="text" name="progress" placeholder="Progress in %"  onChange ={this.handleChange}/>
                 </FormGroup>
               </Col>
               <Col md={2}>
                 <FormGroup>
                   <Label for="exampleState">Start Date</Label>
                   <Input type="date" name="start_date"  onChange ={this.handleChange}/>
                 </FormGroup>
               </Col>
               <Col md={2}>
                 <FormGroup>
                   <Label for="exampleZip">End Date</Label>
                   <Input type="date" name="end_date" onChange ={this.handleChange}/>
                 </FormGroup>  
               </Col>
             </Row>
       
             <Button outline  color="primary">Submit</Button>
             <ToastContainer />
           </Form><div><div className="row">
         <div className="col-xl-12">
            <div className="card">
               <div className="card-header"> Projects List  </div>
               <div className="card-body">
                  <div className="table-responsive">                     <table className="table table-hover">
                        <thead>
                           <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Location</th>
                              <th scope="col">Progress</th>
                              <th scope="col">Start Date</th>
                              <th scope="col">End Date</th>
                              <th scope="col">Client</th>
                              <th scope="col">Employee Assigned</th>
                           </tr>
                        </thead>
                        <tbody>
                          {
                            result.map((item,key)=>{
                           
                            return(
                              <tr key={key}>
                              <td>{parseInt(key+1)}</td>
                              <td>{item.name}</td>
                              <td>{item.location}</td>
                              <td>{item.progress+'%'}</td>
                              <td>{item.start_date}</td>
                              <td>{item.end_date}</td>
                              <td>{item.client}</td>
                              <td>employee</td></tr>
                            )
                            



                          })}
                        

                                                  
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
     </div>
   </div>
</div>);
  }
}

export default Project;
