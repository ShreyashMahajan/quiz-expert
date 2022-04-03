import '../resultCard/resultCard.css';

export const ResultCard = () => {
    return (
        <div className="result-card-container">
            <p className="result-question">This is question and it requires answer</p>
            <div className="answer-container">
                <button className="ans-option option-correct ">Option 1</button>
                <button className="ans-option">Option 1</button>
                <button className="ans-option">Option 1</button>
                <button className="ans-option">Option 1</button>
            </div>
        </div>
    )
}