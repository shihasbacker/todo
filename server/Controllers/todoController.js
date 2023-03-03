import todoSchema from '../Models/todoModel.js'

export const getTodos = async(req,res)=>{
    let userId = req.body.userId;
    let todos = await todoSchema.findById({userId:userId})
    if(todos){
        res.status(200).json({todos})
    } else{
        res.status(500).json({message:"no todos"})
    }
}

export const createTodo = async(req,res)=>{
    // let userId = req.body.userId;
    let text = req.body.text;
 //   const userData = await todoSchema.findById({userId:userId})
    // if(!userData){
    //     const newTodo = new todoSchema(req.body);
    //     await newTodo.save();
    // }
  //  else{
        await todoSchema.create(text)
    //}
    res.status(200).json({message:"successully created"})
}

export const deleteATodo = async(req,res)=>{
    let id = req.body.id;
    let textData = req.body.text;
    await todoSchema.updateOne({id:id},{$pull:{text:textData}})
}