// const { request } = require('express');
// const express = require('express');
// const router = require('../router/router');
// const app = express();

// // request listener will take care of
// // middleware
// app.use(express.json());

// // default service call (actuator)
// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Service is Up',
//     });
// });

// // cors
// // localhost:3000/
// app.use('/example', router);

// module.exports = app;


const express = require('express');
const router = require('../router/router');
const app = express();

// middleware -  request listener takes care of our middleware
// parse our json
app.use(express.json()); // info from request comes into the json so that we can read it in our code

// default SERVICE call (kinda like an actuator)
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Service is Up',
    });
});

// cors = Cross Origin Resource Sharing
// localhost:3000/ this for example will appear in ("/")
// or 
// localhost:3000/example will appear as ("/example")
app.use("/example", router);

// middleware to handle errors and bad urls
app.use((req, res, next) => {
    const error = new Error("Not Found"); // error is a class and we pass in an error
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;


