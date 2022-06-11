import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { RequiresAuth } from './components/requireAuth/requireAuth';
import { Login } from './pages/authentication/login/login';
import { SignUp } from './pages/authentication/signup/signup';
import { Home } from './pages/home/home';
import { QuestionBlock } from './pages/questionPage/questionPage';
import { Result } from './pages/result/result';
import { Rules } from './pages/rules/rules';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={
         <RequiresAuth>
          <Home /> 
         </RequiresAuth>
          } />
       <Route path='/login' element={ <Login /> } />
       <Route path='/signup' element={ <SignUp />} />
       <Route path='/questionPage' element={
         <RequiresAuth>
            <QuestionBlock />
         </RequiresAuth>
          } />
       <Route path='/rules' element={ 
         <RequiresAuth>
            <Rules />
         </RequiresAuth>
      } />
       <Route path='/result' element={ 
        <RequiresAuth>
          <Result />
        </RequiresAuth>
        } />
    
     </Routes>

     
    </div>
  );
}

export default App;
