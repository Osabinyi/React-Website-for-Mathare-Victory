import React from 'react';
import '../../src/App.css';
import CardItem from '../components/CardItem';

export default function Products() {
  return (
  /* <h1 className='products'>PRODUCTS</h1> */
  <div className='cards'>
      <h1>Programs in the School</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/school-8.jpeg'
              text='It is a program that allows to talk out their minds'
              label='We Talk'
              path='/services'
            />
            <CardItem
              src='images/school-4.jpeg'
              text='Atleast the kids get a meal'
              label='Feeding Program'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Kissmart.jpg'
              text='Professionals visit the school to talk about their professions and guide the kids'
              label='Mentorship'
              path='/services'
            />
            <CardItem
              src='images/Sisters.jpg'
              text='We distribute Sanitary Pads to the single mothers and girls in the community'
              label='Sanitary Pads initiative'
              path='/products'
            />
            <CardItem
              src='images/School.jpg'
              text='It is a program for teaching kids about technology'
              label='Teen Tech'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
