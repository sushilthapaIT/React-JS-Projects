import React, {useState} from 'react'

const Content = () => {

    const [tasks, setTasks] = useState(["apple", "banana", "orange"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }


  return (
    <div>
    <h3>TO-DO-APP</h3> 

    <div className="wrapper">
        <div className="content">
            <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}/>
            {/* <button className='btn' onClick={addTask}>Add</button> */}
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button>Delete</button>
                </li>
            )}
        </ol>

    </div>
    </div>
  )
}

export default Content
