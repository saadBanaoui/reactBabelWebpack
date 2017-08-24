import React from 'react';


export default class TodoForm extends React.Component {
    onClick(event) {
        event.preventDefault();
        const txt = this.todoTitle.value;
        this.todoTitle.value = '';
        this.props.onNewTodo({
            title: txt,
            done: false,
            createAt: new Date()
        });
    }
    render() {
        return(
            <div className="form form-inline">
                <input type="text" ref={(input) => this.todoTitle = input} className="form-control"/>
                <button onClick={this.onClick.bind(this)} className="btn btn-primary">Add</button>
            </div>
        );
    }
}