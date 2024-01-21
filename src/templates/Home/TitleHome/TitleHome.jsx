import './TitleHome.css';
import './h3-sub-title.css';
import './logo.css';

import logo from '../../../assets/BENHURALBERTASSI.png';

export const TitleHome = () => {
  return (
    <div className="aligncontent">
      <div className="div-intro">
        <h1 className="text-focus-in">Portifólio</h1>
      </div>
      <img src={logo} className="img-logo-title scale-up-center" />
      <div className="div-intro">
        <h2 className="h3-sub-title">Desenvolvedor Full-Stack</h2>
      </div>
    </div>
  );
};
