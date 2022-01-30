import React from 'react';
import Card from '../../components/card/card';
import Profile from '../../components/profile/profile';
import ContactInfo from '../../components/contactInfo/contactInfo';
import Featured from '../../components/featured/featured';

export default function Home() {
    return (
        <>
        <div className="home">
            <Card 
            title={<Profile />}
            paragraph="Reach for your dreams with specialized design for your brand and company!
            Your website will be intuitive to use and responsive to the user." />
            <Card 
            title="Get in touch with me!"
            paragraph={<ContactInfo />} />
        </div>
        <div>
            <Featured />
        </div>
        </>
    )
}