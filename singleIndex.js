// A script to read from a collection of stores in the local database
conn = new Mongo();

//connect to the local database
db = conn.getDB("projects");

//create single index
db.projects.createIndex({start_date: 1})
//get index information
var r= db.projects.getIndexes();
printjson(r)