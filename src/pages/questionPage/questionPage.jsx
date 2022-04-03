import { Navbar } from '../../components/navbar/navbar';
import '../questionPage/questionPage.css';

export const QuestionBlock = () => {
    return (
        <div>
            <Navbar />
            <main className="main-container">
                <h1 className="category--title">Science</h1>
                <div className='question-container'>
                    <div className='ques-info'>
                        <p className='ques-number'>Question: 1/5</p>
                        <p className='timer-text'>Timer: 30s</p>
                    </div>
                    <h1 className='question'> This is question and we want answer</h1>
                    <div className='option-container'>
                        <button className='btn-option'>Option 1</button>
                        <button className='btn-option'>Option 2</button>
                        <button className='btn-option'>Option 3</button>
                        <button className='btn-option'>Option 4</button>
                    </div>
                    <div className='ques-action'>
                        <button className='btn-skip'>Skip</button>
                    </div>
                </div>
            </main>
        </div>
    )
}