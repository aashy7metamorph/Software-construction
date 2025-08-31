function deleteTask(tasks, taskId) {
    const index = tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
        console.log(`Task ${taskId} deleted successfully:`, tasks[index].description);
        tasks.splice(index, 1); // remove the task
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }

    return tasks;
}

// Example usage:
let tasks = [
    { id: 1, description: "Buy groceries" },
    { id: 2, description: "Do homework" },
    { id: 3, description: "Prepare presentation" }
];

console.log("Before deletion:", tasks);

// Try deleting task with ID 2
tasks = deleteTask(tasks, 2);

console.log("After deletion:", tasks);

module.exports = deleteTask;  // so other files can use this function
