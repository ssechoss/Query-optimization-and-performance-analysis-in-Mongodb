
// A script to read from a collection of stores in the local database
conn = new Mongo();

//connect to the local database
db = conn.getDB("projects");

print("get projects that start_date is 2017-06-03 and output the first 20 records ordered by project name:");
var result = db.projects.find({"start_date": "2017-06-03"}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}


print("get project that start_date between 2017-06-01 to 2017-12-01, and contain task due date is 2018-11-11:")
var result = db.projects.find({start_date: {$gte : "2017-06-01", $lt: "2017-12-01"}, 
	"members.task.due_date": "2018-11-11"}).sort({pname: -1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2017-12-01 to 2018-05-01 and contain member's age is 22:");
var result = db.projects.find({start_date: {$gte: "2017-12-01", $lt: "2018-05-01"}, 
	"members.age": 22}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2017-06-01 to 2018-01-01 and contain member's age is 22-25:");
var result = db.projects.find({start_date: {$gte: "2017-06-01", $lt: "2018-01-01"}, 
	"members.age": {$gte: 22, $lt:25}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that contain member's age is 21 and project number between 55555 - 99990:");
var result = db.projects.find({"members.age": 21, project_num: {$gte: 55555, $lt: 99990}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get projects that start_date is 2017-07-03 and output the first 20 records ordered by project name:");
var result = db.projects.find({"start_date": "2017-07-03"}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}


print("get project that start_date between 2017-01-01 to 2017-06-01, and contain task due date is 2018-01-25:")
var result = db.projects.find({start_date: {$gte : "2017-01-01", $lt: "2017-06-01"}, 
	"members.task.due_date": "2018-01-25"}).sort({pname: -1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2017-09-01 to 2018-05-01 and contain member's age is 29:");
var result = db.projects.find({start_date: {$gte: "2017-09-01", $lt: "2018-05-01"}, 
	"members.age": 29}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2018-06-01 to 2018-10-01 and contain member's age is 28-31");
var result = db.projects.find({start_date: {$gte: "2018-06-01", $lt: "2018-10-01"}, 
	"members.age": {$gte: 28, $lt:31}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that contain member's age is 50 and project number between 0 - 10000:");
var result = db.projects.find({"members.age": 50, project_num: {$gte: 0, $lt: 10000}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get projects that start_date is 2018-07-03 and output the first 20 records ordered by project name:");
var result = db.projects.find({"start_date": "2018-07-03"}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}


print("get project that start_date between 2018-02-01 to 2018-12-01, and contain task due date is 2019-11-11:")
var result = db.projects.find({start_date: {$gte : "2018-02-01", $lt: "2018-12-01"}, 
	"members.task.due_date": "2019-11-11"}).sort({pname: -1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2017-08-01 to 2018-09-25 and contain member's age is 49:");
var result = db.projects.find({start_date: {$gte: "2017-08-01", $lt: "2018-09-25"}, 
	"members.age": 49}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2018-01-01 to 2018-12-01 and contain member's age is 50-55:");
var result = db.projects.find({start_date: {$gte: "2018-01-01", $lt: "2018-12-01"}, 
	"members.age": {$gte: 50, $lt:55}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that contain member's age is 35 and project number between 20000 to 29990s:");
var result = db.projects.find({"members.age": 35, project_num: {$gte: 20000, $lt: 29990}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get projects that start_date is 2018-05-22 and output the first 20 records ordered by project name:");
var result = db.projects.find({"start_date": "2018-05-22"}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}


print("get project that start_date between 2017-12-28 to 2018-06-01, and contain task due date is 2018-01-11:")
var result = db.projects.find({start_date: {$gte : "2017-12-28", $lt: "2018-06-01"}, 
	"members.task.due_date": "2018-01-11"}).sort({pname: -1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2017-01-01 to 2017-03-01 and contain member's age is 38:");
var result = db.projects.find({start_date: {$gte: "2017-01-01", $lt: "2017-03-01"}, 
	"members.age": 38}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that start_date between 2017-2-20 to 2018-02-20 and contain member's age is 20-30:");
var result = db.projects.find({start_date: {$gte: "2017-2-20", $lt: "2018-02-20"}, 
	"members.age": {$gte: 20, $lt:30}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}

print("get project that contain member's age is 55 and project number between 12121 - 88888:");
var result = db.projects.find({"members.age": 55, project_num: {$gte: 12121, $lt: 88888}}).sort({pname: 1}).limit(20);
while (result.hasNext()) {
	var value = result.next().pname;
	printjson("project name: " + value);
}



