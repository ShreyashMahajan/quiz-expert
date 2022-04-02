import { Navbar } from "../../../components/navbar/navbar"
import '../login/login.css';

export const Login = () => {
    return (
        <div className="login-container">
            <Navbar />
            <main className="main-container">
                <div className="form-wrapper">
                    <h2 className="form__heading">Login</h2>
                    <div className="form-main-container">
                        <form action="#" id="login" className="form-container">
                            <label htmlFor="userEmail" className="label">Email address</label>
                            <input type="email" name="userEmail" id="userEmail" placeholder="enter email address" className="input-data" />
                            <label htmlFor="userPassword" className="label">Password</label>
                            <input type="password" id="userPassword" className="input-data" placeholder="enter password" />
                            <div className="user-info-cont">
                                <div className="user-remember">
                                    <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                                    <span className="user-remember__heading">Remember me</span>
                                </div>
                            </div>
                            <button className="btn-user--login">Login</button>
                            {/* <Link to="/signup"> */}
                            <p className="user-new-account">Create New Account</p>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}