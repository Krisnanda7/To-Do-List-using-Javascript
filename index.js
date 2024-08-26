document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    } else {
        const taskHTML = `
            <div class="task">
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <p>Delete</p>
                   <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        document.querySelector('#tasks').innerHTML += taskHTML;

        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach(button => {
            button.onclick = function() {
                this.parentNode.remove();
            }
        });

        var current_tasks = document.querySelector(". delete");
        for (var i=0; i<current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".tasks");
        for(var i=0; i<tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
        }
    }

    document.querySelector("#newtask input").value = "";
}
}