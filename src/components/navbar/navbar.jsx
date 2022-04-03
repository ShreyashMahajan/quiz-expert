import '../navbar/navbar.css'
import userAvatar from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <NavLink to='/'><h3 className="nav__heading"> Quizy </h3></NavLink>
                {/* <img className="nav--logo" alt="logo" /> */}
                {true &&
                    <div className="nav--user-auth">
                        <NavLink to='/login'> <button className="btn btn--login">Login</button> </NavLink>
                        <button className="btn btn--signUp">Sign Up</button>
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