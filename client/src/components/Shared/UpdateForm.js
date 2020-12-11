import React from 'react'
import { updateItem, getItemById } from '../../services/todos'
import { Title } from '../Shared/Title'








export default class UpdateForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            todo: {
                title: '',
                task: ''
            } 
        }
    }

    handleChange = event => {
        const updatedField = {[event.target.name]: event.target.value }
        const editedItem = Object.assign(this.state.todo, updatedField)
        this.setState({ todo: editedItem })
      }

      handleUpdate = event => {
        const { history } = this.props
		event.preventDefault();
		updateItem(this.props.match.params.id, { todo: { ...this.state.todo } })
            .then(() => history.push('/home'))
	};

    render() {


        const { todo } = this.state
        return (
            <div class='hero is-fullheight'>
                <div class='hero-body'>
                    <div class='column'>
                    <div class='box'>
                        <div class='container has-text-centered'>
                            <Title
                                title='Update ToDo'
                                size='2'
                            />
                            <input
                                class='input my-3'
                                placeholder='Title goes here'
                                name='title'
                                value={todo.title}
                                onChange={this.handleChange}
                            />
                            <input class='input mb-3'
                                placeholder='task description'
                                name='task'
                                value={todo.task}
                                onChange={this.handleChange}
                            />
                            <button onClick={this.handleUpdate} class='button'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}