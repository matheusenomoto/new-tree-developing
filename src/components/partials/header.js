import './header.css';
import {companyName} from '../constants/texts';
import {instagramUrl, facebookUrl, playstoreUrl} from '../constants/paths';
import {treedeveloping, instagramicon, facebookicon, playstoredeveloper} from '../img/appimages';



function Header() {
  return (
    <div class='main-header-top'>
    <a href='https://treedeveloping.com/' class='main-header-logo-link'><img class='main-header-logo'src={treedeveloping}/></a>
    <h1 class='main-header-company-name'>{companyName}</h1>
    <div class='social-midia-link'>
      <a href={instagramUrl} target="_blank"><img class='social-midia-link-icon' src={instagramicon}/></a>
      <a href= {facebookUrl} target="_blank"><img class='social-midia-link-icon' src={facebookicon}/></a>
      <a href={playstoreUrl} target="_blank"><img class='social-midia-link-icon' src={playstoredeveloper}/></a>
    </div>
  </div>
  );
}

export default Header;