import React from 'react'
import HeroSection1 from "../../src/Component/HeroSection_1/Hero_Section1";
import Card from "../../src/Component/CardSection/Card";
import Testimonial from "../../src/Component/Testimonial/Testimonial";
import Mentor from "../../src/Component/MentorSection/Mentor";
import GetInTouch from "../../src/Component/Get-In-Touch/GetInTouch";


function Home() {
  return (
    <div className='Landing-page-content'>
      <HeroSection1 />
      <Card />
      <Testimonial />
      <Mentor />
      <GetInTouch />
    </div>
  );
}

export default Home