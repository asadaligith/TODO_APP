
function todo_func(){
    //  target to input & Value
    var todo_input = document.getElementById("input")
    var todo_value = todo_input.value 
    console.log(todo_value)

    // Checking Empty Task
    if (todo_value.trim() !== ""){
        // Creating Tag <li> </li>
    var list_tag = document.createElement("li")

    // Creating textNode : Received From Input Data
    var list_value = document.createTextNode(todo_value)

    // textNode input data append into <li> here puting</li>
    list_tag.appendChild(list_value)
    console.log(list_tag)

    // UnOrdered List Target into HTML
    var todo_ul = document.getElementById("todo-ul") 
    todo_ul.appendChild(list_tag)
    todo_input.value = ""


// Delete Task from Unordered List 
    var delete_btn = document.createElement("button")
    var dlt_txt = document.createTextNode("Delete")
    delete_btn.appendChild(dlt_txt)
    console.log(delete_btn)
    list_tag.appendChild(delete_btn)
    delete_btn.setAttribute("class" , "delete-btn")

    delete_btn.addEventListener("click", function(){
    todo_ul.removeChild(list_tag)
    })
    var editbtn = document.createElement("button")
    var edittxt = document.createTextNode("Edit")
    console.log(list_tag.childNodes[0].nodeValue)
    editbtn.setAttribute("class","editbtn")
    

    editbtn.addEventListener("click", function(){
        var updatetask = prompt(list_tag.childNodes[0].nodeValue , todo_value)
        if (updatetask.trim() !== ""){
            list_tag.childNodes[0].nodeValue = updatetask
        }
        
    })
    
    editbtn.appendChild(edittxt)
    list_tag.appendChild(editbtn)
    }

    else {
        alert("Enter a Task")
    }
}

function deleteall(){
    var deleteall = document.getElementById("todo-ul") 
    deleteall.innerHTML = ""
}