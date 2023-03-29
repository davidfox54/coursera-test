function addToDoItem() {
    var itemText = toDoEntryBox.value;
	newToDoItem(itemText, false);
}

function clearCompletedItems() {
  var completedItems = document.getElementsByClassName("completed");
  clearItems(completedItems);
}

function emptyList() {
  var allItems = toDoList.children;
  clearItems(allItems);
}

function saveList() {
    var toDos = [];

	for (var i = 0; i < toDoList.children.length; i++) {
	    var toDo = toDoList.children.item(i);

	    var toDoInfo = {
	        "task": toDo.innerText,
	        "completed": toDo.classList.contains("completed")
	    };

	    toDos.push(toDoInfo);

	}

	localStorage.setItem("toDos", JSON.stringify(toDos));
}

function clearItems(itemsToClear) {
	for (var i = itemsToClear.length - 1; i >= 0; i--) {
  	itemsToClear.item(i).remove();
  }
}

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

// Add event listeners for buttons.
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedItems);
var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");