import React, { useState } from 'react';
import './HeaderMedium.css';

import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const HeaderMedium = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="right-aligned">
      <button onClick={toggleVisibility} className={`right-aligned-button`}>
        {isVisible ? (
          <FiX className="icon-react" />
        ) : (
          <FiMenu className="icon-react" />
        )}
      </button>

      {isVisible && (
        <ul className={`medium-pages ${isVisible ? 'ativado' : 'desativado'}`}>
          <hr className="vaihr" />
          <hr className="vaihr" />
          <li className="medium-li">
            <Link className="mediumlink" to="/">
              PÁGINA INICIAL
            </Link>
          </li>
          <hr className="vaihr" />
          <hr className="vaihr" />
          <li className="medium-li">
            <Link className="mediumlink" to="/contact">
              CONTATO
            </Link>
          </li>
          <hr className="vaihr" />
          <hr className="vaihr" />
        </ul>
      )}
    </div>
  );
};
