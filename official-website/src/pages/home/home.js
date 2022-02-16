import React from 'react';
import Card from '../../components/card/card';
import Profile from '../../components/profile/profile';
import ContactInfo from '../../components/contactInfo/contactInfo';
import Featured from '../../components/featured/featured';
import Services from '../../components/services/services';
import './home.css';

export default function Home() {
    return (
        <>
        <div className="home">
            <span className="card1">
                <Card 
                title={<Profile />}
                paragraph="Reach for your dreams with specialized design for your brand and company!
                Your website will be intuitive to use and responsive to the user." />
            </span>
            <span className="card2">
                <Card 
                title="You can get in touch now!"
                paragraph={<ContactInfo />} />
            </span>
        </div>
        <div>
            <Featured />
        </div>
        <div>
            <Services />
        </div>
        </>
    )
}