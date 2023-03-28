const dotEnv = require ('dotenv')
dotEnv.config()
const express = require('express');
const employeeRouter = require('./routes/employee')
const bodyparser = require('body-parser')
const Connect = require('./database/mongoose')
const app = express();


app.use(bodyparser.json());
app.use('/',employeeRouter)

app.listen(8000,async()=>{
    console.log('Server is running on port 8000');

    await Connect()
})