import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
