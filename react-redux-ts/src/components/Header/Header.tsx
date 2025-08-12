import React from 'react';
import './Header.css';

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
  showMenu?: boolean;
  onNavClick?: (page: 'home' | 'about' | 'contact') => void;
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'My App', 
  onMenuClick, 
  showMenu = false,
  onNavClick,
  onLoginClick
}) => {
  const handleNavClick = (page: 'home' | 'about' | 'contact') => {
    if (onNavClick) {
      onNavClick(page);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {onMenuClick && (
            <button 
              className="menu-button"
              onClick={onMenuClick}
              aria-label="Toggle menu"
            >
              <span className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </span>
            </button>
          )}
          <h1 className="header-title">{title}</h1>
        </div>
        
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="header-right">
          <button className="header-button" onClick={onLoginClick}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
