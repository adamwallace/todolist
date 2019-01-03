import React, {Component} from 'react'

class Todo extends Component {
// const Todo = (props) => {
    // state = {
    //     name: ''
    // };
    constructor(props) {
        super(props)
        this.state = {name: this.props.name};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.onSubmit(this.state.name, this.props.name);
        event.preventDefault();
        this.props.toggleEdit(this.state.name)
    }

    render() {
        var header = this.props.isStrikeThrough 
            ? <strike>{this.props.name}</strike> 
            : <div>{this.props.name}</div>;
        
        var editButton = (this.props.shouldEdit&& (this.state.name !== this.props.name))
            ? <button type="submit" form="nameField" >Save</button> 
            : <button disabled={this.props.isStrikeThrough}
                      onClick={() => this.props.toggleEdit(this.props.name)}>Edit</button>;

        if (this.props.shouldEdit) {
            header =
                <form id="nameField" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        defaultValue={this.props.name}
                        onChange={this.handleChange} />
                </form>;
        }

        return (
            <div>
                {header}
                <button disabled={this.props.shouldEdit} 
                        onClick={() => this.props.markAsComplete(this.props.name)}>Mark as complete</button>
                {editButton}
                <button onClick={() => this.props.deleteTodo(this.props.name)}
                        disabled={this.props.shouldEdit}>Delete</button>
                <br/>
                <br/>
            </div>
        );
    }
};

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo, i) => <Todo key={i} {...todo} 
                                                strikeThrough={todo.isStrikeThrough}
                                                shouldEdit={todo.shouldEdit}
                                                deleteTodo={props.deleteTodo}
                                                toggleEdit={props.toggleEdit}
                                                onSubmit={props.setTodo}
                                                markAsComplete={props.markAsComplete}/>)}
        </div>
    );
}

export default TodoList