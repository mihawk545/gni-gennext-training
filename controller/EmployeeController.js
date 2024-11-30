const Employee=require("../models/Employee")

//POST method or insertion method
const createEmployee=async(request,response)=>{
    try{
      const{empId,empName,empAddress}=request.body
      
      const employee=new Employee({
        empId,
        empName,
        empAddress
      });
      await employee.save();
      response.status(201).json({msg:"Employee fields inserted successfully"})
    }
    catch(Error)
    {
        console.log(Error);
        response.status(500).json({msg:"server error"})
    }
}

//READ method or fetch method
const getEmployees=async(request,response)=>{
  try{
    const employee=await Employee.find();
    response.status(201).json(employee);
  }
  catch(Error)
  {
    console.log(Error);
    response.status(500).json({msg:"Server Error check once"})
  }
}


//Get method or fetch method
const getEmployee=async(request,response)=>{
  try{
      const employee=await Employee.findById(request.params.id);
      if(!employee){
        return response.status(404).json({message:"Employee Record not exist"})
      }
      response.status(201).json(employee);
  }
  catch(Error){
    console.log(Error);
    response.status(500).json({message:"Server issue find !pls check once"})
  }
}

const deleteEmployee=async(request,response)=>{
  try{
          const employee=await Employee.findByIdAndDelete(request.params.id);
          if(!employee)
          {
            response.status(404).json({message:"Record is not exist"})
          }
          response.status(201).json(employee);
  }
  catch(Error){
    console.log(Error);
    response.status(501).json({message:"Server related issue"})
  }
}

module.exports={
    createEmployee, getEmployees, getEmployee, deleteEmployee
}