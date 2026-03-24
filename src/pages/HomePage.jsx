import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RoomsSection from '../components/home/RoomsSection';
import PricingSection from '../components/home/PricingSection';
import AmenitiesSection from '../components/home/AmenitiesSection';
import AudienceSection from '../components/home/AudienceSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RoomsSection />
      <PricingSection />
      <AmenitiesSection />
      <AudienceSection />
    </>
  );
};

export default HomePage;
