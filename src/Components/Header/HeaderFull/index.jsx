import { Link } from 'react-router-dom';
import './HeaderFull.css';

export const HeaderFull = () => {
  return (
    <div>
      <nav className="Total">
        <div className="pages">
          <Link className="linka" to="/">
            PÁGINA INICIAL
          </Link>
          <Link className="linka" to="/contact">
            CONTATO
          </Link>
        </div>
        <div className="phone">
          <a className="linka phone-linka" href="tel:+5524999998028">
            (24) 99999-8028
          </a>
        </div>
      </nav>
    </div>
  );
};
