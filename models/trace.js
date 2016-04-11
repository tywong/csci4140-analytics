var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TraceSchema = new Schema({
	browserID: String,
	currentTime: Number,
	lastTime: Number,
	page:	String
});

if(process.env.MONGOLAB_URI) {
	mongoose.connect(process.env.MONGOLAB_URI);
}
else {
	console.log("No Mongo Server Setting!");
	process.exit(1);
}

module.exports = mongoose.model('Trace', TraceSchema);
