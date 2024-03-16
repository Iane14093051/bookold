var mongoose = require('mongoose');
const admin = require('firebase-admin');
var db = admin.database();

var user = this;

db.collection('Students')
	.doc()
	.add({
		roll: user.roll,
		name: user.name,
		department: user.department,
		mobile: user.mobile,
		mail: user.mail,
		book_name: user.book_name,
		author: user.author,
		edition: user.edition,
		price: user.price,
		image: user.image
	})
	.then(() => console.log('Document successfully written!'))
	.catch(error => console.error('Error writing document: ', error));

//var Schema = mongoose.Schema, _id = Schema.ObjectID;

//var adschema = new Schema({
//	roll: { type: Number, require: true},
//	name: { type : String, require: true},
//	department: { type : String, require: true},
//	mobile: { type :Number, require: true},
//	mail: { type : String, require: true},
//	book_name: { type : String, require: true},
//	author:{ type : String, require: true},
//	edition:{ type : String, require: true},
//	price:{ type : String, require: true},
//	image:{ type : String, require: true}
//});

//var ad = mongoose.model('ad', adschema);
//module.exports = {ad};
