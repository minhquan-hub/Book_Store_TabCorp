import mongoose = require('mongoose');

export interface IUser {
    username: string,
    email: string,
    phone: string,
}

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        require: true,
        minlength:6,
        maxlength:50,
        unique:true
    },
    email: {
        type: String,
        require: true,
        minlength: 6,
        unique:true
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 13
    }
}, {timestamps:true})

// const User: mongoose.Model<IUser> = mongoose.model<IUser>('user', userSchema);

module.exports =  mongoose.model<IUser>('user', userSchema);