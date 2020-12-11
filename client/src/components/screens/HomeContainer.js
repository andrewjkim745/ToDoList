import React from 'react'
import { Home } from './Home'
import { Navbar } from '../Shared/Navbar'
import { Landing } from '../Shared/Landing'
import { SideList } from '../Shared/SideList'
import { getItems, createItem } from '../../services/todos'
import  ToDos  from '../Shared/ToDos'


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
            createdToDo: null
        }
    }

    async componentDidMount() {
        this.fetchItems()
        // getItems()
        //     .then(res => this.setState({
        //         todos: res
        //     }))
        //     .then(console.log('current state of todos',this.state.todos))
    }

    fetchItems = async () => {
        try {
            const todos = await getItems()
            this.setState({ todos })
            console.log('set state of todos', this.state.todos)
        } catch (err) {
            console.error(err)
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        createItem(this.state.todo)
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
                            <div class='card my-6'>
                                <div class='card-content'>
                                <h1 class='is-size-2 is-size-5-mobile'>{todo.title}</h1>
                                <h3 class='is-size-3 is-size-6-mobile'>{todo.task}</h3>
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