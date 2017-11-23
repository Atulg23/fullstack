 //node module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = require('mongodb').ObjectID;

/*Database Collection Schema*/
 var dealSchema = mongoose.Schema({

    fname : { type:String },
    lname: { type:String },
    address : { type:String },
    pincode : { type:Number }
  });

/*Instance of my collection*/
 var deal = mongoose.model('deal', dealSchema);

/*Method that fire's Database Queries*/
 module.exports={
	 //get all deals
	dealList : function(condition, fields, callback){
		if(!fields)
			fields = {};
		
	deal.find(condition, fields, callback);
	},

	// //update employee
	// employeeEdit : function(condition, data, callback){
	// 	employees.update(condition, data, callback);
	// },

	//save employee
	dealAdd : function(data, callback){
		console.log("Backedn data");
		console.log(data);
		new deal(data).save();
	},

	//delete employee
	dealDelete :function(data, callback){

		deal.remove({_id: new ObjectId(data.body._id)}, function(err, result) {
                if (err) {
                    console.log(err);
                } else {

                	console.log(result);

                	//callback(err,result)

                    //res.redirect("thelist");
                }
            });



	},
	schema : deal
}
