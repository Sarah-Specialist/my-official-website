import Socials from '../socials/socials';
import './contactInfo.css';

export default function ContactInfo() {
    return (
        <div style={{backgroundColor: "inherit"}}>
            <p style={{backgroundColor: "inherit"}}>Email: sarah.specialist@gmail.com</p>
            <p className="directSocials"><Socials /></p>
        </div>
    )
}