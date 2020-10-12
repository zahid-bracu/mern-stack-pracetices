import React from 'react';


const Todo = ({todo}) => {
    return (
        <>
            <input type="checkbox"/>
            <li>{todo.task}</li>
            <button>X</button>
        </>
    );
};

export default Todo;