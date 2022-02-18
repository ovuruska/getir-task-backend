const {Task} = require("./model")

exports.listTasks = async () => await Task.find();
exports.renameTask = async ({
    id,
    name
}) => {
    const task = await Task.findOne({_id:id})
    task.name = name
    return await task.save()

}

exports.toggleTask = async ({
    id
}) => {
    const task = await Task.findOne({_id:id})
    task.finished = !task.finished
    return await task.save()
}

exports.createTask = async({
    name = ""
                           }) => {
    const task = new Task({
        name
    })
    return await task.save()
}

exports.removeTask = async({
    id
}) => {
    return await Task.find({_id:id}).deleteOne()
}