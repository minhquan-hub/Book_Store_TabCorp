const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(String(process.env.MONGODB_URL), () => {
    console.log("connect successful");
})

const seedUser = [{
        username: 'quantran',
        email: 'minhquan1@gmail.com',
        phone: '0924721184',
        password: 'quan123'
    },
    {
        username: 'quantran2',
        email: 'minhquan2@gmail.com',
        phone: '0924721184',
        password: 'quan123'
    }
]


const seedDB = async() => {
    await User.deleteMany({});
    await User.insertMany(seedUser)
}


seedDB().then(() => {
    mongoose.disconnect();
})