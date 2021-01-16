const bcrypt=require('bcrypt');
const saltRounds = 10;

'use strict';
module.exports = {
    adduser: async (req, res)=>{
        const {username, password, firstname, lastname, profilepic, email, mobileno,nationality, age}=req.body;   
        const hash=await bcrypt.hash(password, saltRounds);
        console.log(hash);
        req.models.users.create({
                username: username,
                password: hash,
                firstname: firstname,
                lastname: lastname,
                profilepicture:profilepic,
                email: email,
                mobileno: mobileno,
                nationality: nationality,
                age: age
             }).then(function (users) {
               if (users) {
                  res.send("record inserted succesfully");
            } else {
                  res.status(400).send('Error in insert new record');
            }
        })
    },

    getuser: async(req, res)=>{
            let uid= req.params.userid;
            console.log(uid);
            req.models.users.findAll({where: {
                id: uid
              }}).then(function (data) {
                if (data) 
                   res.send(data);
            else 
                res.status(400).send('Error');
        })
    },

    updateuser: async(req, res)=>{
        const {username, firstname, lastname, email, mobileno,nationality, age}=req.body; 
        let uid= req.params.userid;
        req.models.users.update(
            {
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                mobileno: mobileno,
                nationality: nationality,
                age: age
             },
            { where: {
            id: uid
          }}).then(function (data) {
            if (data) 
               res.send(data);
        else 
            res.status(400).send('Error');
    })
    },

    deleteuser: async(req, res)=>{
        let uid= req.params.userid;
        req.models.users.destroy({
            where: {
                id: uid
            }
          }).then(function (data) {
            if (data) 
               res.send("sucessfully deleted");
        else 
            res.status(400).send('Error');
    })
    },

    userlisting: async(req, res)=>{
        let sortBy=req.query.sortBy;
        let order=req.query.order;
        // let str=req.query.search;
        let nationality=req.query.nationality;
        let minAge=req.query.minAge;
        let maxAge=req.query.maxAge;

        if(order=='asc') {
        let data=req.models.users.findAll({
            
            $and: [ {
                    age: { 
                    $lt: minAge 
                    }
            },
            {
                age: {
                    $gt: maxAge
                }
            },
                {
                    nationality:{
                    $eq: nationality 
                    }
                }   
              ],
              order: [
                  [sortBy,'ASC']
              ]
        }).then(function (data) {
            if (data){ 
            res.send(data);
            }
        else 
            res.status(400).send('Error');
        });  
    }
    if(order=='desc') {
        let data=req.models.users.findAll({
            $and: [ {
                    age: { 
                    $lt: minAge 
                    }
            },
            {
                age: {
                    $gt: maxAge
                }
            },
                {
                    nationality:{
                    $eq: nationality 
                    }
                }   
              ],
              order: [
                  [sortBy,'DESC']
              ]
        }).then(function (data) {
            if (data){ 
            res.send(data);
            }
        else 
            res.status(400).send('Error');
        });  
 
    }

    }
}