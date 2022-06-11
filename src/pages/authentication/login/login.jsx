import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../../components/navbar/navbar"
import { useAuth } from "../../../context/authContext";
import '../login/login.css';

export const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const { login } = useAuth();


    const inputChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submit = e => {
        e.preventDefault();
        login(user);
    }

    const guestHandler = (e) => {
        e.preventDefault();
        login({
            email: 'admin@gmail.com',
            password: 'admin'
        })
    }

    return (
        <div className="login-container">
            <Navbar />
            <main className="main-container">
                <div className="form-wrapper">
                    <h2 className="form__heading">Login</h2>
                    <div className="form-main-container">
                        <form action="#" id="login" className="form-container" onSubmit={submit}>
                            <label htmlFor="userEmail" className="label">Email address</label>
                            <input type="email" name="email" id="userEmail" placeholder="enter email address" className="input-data" onChange={(e) => inputChangeHandler(e)} />
                            <label htmlFor="userPassword" className="label">Password</label>
                            <input type="password" name="password" id="userPassword" className="input-data" placeholder="enter password" onChange={(e) => inputChangeHandler(e)} />
                            <div className="user-info-cont">
                                <div className="user-remember">
                                    <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                                    <span className="user-remember__heading">Remember me</span>
                                </div>
                            </div>
                            <button className="btn-user--login" type="submit">Login</button>
                            <button className="btn-user--login" onClick={(e) => guestHandler(e)}>Login As Guest</button>
                            <NavLink to="/signup" className='item--link'>
                                <p className="user-new-account">Create New Account</p>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}