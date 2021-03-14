
import './App.css';
import React,{ useState } from 'react';

function Tasks({ task }) {
  return (
    <div className="task"  style={{textDecoration: task.completed?"line-through":" "}}>
      {task.title}
    </div>
  )
}
function AddTasks({ addtask }) {
const [value,setvalue]=useState("");
const handlesumbit=e=>{
  e.preventDefault();
  if(!value)
  return;
  addtask(value);
  setvalue("");
}
  return (
<form onSubmit={handlesumbit}>
  <input  
  type="text"
  className="input"
  placeholder="Add a new task"
  value={value}
  onChange={e=>setvalue(e.target.value)}
  
  />

</form>


  )
}


function App() {
  const [tasks,settasks]=useState([
    {
      title: "Grab some Pizza",
      completed: true
  },
  {
      title: "Do your workout",
      completed: false
  }

  ]);

const addtask=title=>{
  const newtask=[...tasks,{title,completed:false}];
  settasks(newtask);
}

  return (
    <div className="to-do-container">
      <div className="header">To-Do list</div>
      <div className="tasks-list">
        {tasks.map((task,index)=>
          (
            <Tasks
                  task={task}
                  index={index}
                  key={index}

            
            
            />
          )
        
        )}

      </div>
        <div className="create-task">
              <AddTasks addtask={addtask}/>
        </div>

    </div>
  );
}

export default App;
