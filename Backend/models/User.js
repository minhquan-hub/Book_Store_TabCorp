const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        minlength: 6,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 13
    }
}, { timestamps: true })

// const User: mongoose.Model<IUser> = mongoose.model<IUser>('user', userSchema);

module.exports = mongoose.model('user', userSchema);