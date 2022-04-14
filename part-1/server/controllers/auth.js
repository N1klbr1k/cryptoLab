const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      console.log(users)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        //console.log(users[i]);
        //--creates a bool
        let passCheck =  bcrypt.compareSync(password, users[i].passHash)
        console.log(passCheck);

        if (users[i].username === username && passCheck){
         console.log('it worked')
          let result = {...users[i]}

          delete result.passHash

          return res.status(200).send(result)
         
         
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      let {username, password, email, firstName, lastName} = req.body;

        const salt = bcrypt.genSaltSync(5);
        const passHash = bcrypt.hashSync(password, salt)


        console.log('Registering User')
        console.log(req.body)
        let userNPassHash = {
          passHash,
          username,
          email,
          firstName,
          lastName
        }
        users.push(userNPassHash);
       // console.log(users)
        res.status(200).send(req.body)
    }
}