import { useQuestionData } from '../../context/questionDataContext';
import '../resultCard/resultCard.css';

export const ResultCard = () => {
    const { state } = useQuestionData();
    const { dataByCategory } = state;

    return (
        <>
            {Object.keys(dataByCategory).length !== 0 && dataByCategory.questions.map(questionItem => {
                return (
                    <div className="result-card-container">
                        <p className="result-question">{questionItem.question}</p>
                        <div className="answer-container">
                            {questionItem.options.map(optionItem => {
                                if (optionItem === questionItem.answer) {
                                    return <button className='ans-option option-correct'>{optionItem}</button>
                                } else {
                                    return <button className='ans-option'>{optionItem}</button>
                                }
                            }
                            )
                            }
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}