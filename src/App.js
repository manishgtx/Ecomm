import {Routes,Route} from 'react-router-dom'
// components
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import CartContainer from './pages/CartContainer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
