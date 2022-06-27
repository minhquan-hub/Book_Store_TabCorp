import express = require('express');
import dotenv = require('dotenv');
import mongoose = require('mongoose');
import cors = require('cors');
import morgan = require('morgan');
import bodyParser = require('body-parser');
import swaggerUI = require('swagger-ui-express');
import swaggerJsDoc = require('swagger-jsdoc')
import usersRouter = require('./BookStore/routes/UserRoute');

const userRoute = require('./BookStore/routes/UserRoute');


dotenv.config()
const port = process.env.PORT || 5002;
const app = express();

mongoose.connect(String(process.env.MONGODB_URL), {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
} as mongoose.ConnectOptions)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err: Error) => {
    console.log('Failed to connect to MongoDB', err);
})

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book Store TabScorp",
            version: "1.0.0",
            description: "Test API Book Store"
        },
        servers: [
            {
                url: "http://localhost:5001"
            }
        ],
        components: {
            securitySchemes: {
              bearerAuth: {
                type: "apiKey",
                name: "x-auth-token",
                scheme: "bearer",
                in: "header",
              },
            },
          },
          security: [
            {
              bearerAuth: [],
            },
          ],
    },
    apis: ["./BookStore/routes/*.ts"]
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));



app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

// Router
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});