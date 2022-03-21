import './featured.css';

export default function Featured() {

    return (
    <div className="featured">
        <h2>What's new?</h2>
        <h3>Learn Flexbox with Sarah</h3>
        <div>
            <img src="https://github.com/Sarah-Specialist/learn-flex/blob/52b15f95d257592d2c6bc6c5ea959c50d9842c29/learn-flex/public/image.jpg"
            alt="featured" 
            height="250"
            width= "500" />
            <p>https://learn-flexbox-with-sarah.netlify.app/</p>
        </div>
    </div>
    )
}