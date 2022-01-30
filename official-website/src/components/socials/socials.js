import './socials.css';

export default function Socials() {
    return (
        <div className="socials">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                alt="facebook logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "inherit"}} />  

                <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" 
                alt="instagram logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "inherit"}} />  

            <img src="data:image/png;base64,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" 
                alt="linkedin logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "inherit"}} /> 

            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                alt="github logo" 
                className="social"
                style= {{ height: 20, width:20, backgroundColor: "inherit"}} /> 
        </div>
    )
}