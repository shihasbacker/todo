import todoSchema from '../Models/todoModel.js'

export const getTodos = async(req,res)=>{
    let user = req.body.userId;
    let todos = await todoSchema.find({userId:userId})
    if(todos){
        res.status(200).json({todos})
    } else{
        res.status(500).json({message:"no todos"})
    }
}

export const createTodo = async(req,res)=>{
    let user = req.body.userId;
    let textData = req.body.text;
    const userData = await todoSchema.findOne({userId:req.body.userId})
    if(!userData){
        const newTodo = new todoSchema(req.body);
        await newTodo.save();
    }
    else{
        await todoSchema.updateOne({userId:user},{$push:{text:req.body.text}})
    }
}

export const deleteATodo = (req,res)=>{
    
}