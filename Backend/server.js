const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');
const bookRoute = require('./routes/BookRoute');

dotenv.config();
const port = process.env.PORT || 5002;
const app = express();

const uri = process.env.MONGODB_URL;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err)
    });

// Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Store TabScorp',
            version: '1.0.0',
            description: 'Check API Book Store',
        },
        servers: [{
            url: 'http://localhost:5001',
        }, ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'apiKey',
                    name: 'x-auth-token',
                    scheme: 'bearer',
                    in: 'header',
                },
            },
        },
        security: [{
            bearerAuth: [],
        }, ],
    },
    apis: ['./routes/*.js'],
}

const specs = swaggerJsDoc(options);

app.use('/check-api', swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

// Router
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/book', bookRoute);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})