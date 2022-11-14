import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div class='main-header-nav-bar'>
            <div class='main-header-nav-button'><Link style={{ textDecoration: 'none' }} to="/"><span class='main-header-nav-button-text'>Home</span></Link></div>
            <div class='main-header-nav-button'><Link style={{ textDecoration: 'none' }} to="/portfolio"><span class='main-header-nav-button-text'>Portfólio</span></Link></div>
            <div class='main-header-nav-button'><Link style={{ textDecoration: 'none' }} to="/technologies"><span class='main-header-nav-button-text'>Tecnologias</span></Link></div>
            <div class='main-header-nav-button'><Link style={{ textDecoration: 'none' }} to="/contact"><span class='main-header-nav-button-text'>Contato</span></Link></div>
        </div>
    )
}

export default Navbar;