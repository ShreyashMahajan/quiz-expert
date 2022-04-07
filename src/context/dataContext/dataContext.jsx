import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const Response = await axios.get('/api/quizQuestions');
                setQuizData(Response.data.quizQuestions);

            } catch (error) {
                console.log('from here', error);
            }
        })()
    }, []);

    return (
        <DataContext.Provider value={{ quizData }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export { useData, DataProvider };