const router = require('express').Router()
const employeeController = require('../controllers/employee')

router.post('/employee',employeeController.employeeEnrollment)

router.get('/empall',employeeController.getAllEmpData)

router.get('/empsalary',employeeController.empDataBySalary)

router.get('/empexp',employeeController.empDataByExp)

router.get('/empgrad',employeeController.dataByGrad)

router.put('/empsalary',employeeController.updateBySalary)

router.delete('/empdelete',employeeController.deleteEmployee)




module.exports = router