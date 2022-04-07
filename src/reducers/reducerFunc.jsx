
const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'DATA_BY_CATEGORY':
            return { ...state, dataByCategory: action.payload };
        case 'CALCULATE_SCORE':
            return {
                ...state,
                result: {
                    ...state.result,
                    totalScore: (action.payload.isCorrect ? state.result.totalScore + 3 : state.result.totalScore - 1),
                    correctAnswer: action.payload.isCorrect ?
                        state.result.correctAnswer + 1 : state.result.correctAnswer,
                    wrongAnswer: !(action.payload.isCorrect) ?
                        state.result.wrongAnswer + 1 : state.result.wrongAnswer,
                    attempted: state.result.attempted + 1,
                }
            }
        case 'RESET':
            return {
                ...state,
                result: {
                    ...state.result,
                    totalScore: 0, correctAnswer: 0, wrongAnswer: 0, attempted: 0
                }
            }
        default:
            return state;
    }
}

export { reducerFunc };

