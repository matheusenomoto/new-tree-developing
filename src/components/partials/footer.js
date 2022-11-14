import './footer.css';
import {rights, companyName} from '../constants/texts';

function Footer() {
  return (
    <div class='main-footer-bottom'>
        <footer class='webpage-footer'>{rights} <b>{companyName}</b></footer>
  </div>
  );
}

export default Footer;