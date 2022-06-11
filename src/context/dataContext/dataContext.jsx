import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [quizData, setQuizData] = useState([]);


    useEffect(() => {
        (async () => {

            try {
                const response = await axios.get('/api/questions');
                setQuizData(response.data.questions);

            } catch (error) {
                console.error('error while getting questions', error);
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