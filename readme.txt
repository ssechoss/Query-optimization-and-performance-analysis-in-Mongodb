Database System: assignment 4
Name: Cen Shen
Operating System: macOS 10.13.4
Data generating by python 3.6 (using Anaconda)

In my database, I build several projects:
	In the project, there is project_num, pname, start_date, array of members and array of files;
		In the members, there is email, mname, age, gender and array of tasks;
			In the task, there is tname, content, due_date;
		In the file, there is file name and size;

Comparing with assignment 3, the database structure is the same, but I add one attribute to project, that is project_num. 
The project_num is numbered from 0 to 99999. I hope to do some read and write based on the objected_id. However, I considered that each time when people recreated the data and imported to the cleared database, the new created objected_id may change. so I use project_num to make sure people can always using my all_read.js and mix.js to do operations successfully.


In total, I generated 100,000 projects. In each project, it contains at most 10 members and at most 10 files. In each member, it contains at most 10 tasks.
For convenience of doing read, write, aggregate operations, I build some attributes in an reasonable range:
	the project_num is from 0 to 99999;
	the start_date of project is rondomly generated from 2017/01/01 to 2018/12/28;
	the age of members is randomly generated from 20 to 55;
	the due_date of task is randomly generated from 2018/01/01 to 2019/12/24;


submitted files:
	generate_projects.py -- randomly generate data for my database of projects (projects.json created from it to save the data)
	all_read.js -- a JavaScript script to do all read operations 
	mix.js -- a JavaScript script to do a mix of read, write and aggregate operations
	singleIndex.js -- a small JavaScript script to create single index
	compoundIndexes.js -- a small JavaScript script to create compound indexes
	dropIndexes.js -- a small JavaScript script to drop all the indexes.
	performance_result.txt -- include both the numbers for each individual run as well as the average
	discussion.txt -- a file to analysis the performances for the different approaches.

Using singleIndex.js, compoundIndexes.js and dropIndexes.js, I create index or indexes, or delete indexes. Then do read or mix operations with or without indexes.