import Nav from "../Navbar/Navbar.module.css";
import ChirpLogo from '../../Images/ChirpLogo.svg'
import { Button } from "@mui/material";
import { useAuthContext } from '../../Services/authProvider'

// added Navbar log in and out Sylvester and Eddy
function Navbar() {
    const { user } = useAuthContext()
    // If user is logged in, userAuth is true, else it is false
    const userAuth = user.username !== '' ? true : false

    function loggedOut() {
        return (
            <div className={Nav['linkContainer']}>
                <ul className={Nav['login-header-info']}>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/signup'>Sign Up</a></li>
                </ul>
            </div>
        )
    }

    function loggedIn() {
        return (
            <div className={Nav['linkContainer']}>
                <ul className={Nav['login-header-info']}>
                    <li><a href='/dashboard'>Dashboard</a></li>
                    <li><a href='/logout'>Logout</a></li>
                </ul>
            </div>
        )
    }

    return (
        <header className={Nav["login-header"]}>

            <div className={Nav['logbnt']}>
                <Button className={Nav['login-header-name']} href="/">
                    <img className={Nav['login-logo']} src={ChirpLogo} alt='logo' />
                </Button>
            </div>

            {
                // If user is logged in, display the loggedIn() component, else display the loggedOut() component
                userAuth ? loggedIn() : loggedOut()
            }

        </header>
    );
}

export default Navbar;
