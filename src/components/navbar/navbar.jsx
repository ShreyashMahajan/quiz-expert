import '../navbar/navbar.css'
import userAvatar from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const Navbar = () => {
    const { isUserLoggedIn, logout } = useAuth();
    return (
        <div className="navbar">
            <div className="nav-container">
                <NavLink to='/'><h3 className="nav__heading remove--underline"> QuizExpert </h3></NavLink>
                {!isUserLoggedIn &&
                    <div className="nav--user-auth">
                        <NavLink to='/login'> <button className="btn btn--login">Login</button> </NavLink>
                        <button className="btn btn--signUp">Sign Up</button>
                    </div>
                }
                {
                    isUserLoggedIn &&
                    <div className="nav--user-auth">
                        <NavLink to='/'> <button className="btn btn--login" onClick={() => logout()} >Logout</button> </NavLink>
                    </div>
                }

                {
                    false &&
                    <div className='nav--user-info'>
                        <img src={userAvatar} alt='user avatar' className='avatar avatar-rounded avatar--sm' />
                        <span className='user--name' >Hi, User </span>
                    </div>
                }
            </div>
        </div>
    )
}