import '../result/result.css';
import { Navbar } from "../../components/navbar/navbar"
import { ResultCard } from "../../components/resultCard/resultCard"
import { SidebarBottom } from '../../components/sidebarBottom/sidebarBottm';

export const Result = () => {
    return (
        <div>
            <Navbar />
            <main className="main-container">
                <div className="result-container">
                    <h1 className="result__heading"> Science</h1>
                    <div className="result-info">
                        <p className="result-info--text">Total Score - 4</p>
                        <p className="result-info--text">Answered - 10</p>
                        <p className="result-info--text">Not Answered</p>
                    </div>
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                </div>
            </main>
            <SidebarBottom />
        </div>
    )
}