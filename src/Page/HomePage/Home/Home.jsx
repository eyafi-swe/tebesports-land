import React from 'react';
import Navbar from '../../Sheard/Navbar';
import Banner from '../Banner/Banner';
import GameStoreCard from '../GameStoreCard/GameStoreCard';
import Sponsored from '../Sponsored/Sponsored';
import Publications from '../Publications/Publications';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import FooterBanner from '../FooterBanner/FooterBanner';
import Footer from '../../Sheard/Footer';
import BannerSlider from '../BannerSlider/BannerSlider';



const Home = () => {
    return (
        <div className='bg-[#292636] h-full'>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <GameStoreCard></GameStoreCard>
            {/* <Sponsored></Sponsored> */}
            <Publications></Publications>
            <Features></Features>
            <Contact></Contact>
            <FooterBanner></FooterBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;