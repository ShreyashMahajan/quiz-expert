import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/authReducer";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, { isUserLoggedIn: false, token: null });
    const { isUserLoggedIn } = authState;
    const navigate = useNavigate();

    const login = async ({ email, password }) => {
        try {
            const { data } = await axios.post('/api/auth/login', { email, password });

            localStorage.setItem('user', JSON.stringify(data));
            authDispatch({ type: 'LOGIN', payload: data });
            navigate('/');
        }
        catch (error) {
            console.log(error);
        }
    }

    const signUp = async ({ user }) => {
        try {
            const { data } = await axios.post('/api/auth/signup', user);
            console.log('from context signup', data);
            localStorage.setItem('user', JSON.stringify(data));
            authDispatch({ type: 'SIGNUP', payload: data });
        }
        catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            localStorage.removeItem('user');
            authDispatch({ type: 'LOGOUT' });
            navigate('/')
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'));
        data && authDispatch({ type: 'LOGIN', payload: data });

    }, [])

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            signUp,
            isUserLoggedIn,
            authDispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };