import React from 'react';
import ToDoItem from './ToDoItem'
import todosData from './todosData'

/*
function App() {



    return (
        <div className="todo-list">
            {todosArray}
        </div>
    );
}
*/

class App extends React.Component {

    render() {
        const todosArray = todosData.map(todo => <ToDoItem key={todo.id} props={todo} />)
        return (
            <div className="todo-list">
                {todosArray}
            </div>
        );
    }
}
export default App
