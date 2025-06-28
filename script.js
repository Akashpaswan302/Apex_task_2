const submitButton = document.querySelector(".btn");

const handleForm = () => {
    const personName = document.querySelector(".name").value;
    const personMail = document.querySelector(".mail").value;

    if (personName === "" || personMail === "") {
        alert("Please fill in all fields.");
        return false;
    } else {
        alert("Successfully submitted.");
        return true;
        personName ="";
    }
};

submitButton.addEventListener('click', handleForm);
// to-do-list

const cntrlBtn = document.querySelector("addbtn")

function addingTask() {
        const newTask = document.createElement("li");
        const inputTask = document.getElementById('taskList');
        taskList.appendChild(newTask);
        newTask.textContent = document.getElementById('inputTask').value;
        document.getElementById('inputTask').value ="";
        deleteTask(newTask)
}
function deleteTask(newTask){
            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = "X"
            newTask.appendChild(deleteBtn)
            deleteBtn.onclick = function(){
                newTask.remove()
            }
        }



cntrlBtn.addEventListener('click', addingTask)

