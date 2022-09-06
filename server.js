const http = require('http'); // proven design patter, lightweight smaller than using express
const app = require('./app/app');
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});

