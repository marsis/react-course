import React from 'react';



function ToDoItem(props) {

    let conditionClass = props.props.completed ? 'todo-completed' : 'todo-uncompleted'
    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={() => props.handleChange(props.props.id)} checked={props.props.completed}/>
            <p className={conditionClass}>{props.props.text}</p>
        </div>
    )
}

export default ToDoItem;