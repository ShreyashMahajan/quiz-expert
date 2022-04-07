import { useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import { useQuestionData } from '../../context/questionDataContext';
import { Navigate } from 'react-router-dom';
import '../questionPage/questionPage.css';

export const QuestionBlock = () => {
    const { state: { dataByCategory }, dispatch } = useQuestionData();
    const [nextQuestion, setNextQuestion] = useState(0);

    const changeQuestionHandler = (e, answer) => {
        setNextQuestion(count => count + 1);
        let isRight = (answer === e.target.value)
        return dispatch({ type: 'CALCULATE_SCORE', payload: { isAttempted: true, isCorrect: isRight } });

    }

    return (
        <>
            <Navbar />

            {Object.keys(dataByCategory).length !== 0 &&
                <div>

                    {(nextQuestion === dataByCategory.questions.length) ?
                        <Navigate to='/result' />
                        : <main className="main-container">
                            <h1 className="category--title"> {dataByCategory.category} </h1>
                            <div className='question-container'>
                                <div className='ques-info'>
                                    <p className='ques-number'>Question: {nextQuestion + 1}/10</p>
                                    <p className='timer-text'>Timer: 30s</p>
                                </div>
                                <h1 className='question'> {dataByCategory.questions[nextQuestion].question}</h1>
                                <div className='option-container'>
                                    {
                                        dataByCategory.questions[nextQuestion].options.map(option => {
                                            return <button className='btn-option' value={option} onClick={(event) => changeQuestionHandler(event, dataByCategory.questions[nextQuestion].answer)} > {option} </button>
                                        })
                                    }
                                </div>
                                <div className='ques-action'>
                                    <button className='btn-skip' onClick={() => setNextQuestion(count => count + 1)}>Skip</button>
                                </div>
                            </div>
                        </main>
                    }
                </div>

            }

        </>
    )
}