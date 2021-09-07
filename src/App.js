import React from "react";
import './App.css';
import GoogleMapReact from 'google-map-react';
import { Navbar, NavbarBrand, NavItem, Button, Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'react-lottie';
import animationData from './Components/the-beautiful-birds-of-heart-valley';
import video from "./pexels-rostislav-uzunov-5680034.mp4";

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

function App() {
  const defaultProps = {
    center: {
      lat: 37.8272,
      lng: -122.2913
    },
    zoom: 5
  };
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <nav>
        <Container>
        <Navbar className='mynav' expand="md">
          
          <NavbarBrand className="navbrand" href="/">Heart of the Valley</NavbarBrand>
          <div className="my-lottie">
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
          <Col xs={6} sm={6} md={6} lg={3}>
          <NavItem className='navitems'>
            <Button className="navbutton" href="/">link </Button>
          </NavItem>
          <NavItem className='navitems'>
            <Button className="navbutton" href="/">link </Button>
          </NavItem>
          <NavItem className='navitems'>
            <Button className="navbutton" href="/">link </Button>
          </NavItem>
          </Col>
        </Navbar>
        </Container>
      </nav>
      

      <Container>
      <Row>
      <div className='my-map' style={{ height: '70vw', width: '100vw' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={37.8272}
          lng={-122.2913}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </Row>
    <Row>
    
    </Row> 
    </Container>
    <video width="100vw" opacity="60" autoplay="true" loop muted >
        <source src={video} type="video/mp4" />

          Sorry, your browser doesn't support embedded videos.
      </video>  
  </div>
  
);
}

export default App;