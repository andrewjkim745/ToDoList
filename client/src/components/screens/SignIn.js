import React from 'react'
import { signInUser } from '../../services/auth'
import { Modal } from '../Shared/Modal'
import { Title } from '../Shared/Title'
import { TextField } from '@material-ui/core'
import { signUp } from '../../services/auth'




export default class SignIn extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            user: null,
            loginUsername: '',
            loginPassword: '',
            username: '',
            password: '',
            confirmP: '',
            email: '',
            modal: false,
            hovered: false,
            hidden: true,
            registerMsg: ''
        }
    }



    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props
        signInUser(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/Home'))
            .catch(error => {
                console.error(error)
                this.setState({
                    loginUsername: '',
                    loginPassword: '',
                })
            })
    }

    onSignUp = event => {
        event.preventDefault();
    
        const { history, setUser } = this.props;
    
        signUp(this.state)
          .then(() => signInUser(this.state))
          .then(res => setUser(res.user))
          this.setState({
              username: '',
              email: '',
              password: '',
              confirmP: '',
              registerMsg: 'Register Success!'
          })
      };

    


    modalRender = () => {

        const { registerMsg, username, password, email, modal, confirmP } = this.state
        return <Modal
            className={modal ? 'modal is-active' : 'displayNone'}
            onClick={() => this.setState({modal: false})}
            username={username}
            email={email}
            password={password}
            confirmP={confirmP}
            onChange={this.handleChange}
            onSubmit={this.onSignUp}
            registerMsg={registerMsg}
        />
    }


    render() {
        const { loginUsername, loginPassword, email, modal, hovered, hidden, registerMsg } = this.state
        return (
            <div class='hero is-fullheight gradient'>
                <div class='hero-body'>
                    <div class='container boxshadow has-background-white is-large has-text-centered'>
                        <div class='is-flex is-justify-content-space-between'>
                            <div class='pad6 loginW is-flex is-flex-direction-column'>
                                <Title
                                    title='Account Login'
                                    size='1 is-size-5-mobile'
                                    className='my-6 materialuiText'
                                />
                                    <TextField
                                        id='outlined-basic'
                                        label='Username'
                                        variant='outlined'
                                        margin='normal'
                                        name='loginUsername'
                                        value={loginUsername}
                                        onChange={this.handleChange}
                                    />
                                    <TextField
                                        id='outlined-basic'
                                        label='Password'
                                        variant='outlined'
                                        margin='normal'
                                        color='primary'
                                        name='loginPassword'
                                        type={hidden ? 'password' : 'text'}
                                        value={loginPassword}
                                        onChange={this.handleChange}
                                    />
                                <div class='is-flex is-justify-content-space-between is-align-items-center'>
                                        <label class="checkbox">
                                            <input class='mr-1 is-size-5' type="checkbox" onClick={() => this.setState({ hidden: !hidden})} />
                                            Show Password
                                        </label>
                                        <a class='materialuiText is-size-5 is-size-6-mobile'>Forgot Password?</a>
                                    </div>
                                    <button onClick={this.onSignIn}class='button materialui my-6'>Login</button>
                            </div>
                            {this.modalRender()}
                                <div onMouseEnter={() => this.setState({hovered: true})} onMouseLeave={() => this.setState({ hovered: false })} onClick={()=> this.setState({modal: true})} class={hovered ? 'materialui sideW pointer' : 'materialui sideW'}>
                                    <p style={{ color: 'lightgrey' }} class={hovered ? 'fadeOut mt-6 is-size-1 is-size-5-mobile' : 'mt-6 is-size-1 is-size-5-mobile'}>||</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}