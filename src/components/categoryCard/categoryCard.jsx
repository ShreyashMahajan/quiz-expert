import '../categoryCard/categoryCard.css';
import { useQuestion } from '../../context/questionContext/questionContext';
import { NavLink } from 'react-router-dom';

export const CategoryCard = () => {
    const { quizData } = useQuestion();

    return (
        quizData.map(quizItem => {
            return (
                <div key={quizItem._id}>
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