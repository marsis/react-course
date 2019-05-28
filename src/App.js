import React, {Component} from 'react';
import ToDoItem from './ToDoItem'
import todosData from './todosData'


class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {},
            todosArray: todosData,
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
    }

    handleChange(id) {
        console.log('changed', id)
        this.setState(prevState => {

            const updatedTodos = prevState.todosArray.map(todo => {
                if (todo.id === id ) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            return {
                todosArray: updatedTodos,

            }
        })

    }

    render() {
        const text = this.state.loading ? 'Loading..' : this.state.character.name;
       const todosArray = this.state.todosArray.map(todo => <ToDoItem key={todo.id} props={todo} handleChange={this.handleChange} />)
        return (
            <div>
            <div className="todo-list">
                {todosArray}
            </div>
            <div>{text}</div>
            </div>
        );
    }
}
export default App
