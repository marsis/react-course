import React from 'react';

function ToDoItem(props) {
    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.props.completed}/>
            <p>{props.props.text}</p>
        </div>
    )
}

export default ToDoItem;