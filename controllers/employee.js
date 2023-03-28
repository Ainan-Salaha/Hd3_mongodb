const { Data } = require('../models/employee')

const employeeEnrollment = async (req, res) => {
    const empData = req.body
    try {
        const result = new Data({
            firstName: empData.String,
            lastName: empData.String,
            salary: empData.String,
            department: empData.String,
            lastCompany: empData.String,
            lastSalary: empData.String,
            overallExp: empData.String,
            contactInfo: empData.String,
            yearGrad: empData.String,
            gradStream: empData.String
        });
        const dbResponse = await result.save();
        return res.status(200).send({ message: "student info is saved->" })
    }
    catch (err) {
        console.log(err.message);
        res.send('Error in student enrollement')
    }

}

const getAllEmpData = async (req, res) => {
    try {
        const result = await Data.find()
        res.send(result)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong in whlie calling find db Operation')
    }
}

const empDataBySalary = async (req, res) => {
    try {
        const result = await Data.find({ salary: { $gt: '30000' } })
        res.send(result)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const empDataByExp = async (req, res) => {
    try {
        const result = await Data.find({ 'overallExp': { $gt: '1' } })
        res.send(result)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const dataByGrad = async (req, res) => {
    try {
        const result = await Data.find({ $and: [{ 'yearGrad': { $gt: 2015 } }, { 'overallExp': { $gt: '1' } }] })
        res.send(result)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const updateBySalary = async (req, res) => {
    try {
        const result = await Data.updateOne({ department: 'HR' }, { $set: { salary: '65000' } })
        res.send(result)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const result = await Data.deleteMany({ lastCompany: 'Y' })
        res.send(result)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}


module.exports = {
    employeeEnrollment,
    getAllEmpData, empDataBySalary, empDataByExp,
    dataByGrad, updateBySalary, deleteEmployee
}