import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// import pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' />}
            />
            <Route 
              path='/register'
              element={!user ? <Register /> : <Navigate to='/' />}
            />
            <Route 
              path='/'
              element={user ? <Home /> : <Navigate to='/login'/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
