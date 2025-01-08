import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/taskdatabase');
        console.log("Successfully! Connected to mongodb");

    }
    catch(error){
        console.log("Failed while connection ",error);
    }
}

export default connectDB;