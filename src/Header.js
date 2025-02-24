import React, { useState } from 'react';
import './Header.css';
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
    document.querySelector('header').classList.toggle('dark', newTheme === 'dark');
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.toggle('dark', newTheme === 'dark'));
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.classList.toggle('dark', newTheme === 'dark');
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>احسب زكاتك</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <Link to="/Main">
            <li><a href="#home">الرئيسية</a></li>
          </Link>
          <li><a href="#contact">تواصل معنا</a></li>
          <li>
            {theme === 'light' ? (
              <FaMoon size={24} onClick={toggleTheme} />
            ) : (
              <FaSun size={24} onClick={toggleTheme} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
