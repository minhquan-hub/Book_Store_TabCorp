import express = require('express')
import bcrypt = require('bcrypt')

const User = require('../../BookStore.DataAccessor/models/User')

// export const userController = {
//     // register
//     addUser: async (req:  express.Request, res: express.Response): Promise<void> => {
//         try {
//             const salt = await bcrypt.genSalt(10)
//             const hashed = bcrypt.hash(req.body.password, salt)
//             // create user
//             const newUser = new User({
//                 username: req.body.username,
//                 phone: req.body.phone,
//                 email: req.body.email,
//                 password: hashed
//             })
//             // save
//             const user = await newUser.save()
//             res.status(200).json(user)

//         } catch (err) {
//             res.status(500).json("err")
//         }
//     }
// }
module.exports =  class UserController {
    constructor() {}
  public async addUser(req: express.Request, res: express.Response) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashed = bcrypt.hash(req.body.password, salt)
      // create user
      const newUser = new User({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: hashed,
      })
      // save
      const user = await newUser.save()
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json('err')
    }
  }
}




