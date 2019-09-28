const login  = require('../models/user.model.js');
const bcrypt =  require('bcrypt')

exports.find = (req,res)=>{

      

       login.find({'email':req.body.email},'password company access',(err,data)=>{

              if(data.length==0)
              res.send('0')
              else if(bcrypt.compareSync(req.body.password, data[0]['password'])) {
                res.send(data)
               } else {
                res.send('0')
               }
 

       })


}