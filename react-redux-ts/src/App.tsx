import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

type PageType = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageType);
    setShowMenu(false);
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
        title="React Redux TS App" 
        onMenuClick={handleMenuClick}
        showMenu={showMenu}
        onNavClick={handleNavigation}
      />
      
      {showMenu && (
        <div className="mobile-menu">
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
              About
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
    </div>
  );
}

export default App;
