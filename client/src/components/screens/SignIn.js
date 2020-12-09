import React from 'react'
import { signInUser } from '../../services/auth'
import { Modal } from '../Shared/Modal'
import { Title } from '../Shared/Title'
import { TextField } from '@material-ui/core'
import { signUp } from '../../services/auth'




export default class SignIn extends React.Component {
    constructor() {
        super()


        this.state = {
            // loginuser: '',
            // loginPassword: '',
            username: '',
            password: '',
            confirmP: '',
            email: '',
            modal: false,
            hovered: false,
            hidden: true
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
                    username: '',
                    password: ''
                })
            })
    }

    onSignUp = event => {
        event.preventDefault();
    
        const { history, setUser } = this.props;
    
        signUp(this.state)
          .then(() => signInUser(this.state))
          .then(res => setUser(res.user))
          .then(() => history.push("/Home"))
          .catch(error => {
            console.error(error);
            this.setState({
              email: '',
              password: '',
              confirmP: ''
            });
          });
      };

    


    modalRender = () => {

        const { username, email, password, modal, confirmP } = this.state
        return <Modal
            className={modal ? 'modal is-active' : 'displayNone'}
            onClick={() => this.setState({modal: false})}
            username={username}
            email={email}
            password={password}
            confirmP={confirmP}
            onChange={this.handleChange}
            onSubmit={this.onSignUp}
        // usernameChange={usernameChange}
        // passwordChange={passwordChange}
        // confirmPChange={confirmPasswordChange}
        // emailChange={emailChange}
        />
    }


    render() {
        const { username, password, email, modal, hovered, hidden } = this.state
        return (
            <div class='hero is-fullheight gradient'>
                <div class='hero-body'>
                    <div class='container boxshadow has-background-white is-large has-text-centered'>
                        <div class='is-flex is-justify-content-space-between'>
                            <div class='pad6 loginW is-flex is-flex-direction-column'>
                                <Title
                                    title='Account Login'
                                    color='primary'
                                    size='1 is-size-5-mobile'
                                    className='my-6'
                                />
                                    <TextField
                                        id='outlined-basic'
                                        label='Username'
                                        variant='outlined'
                                        margin='normal'
                                        name='username'
                                        value={username}
                                        onChange={this.handleChange}
                                    />
                                    <TextField
                                        id='outlined-basic'
                                        label='Password'
                                        variant='outlined'
                                        margin='normal'
                                        color='primary'
                                        name='password'
                                        type={hidden ? 'password' : 'text'}
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                <div class='is-flex is-justify-content-space-between is-align-items-center'>
                                        <label class="checkbox">
                                            <input class='mr-1 is-size-5' type="checkbox" onClick={() => this.setState({ hidden: !hidden})} />
                                            Show Password
                                        </label>
                                        <a class='has-text-primary is-size-5 is-size-6-mobile'>Forgot Password?</a>
                                    </div>
                                    <button onClick={this.onSignIn}class='button is-primary my-6'>Login</button>
                            </div>
                            {this.modalRender()}
                                <div onMouseEnter={() => this.setState({hovered: true})} onMouseLeave={() => this.setState({ hovered: false })} onClick={()=> this.setState({modal: true})} class={hovered ? 'has-background-primary sideW pointer' : 'has-background-primary sideW'}>
                                    <p style={{ color: 'lightgrey' }} class={hovered ? 'fadeOut mt-6 is-size-1 is-size-5-mobile' : 'mt-6 is-size-1 is-size-5-mobile'}>||</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}