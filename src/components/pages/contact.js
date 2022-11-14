
import './contact.css';
import {whatsappicon} from '../img/appimages';
import {contactNumber, contactEmail, companyLocal} from '../constants/texts'
import {whatsappLink} from '../constants/paths'

function Contact() {

    return(
        <div class='main-contact'>

            <div class='tree-contacts-info'>
            <p>Entre em contato</p>
            <p>Telefone: {contactNumber} <a href={whatsappLink}><img class='whatsapp-icon-contact'src={whatsappicon}/></a></p>
            <p>E-mail: {contactEmail}</p>
            <p>{companyLocal}</p>
            </div>
            
        </div>
    )
}

export default Contact;