import React, { useState } from 'react'

const TodoInput = (props) => {

  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if(e.keyCode===13){
      props.addList(inputText)
      setInputText("");
    }
  }

  return (
    <div className="input-container">
        <input type='text' className='input-box-todo' value={inputText} placeholder='Enter Your Task...' onChange={(e) => {setInputText(e.target.value)}}/>
        <button onKeyDown={handleEnterPress} className='add-btn' onClick={() => {
          props.addList(inputText) 
          setInputText("")
        }}>+</button>

        <div>{inputText}</div>
    </div>

  )
}

export default TodoInput
