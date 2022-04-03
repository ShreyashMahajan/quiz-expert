import { Navbar } from '../../components/navbar/navbar';
import { SidebarBottom } from '../../components/sidebarBottom/sidebarBottm';
import '../rules/rules.css';

export const Rules = () => {
    return (
        <div>
            <Navbar />
            <main className="main-container">
                <h1 className="category__title">Science</h1>
                <div className="rules-container">
                    <h1 className="rules--title">Rules</h1>
                    <ul className='list-unordered'>
                        <li className="rule-content"> This quiz contains 10 questions </li>
                        <li className="rule-content">Each correct answer will get you 10 points.</li>
                        <li className="rule-content">Each wrong answer will have 3 negative point</li>
                        <li className="rule-content">There will be time limit of 30 seconds for each question</li>
                        <li className="rule-content">There will be no negative point for skiping the question</li>
                    </ul>
                    <h1 className="rule--title-major">All the Best!</h1>
                    <button className="btn--start">Start Quiz</button>
                </div>
            </main>
            <SidebarBottom />
        </div>
    )
}