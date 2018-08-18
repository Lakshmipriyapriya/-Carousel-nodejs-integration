var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var Images=new Schema({
	images:{ 
	name: String,
    size: String,
    type: String,
    data: {
        type: Buffer,
        required: true
    }
  }
  });
module.exports=mongoose.model('Images',Images);