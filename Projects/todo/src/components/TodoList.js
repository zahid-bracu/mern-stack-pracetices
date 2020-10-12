import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
        <ul>
            {
                todos.map(key=>{
                    <Todo id={key.id}></Todo>
                })
            }
        </ul>
    );
};

export default TodoList;