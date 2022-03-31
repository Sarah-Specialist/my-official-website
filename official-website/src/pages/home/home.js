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
                paragraph="Specialist in Web Development"/>
            </span>
            <span className="card2">
                <Card 
                title="You can get in touch now"
                paragraph={<ContactInfo />} />
            </span>
        </div>
        <div className="featured">
            <Featured />
        </div>
        <div className="servicesDiv">
            <Services />
        </div>
        </>
    )
}