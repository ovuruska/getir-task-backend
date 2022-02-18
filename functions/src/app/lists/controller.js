const repository = require("./repository")

exports.getTasks = async (req,res) => {
    try {
        const tasks = await repository.listTasks();
        return res.json({
            success:true,
            payload:tasks
        })

    } catch ( err ) {
        return res.json({
            success:false,
            payload:err
        })
    }
}

exports.renameTask = async (req, res) => {
    try {
        const {name,id} = req.body
        const task = await repository.renameTask({id,name});
        return res.json({
            success:true,
            payload:task
        })

    } catch ( err ) {
        return res.json({
            success:false,
            payload:err
        })
    }
}

exports.toggleTask = async (req,res) => {
    try {
        const {id} = req.body
        const task = await repository.toggleTask({id});
        return res.json({
            success:true,
            payload:task
        })

    } catch ( err ) {
        return res.json({
            success:false,
            payload:err
        })
    }
}

exports.createTask = async (req,res) =>  {
    try {
        const {name} = req.body
        const task = await repository.createTask({name});
        return res.json({
            success:true,
            payload:task
        })

    } catch ( err ) {
        return res.json({
            success:false,
            payload:err
        })
    }
}

exports.removeTask = async (req,res) => {
    try {
        const {id} = req.body
        const result = await repository.removeTask({id});
        return res.json({
            success:true,
            payload:result
        })

    } catch ( err ) {
        return res.json({
            success:false,
            payload:err
        })
    }
}