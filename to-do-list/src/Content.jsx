import React, {useState} from 'react'

const Content = () => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(value)
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input onChange={(e) => setValue(e.target.value)} type='text' className='todo-input' placeholder='What is the task today?' />
      <button className='todo-btn'>Add Task</button>
    </form>
  )
}

export default Content
