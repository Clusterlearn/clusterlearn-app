// import react from "react-dom"
import './App.css';
import Header from './Component/Header/Header'
import HeroSection1 from './Component/HeroSection_1/Hero_Section1';
import Card from './Component/CardSection/Card';
import Testimonial from './Component/Testimonial/Testimonial';
import Mentor from './Component/MentorSection/Mentor';
import GetInTouch from './Component/Get-In-Touch/GetInTouch';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <HeroSection1 />
      <Card />
      <Testimonial />
      <Mentor />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;