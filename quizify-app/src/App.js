import React from'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/login/Login';
import SignUp from './Components/SignUp/sighnup';
import Splash from './Components/splash_page/splash';
import NotePage from './Components/h_login/NotePage';
import NoLogin from './Components/h_nologin/nologin';
import QuizGen from './Components/QuizGeneration/QuizGen';

/*   
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                  <Route path='/' element={<QuizGen/>}/>
                  <Route path='/signup' element={<SignUp/>} />
                  <Route path="/login" element = {<Login/>} />
                  {/*
                  <Route path="/notepage" elemenet={<NotePage/>}/>
                  <Route path="/nologin" element={<NoLogin/>}/>
  */}
            </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
