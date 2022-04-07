import '../result/result.css';
import { Navbar } from "../../components/navbar/navbar"
import { ResultCard } from "../../components/resultCard/resultCard"
import { SidebarBottom } from '../../components/sidebarBottom/sidebarBottm';
import { useQuestionData } from '../../context/questionDataContext';

export const Result = () => {
    const { state } = useQuestionData();
    const { result } = state;
    return (
        <div>
            <Navbar />
            <main className="main-container">
                <div className="result-container">
                    <h1 className="result__heading"> {state.dataByCategory.category} </h1>
                    <div className="result-info">
                        <p className="result-info--text">Total Score - {result.totalScore}</p>
                        <p className="result-info--text">Answered - {result.attempted}</p>
                    </div>
                    <ResultCard />

                </div>
            </main>
            <SidebarBottom />
        </div>
    )
}