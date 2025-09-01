// A simple To-Do list in JavaScript

let todos = [];

// Add a task
function addTask(task) {
  if (!task.trim()) return;
  todos.push({ text: task, completed: false });
  showTasks();
}

// Toggle completion
function toggleTask(index) {
  todos[index].completed = !todos[index].completed;
  showTasks();
}

// Delete a task
function deleteTask(index) {
  todos.splice(index, 1);
  showTasks();
}

// Display all tasks
function showTasks() {
  console.clear();
  todos.forEach((t, i) => {
    console.log(
      `${i + 1}. ${t.completed ? "[✔]" : "[ ]"} ${t.text}`
    );
  });
}

// Example usage:
addTask("Learn JavaScript");
addTask("Build a To-Do list");
toggleTask(0);
deleteTask(1);
addTask("Review code");