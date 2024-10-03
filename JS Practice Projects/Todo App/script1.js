function loadTodos(){
    const todos =JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todo){
    const todos=loadTodos();
    todos.todoList.push({... todo});
    localStorage.setItem("todos",JSON.stringify(todos));
    
}

function refreshTodos(todos){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function resethtmlTodos(todos){
    const todoList=document.getElementById("todoList");
    todoList.innerHTML='';
    todos.todoList.forEach(todo=>{
        appendTodoHtml(todo);
    });
}

function toggleTodo(e){
    const todoItem=e.currentTarget.parentElement.parentElement;
    const todoId=todoItem.getAttribute("data-id");
    const todos=loadTodos();
    todos.todoList.forEach(todo=>{
        if(todo.id==todoId){
            todo.isCompleted=!todo.isCompleted;
        }
    });
    refreshTodos(todos);
    resethtmlTodos(todos);
}

function deleteTodo(e){
    const todoItem=e.currentTarget.parentElement.parentElement;
    const todoId=todoItem.getAttribute("data-id");
    let todos=loadTodos();
    todos.todoList=todos.todoList.filter(todo=>todo.id!=todoId);
    refreshTodos(todos);
    resethtmlTodos(todos);
}

function editTodo(e){
    const todoItem=e.currentTarget.parentElement.parentElement;
    const todoId=todoItem.getAttribute("data-id");
    let todos=loadTodos();
    const response=prompt("Enter the new value of Todo :)");
    todos.todoList.forEach(todo=>{
        if(todo.id==todoId){
            todo.text=response;
        }
    });
    refreshTodos(todos);
    resethtmlTodos(todos);
}

function addNewTodo(){
    const todoText=todoInput.value;
    if(todoText == ""){
        alert("Please write something for the Todo.")
    }else{
        todos=loadTodos();
        const id=todos.todoList.length;
        addTodoToLocalStorage({text:todoText,isCompleted:false,id});
        todoInput.value = ""; 
        appendTodoHtml({text:todoText,isCompleted:false,id});
    }
}

function executeFilterAction(e){
    const todoList=document.getElementById("todoList");
    const element=e.currentTarget;
    const value =element.getAttribute("data-filter");
    todoList.innerHTML='';
    const todos=loadTodos();
    if(value=="all"){
        todos.todoList.forEach(todo=>{
            appendTodoHtml(todo);
        })
    }else if(value=="pending"){
        todos.todoList.forEach(todo=>{
            if(todo.isCompleted!=true){
                appendTodoHtml(todo);
            }
        })
    }else{
        todos.todoList.forEach(todo=>{
            if(todo.isCompleted==true){
                appendTodoHtml(todo);
            }
        })
    }
}

function appendTodoHtml(todo){
    const todoList=document.getElementById("todoList");
    const todoItem =document.createElement("li");
    const textDiv =document.createElement("div");

    if(todo.isCompleted){
        textDiv.classList.add("completed");
    }
    todoItem.setAttribute("data-id",todo.id);

    textDiv.textContent=todo.text;
    todoItem.classList.add("todoItem");
    
    const wrapper =document.createElement("div");
    wrapper.classList.add("todoButtons");

    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click",editTodo);
    
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click",deleteTodo);
    
    const completeBtn=document.createElement("button");
    completeBtn.textContent=(todo.isCompleted)?"Reset":"Complete";
    completeBtn.classList.add("completeBtn");
    completeBtn.addEventListener("click",toggleTodo);

    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completeBtn);

    todoItem.appendChild(textDiv);
    todoItem.appendChild(wrapper);

    todoList.appendChild(todoItem);
}  

document.addEventListener("DOMContentLoaded",()=>{
    const todoInput=document.getElementById("todoInput");
    const submitButton=document.getElementById("addTodo");
    const todoList=document.getElementById("todoList");
    const filterBtns=document.getElementsByClassName("filterBtn");
    let todos=loadTodos();

    for(const btn of filterBtns){
        btn.addEventListener("click",executeFilterAction);
    }

    submitButton.addEventListener("click",addNewTodo());

    todoInput.addEventListener("change",(e)=>{
        const todoText=e.currentTarget.value;
        e.currentTarget.value=todoText.trim();
        console.log(e.currentTarget.value);
    });

    
    todos.todoList.forEach(todo=>{
        appendTodoHtml(todo);
    })
    
    document.addEventListener("keypress",(e)=>{
        if(e.code=="Enter"){
            addNewTodo();
        }
    })
});