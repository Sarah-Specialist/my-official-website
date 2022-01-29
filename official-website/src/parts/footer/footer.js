import './footer.css';

export default function Footer() {

    return (
        <div className="footer">
            <span className="copyright"></span>
            <div className="socials">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                alt="facebook logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "white"}} />  

                <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" 
                alt="instagram logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "white"}} />  

            <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1643409937~hmac=dc677e23e6cdd2332fe373d4caee6c77" 
                alt="linkedin logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "white"}} /> 

            <img src="https://cdn-icons.flaticon.com/png/128/3291/premium/3291695.png?token=exp=1643409894~hmac=7c36ddeff3320bab591ac3c99a57d404" 
                alt="github logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "white"}} /> 
            </div>
        </div>
    )
}