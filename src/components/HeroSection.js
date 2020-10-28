import React from 'react';


import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/Children.mp4' autoPlay loop muted /> 
      <h1>WELCOME TO MATHARE VICTORY</h1>
      <p>Do you believe in the future for kids?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SUPPORT US
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          WATCH DOCUMENTARY <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
