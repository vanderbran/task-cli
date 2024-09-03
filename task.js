var argv = process.argv
const fs = require("fs")
var date = new Date() 

task_data = 1 // todo: read all tasks into task_data

function returnTimeString() {
  var timeString = date.getHours() +":"+date.getMinutes() + " " +(date.getMonth()+1) +"-"+ date.getDate() +"-"+ date.getFullYear()
  return timeString
}

function writeTasks(tasks) { 
  fs.writeFile("task_list.json", JSON.stringify(tasks), err => { 
    if (err) throw err; }) 
}
function addTask(tasks, description) { 
// TODO: loop over tasks and find highest ID 
  task_obj = { 
    "id" : 0, 
    "description" : description, 
    "status" : "to-do",
    "created" : returnTimeString(),
    "updated" : returnTimeString() } 

  tasks.push(task_obj)
  writeTasks(tasks)
}

function deleteTask() { 
  // find task, then delete matching ID 
} 

function updateTask() { 
  // find task, then update it 
} 

function markDone() {
  // todo: find task, change status to done
}

function markProgress() { 
  // todo: find task, change status to in progress
}

fs.open("task_list.json", "r+", (err, file) => {
  if (err) throw err; 
  console.log(file);
})


if(!argv[2]) { 
  console.log("Unable to process your request.")
} 

if(argv[2] == 'add') { 
  if(!argv[3]) { 
    console.log("bro")
  } else {
  addTask(tasks, argv[3])
  }

} else if (argv[2] == 'update') { 

  if(!argv[3] || !argv[4]) { 
    console.log("dude")
  }
  else {
    updateTask(tasks, argv[3], argv[4])
  }

} else if (argv[2] == 'delete') { 
  //add logic in case user does not provide deets
  console.log('delete logic')

} else if (argv[2] == 'mark-in-progress') { 
  console.log('in prog logic')

} else if (argv[2] == 'mark-done') { 
  console.log('done logic')
} else if (argv[2] == 'list') {
  console.log('list logic')
} else {
  console.log("Provided commands do not match up to add|delete|mark-in-progress|mark-done|list.")
}

