import './Contact.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const handleUrl = (url) =>{
    return () => window.open(url, "_blank")
}
 
const Contact = () => {
    return ( 
    <div className='contact' id='contact'>
        <div className='contact-icons'>
       <FaInstagram color='white' size='30px' style={{padding:'1%'}} 
       onClick={handleUrl('https://www.instagram.com/sandrine_sop/')}/>

       <FaLinkedin color='white' size='30px' style={{padding:'1%'}} 
       onClick={handleUrl('http://linkedin.com/in/sandrine-sop-5a9a3a1b9')}/>
        </div>

    </div> 
    );
} 
 
export default Contact;