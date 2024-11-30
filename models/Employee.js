const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema({
    empName:{
        type:String,
        required:true
    },
    empId:{
        type:Number,
        required:true
    },
    empAddress:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Employee",employeeSchema);