import Socials from '../socials/socials';
import './contactInfo.css';

export default function ContactInfo() {
    return (
        <div className="contactInfo">
            <p className="information">I would love to hear from you!</p>
            <p className="information">sarah.specialist@gmail.com</p>
            <p className="directSocials"><Socials /></p>
        </div>
    )
}