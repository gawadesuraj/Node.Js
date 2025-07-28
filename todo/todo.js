const fs = require('fs');
const { argv } = require('process');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) =>{
    const dataJSON= JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = ((task) => {
    const tasks = loadTasks()
    tasks.push({task});
    saveTasks(tasks);
    console.log("Task added",task);
    
});

const command = process.argv[2];
const argument = process.argv[3];
if(command == 'add'){
    addTask(argument);
}
else if(command === 'list'){
    listTask();
}
else if(command === 'remove'){
    removeTask(argument);
}
else{
    console.log('command not found');
    
}