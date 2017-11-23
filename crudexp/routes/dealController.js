var mongoose = require('mongoose');
var dealCollection = require('../model/dealModel.js');
var ObjectId = require('mongoose').Types.ObjectId


// /*******employee listing service method**************/
exports.dealListMethod =  function(req, res){
	
		dealCollection.dealList({}, {}, function(err, resultData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				res.send({'status' : 'success',  'data': resultData});

		}
		
	});
}

/*******employee Add service method**************/
exports.dealAddMethod = function(req, res){
	
		dealCollection.dealAdd(req.body, function(err, resultData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				
				res.send({'status' : 'success',  'data': resultData});	
		}
		
	});

}

// /*******employee Edit service method**************/
// exports.employeeEditMethod  =  function(req, res){
		
// 		var employee = {
// 					"_id" : ObjectId(req.body.employee._id),
// 					"name" : req.body.employee.name,
// 					"occupation" : req.body.employee.occupation,
// 					"gender":req.body.employee.gender,
// 					"age":req.body.employee.age
// 		}

// 		employeeCollection.employeeEdit({"_id": employee._id}, employee, function(err, resultData){
// 		if(err){
// 				res.send({'status' : 'Error',  'data': err});
// 		}
// 		else{
// 				res.send({'status' : 'success',  'data': resultData});	
// 		}
		
// 	});
// }

/*******employee delete service method**************/
// exports.dealDeleteMethod  =  function(req, res){
	
// 	dealCollection.dealDelete({'_id': ObjectId(req.params._id)},function(err, resultData){
// 		if(err){
// 				res.send({'status' : 'Error',  'data': err});
// 		}
// 		else{
// 				res.send({'status' : 'success',  'data': resultData});	
// 		}
		
// 	});
// }


	




	
