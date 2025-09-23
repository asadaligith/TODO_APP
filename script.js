
function todo_func(){
    var todo_input = document.getElementById("input")
    var todo_value = todo_input.value 
    console.log(todo_value)

    if (todo_value.trim() == ""){
        alert("Enter a Task")
    }

    var list = document.createElement("li")
    var list_value = document.createTextNode(todo_value)
    list.appendChild(list_value)
    console.log(list)

    var todo_list_item = document.getElementById("todo-li")
    todo_list_item.appendChild(list)
    todo_input.value = ""


}