// A script to read from a collection of stores in the local database
conn = new Mongo();

//connect to the local database
db = conn.getDB("projects");

//drop all the indexes
db.projects.dropIndexes();
//output the index information
var r= db.projects.getIndexes();
printjson(r)