// Selecting elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create a span to hold the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Add click event to toggle task completion
    taskSpan.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    // Create a delete button for the task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add event to delete task
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Event listener for the add button
addTaskBtn.addEventListener("click", addTask);

// Optional: Add the task when the Enter key is pressed
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
