import React from 'react';
import List from './List.jsx';
import TodoForm from './TodoForm.jsx';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    onNewTodo(todo) {
        let newTodoList = this.state.todos;
        newTodoList.push(todo);
        this.setState({ todos : newTodoList });
    }
    toggleTodoState(todo, index){
        let _todo = todo;
        _todo.done= !todo.done;
        let newTodos = this.state.todos;
        newTodos[index] = _todo;
        this.setState({ todos: newTodos});
    }
    render() {
        return(
            <div>
               <h1>Hello</h1>
               <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
               <List todos={this.state.todos} 
               onTodoToggle={this.toggleTodoState.bind(this)}/>
            </div>
        );
    }
}