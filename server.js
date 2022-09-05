const http = require('http'); // proven design patter, lightweight smaller than using express
require("dotenv").config();

http.createServer().listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
}); 
