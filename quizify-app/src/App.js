import React from'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/login/Login';
import SignUp from './Components/SignUp/sighnup';
import Splash from './Components/splash_page/splash';

/*   
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                  <Route path='/' element={<Splash/>}/>
                  <Route path='/signup' element={<SignUp/>} />
                  <Route path="/login" element = {<Login/>} />
            </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
