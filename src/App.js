import React from "react";
import './App.css';
import GoogleMapReact from 'google-map-react';
import { Navbar, NavbarBrand, NavItem, Button, Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'react-lottie';
import animationData from './Components/the-beautiful-birds-of-heart-valley';

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
        <Navbar className='mynav' expand="md">
          <Container>
          <NavbarBrand className="navbrand" href="/">Heart of the Valley</NavbarBrand>
          <div className="my-lottie">
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
          <Col xs="7" md="5" lg="5">
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
          
          
          </Container>

        </Navbar>
      </nav>
    <Container>
      
    
    
    <div className='my-map' style={{ height: '50vh', width: '30vw' }}>
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
  </Container>
  </div>
);
}

export default App;