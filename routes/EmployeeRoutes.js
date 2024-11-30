const express=require("express")
const employeeController=require("../controller/EmployeeController")
const router=express.Router();

router.post("/createEmployee",employeeController.createEmployee);
router.get("/getEmployees",employeeController.getEmployees);
router.get("/getEmployee/:id",employeeController.getEmployee);
router.delete("/deleteEmployee/:id",employeeController.deleteEmployee);

module.exports=router;