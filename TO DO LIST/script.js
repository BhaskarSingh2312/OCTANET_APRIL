
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    if (taskInput.value !== '') {
      var li = document.createElement('li');
      li.textContent = taskInput.value;
      
      var deleteBtn = document.createElement('button');
      deleteBtn.textContent ='delete' ;
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function() {
        taskList.removeChild(li);
      };
    
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }