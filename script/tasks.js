var taskInput = document.getElementById("new-task");
var taskCategory = document.getElementById("category");
var todoList = [];


//Add a new task.
var addButton = document.getElementById('submit'); //first button

//check category exists
var categoryExist = function(categoryString) {
        var potentialCatName = categoryString;
        var potentialCat = document.getElementById(potentialCatName);
        console.log(potentialCat);

        if (potentialCat == null) {
            return false;
        }
        return true;
    }
    //get current category
var getCurrentCat = function(categoryString) {
        var categoryName = categoryString;
        var category = document.getElementById(categoryName);
        return category;
    }
    //create new category
var createNewCategory = function(categoryString) {
    var listCategory = document.createElement("div");
    listCategory.setAttribute("id", categoryString);

    listCategory.style.backgroundColor = "#ccc";
    listCategory.style.top = "20%";
    listCategory.style.left = "20%";
    listCategory.style.padding = "40px";
    listCategory.style.width = "200px";
    listCategory.style.height = '300px';
    listCategory.style.display = 'inline-block';

    listCategory.style.border = "1px solid";
    listCategory.style.visibility = "show";

    document.getElementById("tid").appendChild(listCategory);
    console.log(listCategory);
    return (listCategory);

}
var createCategoryTitle = function(category, categoryString) {
    var catTitle = document.createElement('h2');
    catTitle.setAttribute('id', 'categoryTitle');
    catTitle.innerHTML = categoryString;
    catTitle.style.color = "green";
    catTitle.style.fontSize = "20px";
    catTitle.style.textAlign = "center";
    console.log(catTitle);
    console.log(category);
    catId = category.getAttribute("id");
    console.log(catId)
    document.getElementById(catId).appendChild(catTitle);
    console.log(category);

}

var createToDoList = function(category, categoryString, listItem) {
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'incomplete-tasks');
    ul.innerHTML = ("TO DO");
    ul.style.textDecoration = "underline";
    ul.style.fontWeight = "900";
    ul.style.fontSize = "16px";
    catId = category.getAttribute("id");
    console.log(catId);
    document.getElementById(catId).appendChild(ul);
    console.log(ul);
}

var createCompleteList = function(category, categoryString) {
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'completed-tasks');
    ul.innerHTML = "COMPLETED";
    ul.style.textDecoration = "underline";
    ul.style.fontWeight = "900";
    ul.style.fontSize = "16px";
    catId = category.getAttribute("id");
    console.log(catId)
    document.getElementById(catId).appendChild(ul);
    console.log(ul);

}
var createNewTaskElement = function(taskString) {
    var listItem = document.createElement("li");


    //input (checkbox)
    var checkBox = document.createElement("input"); //checkbx
    //label
    var labelTask = document.createElement("label"); //label
    labelTask.style.fontWeight = "italic";
    labelTask.style.fontWeight = "800";
    labelTask.style.fontSize = "14px";
    labelTask.style.color = "red";


    //input (text)
    var editInput = document.createElement("input"); //text
    //button.edit
    var editButton = document.createElement("button"); //edit button



    //button.delete
    var deleteButton = document.createElement("button"); //delete button

    labelTask.innerText = taskString;

    //Each elements, needs appending
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
    editButton.className = "edit";



    // deleteButton.className="delete";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";



    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(labelTask);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

var addTask = function() {
    console.log("Add Task...");

    var categoryEx = categoryExist(taskCategory.value);

    if (categoryEx == false) {
        var category = createNewCategory(taskCategory.value);
        var listItem = createNewTaskElement(taskInput.value);

        console.log(category);

        createCategoryTitle(category, taskCategory.value);

        createToDoList(category, taskCategory.value, listItem);
        createCompleteList(category, taskCategory.value);
        taskInput.value = "";
        taskCategory.value = "";

        console.log(category);
        catId = category.getAttribute("id");
        console.log(catId);

        var incompletedTaskHolder = document.getElementById(catId).childNodes[1]; //ul of #incomplete-tasks
        console.log(incompletedTaskHolder);




        bindTaskEvents(listItem, taskCompleted);
        incompletedTaskHolder.appendChild(listItem);

        var storeCar = document.getElementById(catId).childNodes[1];


        console.log(localStorage);




        console.log(incompletedTaskHolder);
        var todoTask = incompletedTaskHolder;
        console.log(todoTask);

        taskLength = todoTask.children.length;
        console.log(taskLength);
        for (i = 0; i < taskLength; i++) {
            todoTask = todoTask.children[i];
            console.log(todoTask);
            todoTask = todoTask.children[1];
            title = todoTask.innerHTML;
            console.log(title);

            if (!(todoList.includes(title))) {

                todoList.push(title);
                console.log(todoList);
                var stringifyIncomplete = JSON.stringify(todoList);
                console.log(stringifyIncomplete);
                localStorage.setItem("tasksIncompleted", stringifyIncomplete);
                console.log(localStorage);
                var data = JSON.parse(localStorage.getItem('tasksIncompleted'));

            }
        }

    } else {
        var category = getCurrentCat(taskCategory.value);
        var listItem = createNewTaskElement(taskInput.value);
        console.log(category);
        catId = category.getAttribute("id");
        console.log(catId);
        var incompletedTaskHolder = document.getElementById(catId).childNodes[1]; //ul of #incomplete-tasks
        console.log(incompletedTaskHolder);

        bindTaskEvents(listItem, taskCompleted);
        incompletedTaskHolder.appendChild(listItem);




        console.log(incompletedTaskHolder);
        var todoTask = incompletedTaskHolder;
        // var todoTask = incompletedTaskHolder.children[0];
        console.log(todoTask);
        // todoTask = incompletedTaskHolder.children[1];
        // console.log(todoTask);
        taskLength = todoTask.children.length;
        console.log(taskLength);
        for (i = 0; i < taskLength; i++) {
            console.log(i);
            todoTasks = todoTask.children[i];
            console.log(todoTasks);
            todoTasks = todoTasks.children[1];
            title = todoTasks.innerHTML;
            console.log(title);

            if (!(todoList.includes(title))) {

                todoList.push(title);
                // todoList = todoList.children;
                console.log(todoList);
                var stringifyIncomplete = JSON.stringify(todoList);
                console.log(stringifyIncomplete);
                localStorage.setItem("tasksIncompleted", stringifyIncomplete);
                console.log(localStorage);
                var data = JSON.parse(localStorage.getItem('tasksIncompleted'));

            }
        }


    }



}

var checkEdit = function() {
    if (confirm("Do you really want to edit this task?")) {
        editTask();
    }
}

//Edit an existing task.
var editTask = function() {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");

    var listItem = this.parentNode;
    console.log(listItem);

    var editInput = listItem.querySelector('input[type=text]');
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");
    //If class of the parent is .editmode
    if (containsClass) {
        //switch to .editmode
        //label becomes the inputs value.
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
    console.log(listItem);

}



//Delete task.
var deleteTask = function() {
    if (confirm("Do you really want to delete this task?")) {
        console.log("Delete Task...");

        var listItem = this.parentNode;
        var ul = listItem.parentNode;
        //Remove the parent list item from the ul.
        ul.removeChild(listItem);

    }
}


//Mark task completed
var taskCompleted = function() {
    console.log("Complete Task...");

    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    console.log(listItem);
    var incomplete = listItem.parentElement;
    var category = incomplete.parentElement;

    console.log(category);
    catId = category.getAttribute("id");
    console.log(catId);

    var completedTasksHolder = document.getElementById(catId).childNodes[2]; //completed-tasks
    console.log(completedTasksHolder);

    completedTasksHolder.appendChild(listItem);


    bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete = function() {
    console.log("Incomplete Task...");
    //Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem = this.parentNode;


    console.log(listItem);

    var incomplete = listItem.parentElement;
    var category = incomplete.parentElement;

    console.log(category);
    catId = category.getAttribute("id");
    console.log(catId);
    var incompletedTaskHolder = document.getElementById(catId).childNodes[1]; //ul of #incomplete-tasks
    console.log(incompletedTaskHolder);

    bindTaskEvents(listItem, taskCompleted);
    incompletedTaskHolder.appendChild(listItem);

    console.log(incompletedTaskHolder);
    var todoTask = incompletedTaskHolder;
    // var todoTask = incompletedTaskHolder.children[0];
    console.log(todoTask);
    // todoTask = incompletedTaskHolder.children[1];
    // console.log(todoTask);
    taskLength = todoTask.children.length;
    console.log(taskLength);
    for (i = 0; i < taskLength; i++) {
        todoTask = todoTask.children[i];
        console.log(todoTask);
        todoTask = todoTask.children[1];
        title = todoTask.innerHTML;
        console.log(title);

        if (!(todoList.includes(title))) {

            todoList.push(title);
            // todoList = todoList.children;
            console.log(todoList);
            var stringifyIncomplete = JSON.stringify(todoList);
            console.log(stringifyIncomplete);
            localStorage.setItem("tasksIncompleted", stringifyIncomplete);
            console.log(localStorage);
            var data = JSON.parse(localStorage.getItem('tasksIncompleted'));

        }
    }

}

var ajaxRequest = function() {
    console.log("AJAX Request");
}

//The glue to hold it all together.

//Set the click handler to the addTask function.
addButton.onclick = addTask;
// addButton.addEventListener("click",addTask);
addButton.addEventListener("click", ajaxRequest);


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("bind list item events");
    //select ListItems children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");


    //Bind editTask to edit button.
    editButton.onclick = editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick = deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item

var incompletedTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
for (var i = 0; i < incompletedTaskHolder.children.length; i++) {

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
