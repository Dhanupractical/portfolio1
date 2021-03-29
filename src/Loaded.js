import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import CustomizedTimeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import ContactFormHeading from './components/ContactFormHeading';
import PortFolio from './components/PortFolio';
import ReactSocial from './components/ReactSocial';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function Loaded() {
    return (
      <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 400
              }
            },
            shape: {
              type: 'star',
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <ContactFormHeading/>
      <ContactForm/>
      <CustomizedTimeline/>
      <PortFolio/>
      <Contact/>
      <ReactSocial/>
      <Footer/>
      </>
    );
  }
  