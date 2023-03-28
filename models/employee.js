const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:String ,
    department:String,
    lastCompany:String,
    lastSalary: String,
    overallExp:String,
    contactInfo: String,
    yearGrad:String,
    gradStream:String

});

const Data = mongoose.model('employee',employeeSchema)

module.exports = {Data}