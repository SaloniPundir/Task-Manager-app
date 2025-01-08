import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
      name: {
        type: String,
        required : true,
        unique: true
      }
},{ timestamps: true});

export const Task = mongoose.model("Task",taskSchema);