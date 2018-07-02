// A script to read from a collection of stores in the local database
conn = new Mongo();

//connect to the local database
db = conn.getDB("projects");

var result = db.projects.aggregate([{$match: {"start_date": "2017-01-01"}},{$unwind: "$members"}]);
while (result.hasNext()) {
	printjson(result.next());
}

var result = db.projects.aggregate([
	{$project: {		
		project_num:1,
		pname: 1,
		start_date:1,
		members: 1
	}},
	{ $match: {"start_date": {$gte: "2017-2-20", $lt: "2018-02-20"}}},	
	{ $sort: {"pname": -1}},
	{ $limit:20}
]);
while ( result.hasNext() ) {
   printjson( result.next() );
}

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2017-03-04"}, {$addToSet:{members: {email: "jim@gmail.com", mname: "Jim", age: 25, gender: "M"}}});

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2017-03-05"}, {$addToSet:{members: {email: "jim2@gmail.com", mname: "Jim", age: 28, gender: "M"}}});

print("add one task to jim and print the project information:");
db.projects.updateMany ({start_date: "2017-03-04", members:{$elemMatch: {mname: "Jim"}}},
	{$addToSet:{"members.$.task": {tname: "task5",content: "that is hafd", due_date: new Date(2/3/2018)}}});

var result = db.projects.find ({start_date: "2017-03-04"}).sort({pname: -1}).limit(5);
while (result.hasNext()) {
	printjson(result.next().members);
}

print("get project that start_date between 2017-2-20 to 2018-02-20 and contain member's age is 20-30:");
var result = db.projects.find({start_date: {$gte: "2017-2-20", $lt: "2018-02-20"}, 
	"members.age": {$gte: 20, $lt:30}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

var result = db.projects.aggregate([{$match: {"start_date": "2017-11-01"}},{$unwind: "$members"}]);
while (result.hasNext()) {
	printjson(result.next());
}

var result = db.projects.aggregate([{
	$project: {		
		project_num:1,
		pname: 1,
		start_date:1,
		members: 1
	}},
	{ $match: {"start_date": {$gte: "2017-01-01", $lt: "2018-01-01"}}},
	{ $sort: {pname: -1}},
	{ $limit:20}
]);
while ( result.hasNext() ) {
   printjson( result.next() );
}

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2017-11-05"}, {$addToSet:{members: {email: "jimmy@gmail.com", mname: "Jimmy", age: 25, gender: "M"}}});

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2017-12-05"}, {$addToSet:{members: {email: "jimmmydd@gmail.com", mname: "Jimddd", age: 28, gender: "M"}}});

print("add one task to jimmy and print the project information:");
db.projects.updateMany ({start_date: "2017-11-05", members:{$elemMatch: {mname: "Jimmy"}}},
	{$addToSet:{"members.$.task": {tname: "task5",content: "that is hello world", due_date: new Date(12/13/2018)}}});

var result = db.projects.find ({start_date: "2017-11-05"}).sort({pname: -1}).limit(5);
while (result.hasNext()) {
	printjson(result.next().members);
}

print("get project that start_date between 2018-01-20 to 2018-10-20 and contain member's age is 27-36:");
var result = db.projects.find({start_date: {$gte: "2018-01-20", $lt: "2018-10-20"}, 
	"members.age": {$gte: 27, $lt:36}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

var result = db.projects.aggregate([{$match: {"start_date": "2018-05-01"}},{$unwind: "$members"}]);
while (result.hasNext()) {
	printjson(result.next());
}

var result = db.projects.aggregate([{
	$project: {		
		project_num:1,
		pname: 1,
		start_date:1,
		members: 1
	}},
	{ $match: {"start_date": {$gte: "2018-06-20", $lt: "2018-12-20"}}},
	{ $sort: {pname: -1}},
	{ $limit:20}
]);
while ( result.hasNext() ) {
   printjson( result.next() );
}

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2018-01-04"}, {$addToSet:{members: {email: "sunny@gmail.com", mname: "Sunny", age: 25, gender: "F"}}});

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2018-03-05"}, {$addToSet:{members: {email: "kinny@gmail.com", mname: "Kinny", age: 28, gender: "F"}}});

print("add one task to jim and print the project information:");
db.projects.updateMany ({start_date: "2018-01-04", members:{$elemMatch: {mname: "Sunny"}}},
	{$addToSet:{"members.$.task": {tname: "task_new",content: "that is hafd", due_date: new Date(3/5/2018)}}});

var result = db.projects.find ({start_date: "2018-01-04"}).sort({pname: -1}).limit(5);
while (result.hasNext()) {
	printjson(result.next().members);
}

print("get project that start_date between 2017-01-05 to 2017-12-20 and contain member's age is 40-46:");
var result = db.projects.find({start_date: {$gte: "2017-01-05", $lt: "2017-12-20"}, 
	"members.age": {$gte: 40, $lt:46}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

var result = db.projects.aggregate([{$match: {"start_date": "2018-05-15"}},{$unwind: "$members"}]);
while (result.hasNext()) {
	printjson(result.next());
}

var result = db.projects.aggregate([{
	$project: {		
		project_num:1,
		pname: 1,
		start_date:1,
		members: 1
	}},
	{ $match: {"start_date": {$gte: "2017-12-25", $lt: "2018-12-25"}}},
	{ $sort: {pname: -1}},
	{ $limit:20}
]);
while ( result.hasNext() ) {
   printjson( result.next() );
}

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2018-09-04"}, {$addToSet:{members: {email: "tonny@gmail.com", mname: "Tonny", age: 34, gender: "M"}}});

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2017-12-05"}, {$addToSet:{members: {email: "stephoine@gmail.com", mname: "stephoine", age: 28, gender: "M"}}});

print("add one task to tonny and print the project information:");
db.projects.updateMany ({start_date: "2018-09-04", members:{$elemMatch: {mname: "Tonny"}}},
	{$addToSet:{"members.$.task": {tname: "task223",content: "that is hafd", due_date: new Date(2/3/2018)}}});

var result = db.projects.find ({start_date: "2018-09-04"}).sort({pname: -1}).limit(5);
while (result.hasNext()) {
	printjson(result.next().members);
}

print("get project that start_date between 2018-05-20 to 2018-12-20 and contain member's age is 35-40:");
var result = db.projects.find({start_date: {$gte: "2018-05-20", $lt: "2018-12-20"}, 
	"members.age": {$gte: 35, $lt:40}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

var result = db.projects.aggregate([{$match: {"start_date": "2018-12-01"}},{$unwind: "$members"}]);
while (result.hasNext()) {
	printjson(result.next());
}

var result = db.projects.aggregate([{
	$project: {		
		project_num:1,
		pname: 1,
		start_date:1,
		members: 1
	}},
	{ $match: {"start_date": {$gte: "2018-07-20", $lt: "2018-12-20"}}},
	{ $sort: {pname: -1}},
	{ $limit:20}
]);
while ( result.hasNext() ) {
   printjson( result.next() );
}

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2018-12-22"}, {$addToSet:{members: {email: "wang@gmail.com", mname: "Wang", age: 25, gender: "M"}}});

print("add one member to the project and print all the members' name int the project:");
db.projects.updateMany ({start_date: "2017-12-05"}, {$addToSet:{members: {email: "jim2@gmail.com", mname: "Jim", age: 29, gender: "M"}}});

print("add one task to jim and print the project information:");
db.projects.updateMany ({start_date: "2018-12-22", members:{$elemMatch: {mname: "Wang"}}},
	{$addToSet:{"members.$.task": {tname: "task5dfdfd",content: "that is hafd", due_date: new Date(2/3/2018)}}});

var result = db.projects.find ({start_date: "2018-12-22"}).sort({pname: -1}).limit(5);
while (result.hasNext()) {
	printjson(result.next().members);
}

print("get project that start_date between 2017-12-20 to 2018-05-25 and contain member's age is 34-40:");
var result = db.projects.find({start_date: {$gte: "2017-12-20", $lt: "2018-05-25"}, 
	"members.age": {$gte: 34, $lt:40}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}


