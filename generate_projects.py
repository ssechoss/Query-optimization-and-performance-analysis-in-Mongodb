#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu May 17 16:50:18 2018

@author: censhen
"""

from faker import Factory
from datetime import datetime,date
import json,sys

from random import randint,choice

MAX_FILE_SIZE = sys.maxsize
NUMBER_OF_TASK = 10 # maximum task number in one member
NUMBER_OF_FILE = 10 # maximum file number in one project
NUMBER_OF_MEMBERS = 10 # maximum member number in one project
MIN_AGE = 20
MAX_AGE = 55
GENDER = ('F','M')
project_file = open('/Users/censhen/Desktop/assignment4/projects.json','w')

fake = Factory.create()

class DateEncoder(json.JSONEncoder):  #convert date type to match json
    def default(self, obj):  
        if isinstance(obj, datetime):  
            return obj.strftime('%Y-%m-%d %H:%M:%S')  
        elif isinstance(obj, date):  
            return obj.strftime("%Y-%m-%d")  
        else:  
            return json.JSONEncoder.default(self, obj) 
        
class project(object):
    def __init__(self, project_num, pname, start_date, members, file):
        self.project_num = project_num
        self.pname = pname
        self.start_date = start_date
        self.members = members
        self.file = file
    def __str__(self):
        projectdict = {}
        projectdict["project_num"] = self.project_num 
        projectdict["pname"] = self.pname
        projectdict["start_date"] = self.start_date
        projectdict["members"] = self.members
        projectdict["file"] = self.file
        return json.dumps(projectdict, cls = DateEncoder)
    
def gen_single_task(): #generate single task 
    tname = fake.text(max_nb_chars=20)
    content = fake.sentences(nb = 2)
    due_date = date(randint(2018,2019),randint(1,12),randint(1,24))
    return {"tname": tname, "content":content, "due_date": due_date}

def gen_tasks(): #generate randomly tasks in one member
    num_task = randint(0,NUMBER_OF_TASK)
    tasks = []
    for task_index in range(num_task):
        tasks.append(gen_single_task())
    return tasks

def gen_single_file(): #generate single file
    fname = fake.file_name()
    size = randint(0,MAX_FILE_SIZE)
    return {"fname": fname, "size":size}

def gen_files(): # generate randomly number files in one project
    num_file = randint(0, NUMBER_OF_FILE)
    files = [] 
    for file_index in range(num_file):
        files.append(gen_single_file())
    return files
    
def gen_single_member(): #generate one member
    email = fake.email()
    mname = fake.name()
    age = randint(MIN_AGE, MAX_AGE)
    gender = choice(GENDER)
    task = gen_tasks()
    return {"email": email, "mname": mname, "age": age, "gender": gender, "task": task}

def gen_members():  # generate randomly members in one project
    num_member = randint(0, NUMBER_OF_MEMBERS)
    members = []
    for member_index in range(num_member):
        members.append(gen_single_member())
    return members

def gen_single_project(project_index): #generate one project
    new_project = project(project_index,
                      fake.pystr(min_chars= 5, max_chars = 30),
                      date(randint(2017,2018),randint(1,12), randint(1,28)),
                      gen_members(),
                      gen_files())
    project_file.write(str(new_project) + '\n')
    return new_project

def generate_projects(num_project): # generate projects in a given number
    for project_index in range (num_project):
        gen_single_project(project_index)
    project_file.close()

if __name__ == '__main__':
    if len(sys.argv) == 1:
        num = 100000
    else:
        num = int(sys.argv[1])         
    generate_projects(num)
    