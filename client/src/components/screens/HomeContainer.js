import React from 'react'
import { Navbar } from '../Shared/Navbar'
import { Landing } from '../Shared/Landing'
import { SideList } from '../Shared/SideList'
import { getItems, createItem, deleteItem } from '../../services/todos'
import  ToDos  from '../Shared/ToDos'
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            displayToDos: false,
            displayLanding: true,
            todo: {
                title: '',
                task: ''
            },
            todos: [],
            createdToDo: null,
            updateModal: false,
            updated: false
        }
    }

    async componentDidMount() {
        this.fetchItems()
    }

    fetchItems = async () => {
        try {
            const todos = await getItems()
            this.setState({ todos })
        } catch (err) {
            console.error(err)
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        createItem(this.state.todo)
        .then(this.fetchItems())
        .then(this.fetchItems())
          .then(res =>
            res.status === 201
              ? this.setState({ createdToDo: res.data.item })
              : null
          )
          .catch(console.error)
      }

    handleChange = event => {
        const updatedField = {[event.target.name]: event.target.value }
        const editedItem = Object.assign(this.state.todo, updatedField)
        this.setState({ todo: editedItem })
      }

    landingToggle = e => {
        this.setState({
            displayToDos: false,
            displayLanding: true
        })
    }

    todoToggle = e => {
        this.setState({
            displayToDos: true,
            displayLanding: false
        })
    }

    destroy = (todo) => {
        deleteItem(todo.id)
        .then(this.fetchItems())
        .then(this.fetchItems())
      }


    renderPage = () => {
        if (this.state.displayToDos === true && this.state.displayLanding === false) {
            return (
                <>
                <ToDos
                todo={this.state.todo}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                todos={this.state.todos}
                />
                <div class='hero is-fullheight'>
                    <div class='container'>
                    {this.state.todos.length ? this.state.todos.map(todo => {
                        return (
                            <div class='column'>
                            <div class='card my-6'>
                                <div class='card-content'>
                                <p class='subtitle has-text-weight-light is-size-6'>
                                    Posted <Moment fromNow>{todo.createdAt}</Moment>
                                </p>
                                <p class='subtitle has-text-weight-light is-size-6'>
                                    Edited <Moment fromNow>{todo.updatedAt}</Moment>
                                </p>
                                <h1 class='is-size-2 is-size-4-mobile'>{todo.title}</h1>
                                <h3 class='is-size-4 is-size-6-mobile'>{todo.task}</h3>
                                </div>
                                <div class='card-footer'>
                                    <div class='card-footer-item'>
                                    <Link exact to={`/todos/${todo.id}`}>
                                        <EditIcon/>
                                    </Link>
                                    </div>                             
                                    <div class='card-footer-item'>
                                        <DeleteOutlineIcon
                                        className='point'
                                        Icon color='primary'
                                        onClick={() => this.destroy(todo)}
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                    :
                    null
                    }
                    </div>
                </div>
                </>
            )
        }
        else if (this.state.displayToDos === false && this.state.displayLanding === true) {
            return (
                <Landing/>
            )
        }
    }

    render() {
        return (
            <>
            <Navbar
            user={this.props.user}
            clearUser={this.props.clearUser}
            />
            <div class='column'>
                <SideList
                landingToggle={this.landingToggle}
                todoToggle={this.todoToggle}
                />
                {this.renderPage()}
            </div>
            </>
        )
    }
}