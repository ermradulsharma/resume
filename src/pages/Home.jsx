import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/main_img_grey.png'
import bgBlur from '../assets/images/bg_blur.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';

import Type from '../components/Home/Type';
import data from "../components/database/localDB.json";
import linkdin from "../assets/icons/linkdin_ic.svg";
import twitter from "../assets/icons/twitter_ic.png";
import insta from "../assets/icons/insta_ic.png";
import down_ic from "../assets/icons/down_ic.png";
import LetsConnect from '../components/LetsConnect';
import { MdBusinessCenter } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const home = data.home;
  return (
    <section >
      <Container fluid className="home-section" id="home">
      {/* <img src={bgBlur} alt="" srcset="" className='test'/> */}
     
        <Container className="home-content" >
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
              Hello ! I'm {home.name}.{" "}
              </h1>

              

              <div style={{textAlign: "left" }} className='jobPos'>
                <Type />
                
              </div>

              

              <div>
              <p style={{color: "#B8B8B8", paddingTop: 5 }}>{home.compactAbout}</p>
              </div>

              <div 
              className="downBtn"
              style={{cursor:'pointer'}}
              >
              <MdBusinessCenter />
                <span style={{marginLeft: '5px',cursor:'pointer'}}
                onClick={()=>{navigate("/contact")}}
                >Hire Me</span>
            </div>
    
            <div className="social_icons">
               {/* <a href="https://www.linkedin.com/in/sauryadeep-roy-252461229"><img src={linkdin} alt={""} /></a> 
                <img src={twitter} alt=""/>
                <img src={insta} alt=""/> */}
            </div>
     
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className='pic'>
            
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
       
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
      <About />
      <LetsConnect />
    </section>
    
  );
}

export default Home