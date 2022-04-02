import '../navbar/navbar.css'
import userAvatar from '../../assets/images/avatar.png';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <h3 className="nav__heading"> Quizy </h3>
                {/* <img className="nav--logo" alt="logo" /> */}
                {true &&
                    <div className="nav--user-auth">
                        <button className="btn btn--login">Login</button>
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