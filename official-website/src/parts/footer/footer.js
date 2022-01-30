import './footer.css';
import Socials from '../../components/socials/socials';

export default function Footer() {

    return (
        <div className="footer">
            <span className="copyright"></span>
            <span>
                <Socials />
            </span>
        </div>
    )
}