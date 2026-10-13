let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let item = document.createElement("li");
        let name = document.createElement("span");
        let remove = document.createElement("button");

        name.innerText = task.text;
        remove.innerText = "Delete";

        if (task.done) {
            item.classList.add("done");
        }

        name.onclick = function() {
            tasks[index].done = !tasks[index].done;
            saveTasks();
            showTasks();
        };

        remove.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
            showTasks();
        };

        item.appendChild(name);
        item.appendChild(remove);
        list.appendChild(item);
    });

    document.getElementById("count").innerText = tasks.length;
}

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ text: text, done: false });
    input.value = "";

    saveTasks();
    showTasks();
}

function clearTasks() {
    tasks = [];
    saveTasks();
    showTasks();
}

showTasks();