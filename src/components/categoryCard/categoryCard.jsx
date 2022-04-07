import '../categoryCard/categoryCard.css';
import { NavLink } from 'react-router-dom';
import { useData } from '../../context/dataContext/dataContext';
import { useQuestionData } from '../../context/questionDataContext';



export const CategoryCard = () => {
    const { quizData } = useData();
    const { dispatch } = useQuestionData();

    const categoryClickHandler = (quizItem) => {
        const dataByCategory = quizData.find(item => item.category === quizItem.category);
        return dispatch({ type: 'DATA_BY_CATEGORY', payload: dataByCategory });
    }

    return (
        quizData.map(quizItem => {
            return (
                <div key={quizItem._id} onClick={() => categoryClickHandler(quizItem)}>
                    <NavLink to='/rules'>
                        <div className='card-container'>
                            <img src={quizItem.image} alt="category" className="category__img" />
                            <h2 className="category--title"> {quizItem.category} </h2>
                        </div>
                    </NavLink>
                </div>
            )
        })

    )
}