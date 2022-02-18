const mongoose = require( "mongoose" );
const {Schema} = mongoose;


const taskSchema = new Schema({
  finished: {type: Boolean, default: false},
  name: {type: String, required: true},
});

exports.Task = mongoose.model("Task", taskSchema);


