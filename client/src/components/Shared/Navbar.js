import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { signOut } from '../../services/auth'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const Navbar = ({ user, clearUser}) => {

    let history=useHistory()

    const onSignOut = e => {
        signOut(user)
            .then(() => clearUser())
            .finally(() => history.push('/'))
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <p>{user ? `Welcome ${user.username}` : ''}</p>
                    </Typography>
                    <Button
                        onClick={onSignOut}
                        color='inherit'>
                        Sign Out
              </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}