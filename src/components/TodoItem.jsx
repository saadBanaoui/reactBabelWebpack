import React from 'react';

export default class TodoItem extends React.Component {
    render(){
        const todo = this.props.item;
        const idx = this.props.idx;
        let str = todo.done ? 'fait' : 'Non fait'
        return (
            <div className="todo alert alert-secondary clearfix" 
            key="todo-{todo.title}" >
                <span>{todo.title}</span> 
                <button className="float-right btn btn-danger" onClick={() => this.props.toggleTodo(todo, idx)}>{str}</button>
            </div>
        )
    }
}