import mongoose from "mongoose";


export const connectDB = async ()=>{
    try{
    const connect = await mongoose.connect(process.env.MONGO_URI); // @grunde1234 - You can also manage your env you dont have to call process.env['param'] through out the application

    console.log(connect.connection.host.cyan.underline)
    }catch(err){
    console.log(err.message);
    }
}