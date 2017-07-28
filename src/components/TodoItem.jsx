import React from 'react';

export default class TodoItem extends React.Component {
    render(){
        const todo = this.props.item;
        const idx = this.props.idx;
        let str = todo.done ? 'fait' : 'Non fait'
        return (
            <div className="todo" 
            key="todo-{todo.title}" >
                {todo.title} 
                <button  onClick={() => this.props.toggleTodo(todo, idx)}>{str}</button>
            </div>
        )
    }
}