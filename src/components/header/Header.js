import React, { useState } from 'react';
import "./Header.scss";

import Footer from '../footer/Footer';
import Main from '../main/Main';

import { FiMenu } from "react-icons/fi";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <aside className={isSidebarOpen ? " close" : "aside"}>
        <nav>
          <a href="/" className="logo-link">
            <h1 className="title">Admin</h1>
            <h1 className="close-title">A</h1>
          </a>
        </nav>
        <div className="bottom-list">
          {/* Buraya kenar çubuğu içeriği gelecek */}
        </div>
      </aside>
      <header>
        <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FiMenu />
        </button>
        <div className="header__person">
          <h2 className="header__title">John Doe</h2>
          <svg
            className="header__person-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
        </div>
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default Header;
