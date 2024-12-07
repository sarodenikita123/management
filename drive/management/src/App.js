import logo from './logo.svg';
import './App.css';
import './Componant/Layout/Navbar'
import './Componant/Layout/Pages/User/Add'
import './Componant/Layout/Pages/User/View'
import './Componant/Layout/Pages/User/Edit'
import './Componant/Layout/Pages/User/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componant/Layout/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
          <Route path='/add' element={/Add}></Route>
          <Route path='/show' element={/View}></Route>
          <Route path='/update/:userId' element={/Edit}></Route>
          <Route path='/delete/:userId' element={/Edit}></Route>
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
