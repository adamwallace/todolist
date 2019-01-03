import React from 'react'

class UserForm extends React.Component {
    state = {
        name: ''
    }

    handleSubmit = (event) => {
        this.props.onSubmit({name: this.state.name});
        event.preventDefault();
        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                    placeholder="Enter New Todo" />
                <br />
                <button>Add Todo</button>
                <br />
                <br />
            </form>
        );
    }
}

export default UserForm