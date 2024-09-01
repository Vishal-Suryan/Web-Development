let todo=[];
let todoDataList = document.getElementById("todo-data-list");
let saveButton=document.getElementById("save-todo");
let todoInputBar=document.getElementById("todo-input-bar");
let getPendingTodosButton=document.getElementById("get-todos");

getPendingTodosButton.addEventListener("click",()=>{
    todo=todo.filter((todo)=>todo.status!="Finished");
    reRenderTodos();
})
todoInputBar.addEventListener("keyup", function togglesaveButton(){
    let todoText=todoInputBar.value;
    if(todoText.length==0){
        if(saveButton.classList.contains("disabled")) return;
        saveButton.classList.add("disabled");
    }
    else if(saveButton.classList.contains("disabled")){
        saveButton.classList.remove("disabled");
    }
})
saveButton.addEventListener("click",function getTextAndAddTodo(){
    let todoText=todoInputBar.value;
    if(todoText.length==0) return;
    let todoObject={text:todoText,status:'In Progress',finishedButtonText:'Finished'};
    todo.push(todoObject);
    addTodo(todoObject,todo.length);
    todoInputBar.value='';

})
function reRenderTodos(){
    todoDataList.innerHTML='';
    todo.forEach((element,idx)=>{
        addTodo(element,idx+1);
    })
}
function removeTodo(){
    let deleteButtonPressed=event.target;
    let indexTobeRemoved=Number(deleteButtonPressed.getAttribute("todo-idx"));
    todo.splice(indexTobeRemoved,1);
    reRenderTodos();
 }
 function finishTodo(event){
    let finishButtonPressed=event.target;
    let indexToBeFinished=Number(finishButtonPressed.getAttribute("todo-idx"));
    if(todo[indexToBeFinished].status=='Finished'){
        todo[indexToBeFinished].status='In Progress';
        todo[indexToBeFinished].finishedButtonText='Finished';
    }else{
        todo[indexToBeFinished].status='Finished';
        todo[indexToBeFinished].finishedButtonText='Undo';
    }

    todo.sort((a,b)=>{
        if(a.status=='Finished'){
            return 1;
        }
        return -1;
    })
    reRenderTodos();
 }
function editTodo(event){
    let editButtonPressed=event.target;
    let indexToEdit=Number(editButtonPressed.getAttribute("todo-idx"));
    let detailDiv=document.querySelector(`div[todo-idx="${indexToEdit}"]`);
    let input=document.querySelector(`input[todo-idx="${indexToEdit}"]`);
    detailDiv.style.display="none";
    input.type="text";
    input.value=detailDiv.textContent;
}
function saveEdittedTodo(event){
    let input=event.target;
    let indexToEdit=Number(input.getAttribute("todo-idx"));
    let detailDiv=document.querySelector(`div[todo-idx="${indexToEdit}"]`);
    if(event.keyCode==13){
        detailDiv.textContent=input.value;
        detailDiv.style.display="block";
        input.value='';
        input.type="hidden";
    }
}
function addTodo(todoObject,todoCount){
    let rowDiv=document.createElement("div");
    let todoItem=document.createElement("div");
    let todoNumber=document.createElement("div");
    let todoDetail=document.createElement("div");
    let todoStatus=document.createElement("div");
    let todoActions=document.createElement("div");
    let deleteButton=document.createElement("button");
    let finishedButton=document.createElement("button");
    let editButton=document.createElement("button");
    let hiddenInput=document.createElement("input");
    let hr=document.createElement("hr");

    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item", "d-flex", "justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail","text-muted");
    todoStatus.classList.add("todo-status","text-muted");
    todoActions.classList.add("todo-action","d-flex","justify-content-start","gap-2");
    deleteButton.classList.add("btn", "btn-danger","delete-todo");
    finishedButton.classList.add("btn", "btn-success","finish-todo");
    editButton.classList.add("btn","btn-warning","edit-todo");
    hiddenInput.classList.add("form-control","todo-detail");

    finishedButton.setAttribute("todo-idx",todoCount-1);
    deleteButton.setAttribute("todo-idx",todoCount-1);
    editButton.setAttribute("todo-idx",todoCount-1);
    todoDetail.setAttribute("todo-idx",todoCount-1);
    hiddenInput.setAttribute("todo-idx",todoCount-1);
    hiddenInput.addEventListener("keypress",saveEdittedTodo);
    
    deleteButton.onclick=removeTodo;
    finishedButton.onclick=finishTodo;
    editButton.onclick=editTodo;
    hiddenInput.type="hidden";

    todoNumber.textContent=`${todoCount}.`;
    todoDetail.textContent=todoObject.text;
    todoStatus.textContent=todoObject.status;
    deleteButton.textContent="Delete";
    finishedButton.textContent=todoObject.finishedButtonText;
    editButton.textContent="Edit";


    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);
    todoActions.appendChild(editButton);
    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(hiddenInput);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataList.appendChild(rowDiv);
}