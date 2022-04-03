import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/authentication/login/login';
import { Home } from './pages/home/home';
import { QuestionBlock } from './pages/questionPage/questionPage';
import { Result } from './pages/result/result';
import { Rules } from './pages/rules/rules';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={ <Home /> } />
       <Route path='/login' element={ <Login /> } />
       <Route path='/questionPage' element={ <QuestionBlock />} />
       <Route path='/rules' element={ <Rules />} />
       <Route path='/result' element={ <Result />} />

     </Routes>

     
    </div>
  );
}

export default App;
