const project = require('../models/project.model.js')


exports.createProject=create=(req,res)=>{

    var new_project =  new project({

        name: req.body.name,
        location: req.body.location,
        progress:req.body.progress,
        client:req.body.client,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        company:req.body.company


    })

     new_project.save().then(data =>{res.send("1")}).catch(err => {
         res.send("0")
     })


}

exports.listProject = (req,res)=>{
     
    project.find({'company':req.params.company},(err,data)=>{
              if(data)
              res.send(data)
              else
              res.send('0')
    })

}

 
 