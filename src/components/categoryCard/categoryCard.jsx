import '../categoryCard/categoryCard.css';
import historyImg from '../../assets/images/history.jpg';

export const CategoryCard = () => {
    return (
        <div className='card-container'>
            <img src={historyImg} alt="category" className="category__img" />
            <h2 className="category--title"> History </h2>
        </div>
    )
}