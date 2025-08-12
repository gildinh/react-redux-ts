import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';

type PageType = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageType);
    setShowMenu(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleLoginSubmit = (data: { email: string; password: string }) => {
    console.log('Login attempt:', data);
    // Here you would typically make an API call
    setShowLogin(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header
        title="Gildinh"
        onMenuClick={handleMenuClick}
        showMenu={showMenu}
        onNavClick={handleNavigation}
        onLoginClick={handleLoginClick}
      />

      {showMenu && (
        <div className="mobile-nav">
          <nav className="mobile-nav">
            <button
              className="mobile-nav-item"
              onClick={() => handleNavigation('home')}
            >
              Home
            </button>
            <button
              className="mobile-nav-item"
              onClick={() => handleNavigation('about')}
            >
              Services
            </button>
            <button
              className="mobile-nav-item"
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      )}

      <main className="App-main">
        {renderPage()}
      </main>

      <Login
        isOpen={showLogin}
        onClose={handleLoginClose}
        onLogin={handleLoginSubmit}
      />
    </div>
  );
}

export default App;
