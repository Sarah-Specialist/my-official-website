import './services.css';

export default function Services() {
    return (
        <>
            <h2>Services</h2>
            <div className="services">
                <div className="service">
                    <img src="https://image.pngaaa.com/950/5230950-middle.png" 
                        alt="paint" 
                        width="80" 
                        height="80" 
                        style={{backgroundColor: "ghostwhite"}} />
                    <p>Create a new product</p>
                </div>
                <div className="service">
                    <img src="https://icon-library.com/images/change-icon-png/change-icon-png-19.jpg" 
                        alt="improve" 
                        width="80" 
                        height="80" 
                        style={{backgroundColor: "ghostwhite"}} />
                    <p>Improve your existing website</p>
                </div>
                <div className="service">
                    <img src="https://cdn3.iconfinder.com/data/icons/basicolor-computer-tech/24/105_battery_charging-512.png" 
                        alt="paint" 
                        width="80" 
                        height="80" 
                        style={{backgroundColor: "ghostwhite"}} />
                    <p>Supercharge your growth</p>
                </div>
            </div>
        </>
    )
}