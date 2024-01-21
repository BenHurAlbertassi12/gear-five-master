import { Link } from 'react-router-dom';
import './Footer.css';

import ico from '../../assets/BENHURALBERTASSI.png';

export const Footer = () => {
  return (
    <footer className="fixed-footer">
      <div className="footer-total">
        <div className="img-p">
          <img src={ico} alt="G5-Desenvolvimento" className="img-g5-logo" />
          <p>©</p>
        </div>
        {/* <p className="p-desenvolvido">©DESENVOLVIDO POR G-5</p> */}
        <Link className="link-termos">Termos de uso</Link>
      </div>
    </footer>
  );
};
