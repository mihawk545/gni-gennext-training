const express=require("express")
const MongoClient=require("mongoose")
const dotEnv=require("dotenv")
const bodyParser=require("body-parser")
const employeeRoutes=require("./routes/EmployeeRoutes")


const app=express();
dotEnv.config();
app.use(bodyParser.json());

const PORT=process.env.PORT||5566;

MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Atlas connected successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use("/employee",employeeRoutes);

app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`)
});