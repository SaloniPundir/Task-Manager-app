import { Task } from "../models/task.js";

//add a task
export const addTask = async(req,res) => {
    try{
        const {name} = req.body;

        const newTask = new Task({
            name
        });
        await newTask.save();
        return res.status(201).json({message:"Task Added"});

    }catch(error){
        return res.status(500).json({ message: "Error adding a task", error });
    }
};

//delete a task
export const deleteTask = async(req,res) =>{
    try{
        const {name} = req.body;
        if (!name) {
            return res.status(400).json({ success: false, message: 'Task name is required' });
        }

        // find and delete the task by name
        const deletedTask = await Task.findOneAndDelete({ name });

        if (!deletedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        return res.status(200).json({ success: true, message: 'Task deleted successfully', task: deletedTask });

    }catch(error){
        return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

//edit a task
export const editTask = async(req,res) => {
    try{
        const { currentName, newName } = req.body;

        if (!currentName || !newName) {
            return res.status(400).json({ success: false, message: 'Both currentName and newName are required' });
        }
        // find and update the task by name
        const updatedTask = await Task.findOneAndUpdate(
            { name: currentName }, 
            { name: newName }, 
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        return res.status(200).json({ success: true, message: 'Task updated successfully', task: updatedTask });

    }catch(error){
        return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}
