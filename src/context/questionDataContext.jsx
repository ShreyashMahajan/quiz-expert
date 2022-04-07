import { createContext, useContext, useReducer } from "react";
import { reducerFunc } from "../reducers/reducerFunc";


const QuestionDataContext = createContext(null);

const QuestionDataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunc, {
        dataByCategory: {}, result: { totalScore: 0, attempted: 0, correctAnswer: 0, wrongAnswer: 0 }
    })

    return (
        <QuestionDataContext.Provider value={{ state, dispatch }}>
            {children}
        </QuestionDataContext.Provider>
    )
}

const useQuestionData = () => useContext(QuestionDataContext);

export { useQuestionData, QuestionDataProvider };