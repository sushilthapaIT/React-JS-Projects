import React, { useState } from 'react'; 
import Content from './Content';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    return (
        <div>
            <Content addToDo={addToDo} />
        </div>
    );
};

export default TodoWrapper;