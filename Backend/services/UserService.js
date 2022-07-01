const bcrypt = require('bcrypt')

const User = require('../models/User');

// const UserService = {
//     addUser: (UserDto) => {
//         const salt = await bcrypt.genSalt(10);
//         const hashed = await bcrypt.hash(req.body.password, salt);
//         const user = await newUser.save();

//     }
// }

class UserService {
    async createUser(userCreateDto) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(userCreateDto.password, salt);

        const newUser = new User({
            email: userCreateDto.email,
            password: hashed,
            role: userCreateDto.role,
            phone: userCreateDto.phone,
        });

        const user = await newUser.save();
        return user;
    }
}

module.exports = new UserService();