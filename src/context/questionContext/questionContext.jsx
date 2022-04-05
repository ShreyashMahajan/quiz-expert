import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const QuestionContext = createContext(null);

const QuestionProvider = ({ children }) => {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const Response = await axios.get('/api/quizQuestions');
                console.log(Response.data)
                setQuizData(Response.data.quizQuestions);

            } catch (error) {
                console.log('from here', error);
            }
        })()
    }, []);

    console.log('quiz data', quizData)

    return (
        <QuestionContext.Provider value={{ quizData }}>
            {children}
        </QuestionContext.Provider>
    )
}

const useQuestion = () => useContext(QuestionContext);

export { useQuestion, QuestionProvider };