import './featured.css';

export default function Featured() {

    return (
    <div className="featured">
        <h2>Check out my latest project!</h2>
        <div>
            <img src="https://i.ibb.co/8zdvQ01/image.jpg"
            alt="featured" 
            height="250"
            width= "500"
            style={{border: "1px solid white"}} />
            <p>https://sarah-specialist.github.io/my-official-website/</p>
        </div>
    </div>
    )
}