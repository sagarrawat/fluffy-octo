'use strict';
module.exports = {
    adduser: async (req, res)=>{
        const {username, firstname, lastname, profilepic, email, mobileno,nationality, age}=req.body;   
        req.models.users.create({
                username: username,
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
    }
}