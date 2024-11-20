import { useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import LoginModal from './components/LoginModal/LoginModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleToggleLogin = () => {
    setShowLogin(!showLogin);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
    localStorage.clear();
  }

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('loggedinUser');

    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogin={handleToggleLogin} onLogout={handleLogout} />
      <Routes>
        <Route path='/'
          element={<HomePage
            isLoggedIn={isLoggedIn}
            onLogin={handleToggleLogin}
            onLogout={handleLogout}
          />}
        />
        <Route path='/profile'
          element={<UserProfile
            isLoggedIn={isLoggedIn}
            onLogin={handleToggleLogin}
            onLogout={handleLogout}
          />}
        />
        <Route path='/contacts'
          element={<ContactsPage />}
        />
      </Routes>

      {showLogin && <LoginModal setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
