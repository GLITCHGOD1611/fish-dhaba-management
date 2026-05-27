const User = require('../model/User');

exports.getAllusers = async (req , res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};
exports.getUserById = async (req , res)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.createUser = async (req , res)=>{
    try{
        const { name , email , password , phone , role , isActive} = req.body;
        const newUser = await User.create({ 
            name , email , password , phone , role , isActive });
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.updateUser = async (req,res)=>
{
    try{
        const { id } = req.params;
        const { name , email , password , phone , role , isActive} = req.body;
        const updatedUser = await User.findByIdAndUpdate(id , { name , email , password , phone , role , isActive });
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.deleteUser = async (req , res)=>{
    try{
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}
