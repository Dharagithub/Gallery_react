import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import one from './Images/download.png';
import two from './Images/download1.png';
import three from './Images/download2.png';
import four from './Images/image1.png';
import five from './Images/images4.png';
import six from './Images/images.png';
import seven from './Images/images2.png';
import eight from './Images/images3.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Heading() {
  return (

    <h1 class="heading">Image Gallary</h1>
  )
}
function Images() {
  return (
    <div class="boxes">
      <div style={{display:'flex', justifyContent:'center' , gap:'20px'}}>
        <div class="box">
          <img src={one} alt="" srcset="" />
          <h3>German Shepherd</h3>
        </div>
        <div class="box">
          <img src={seven} alt="" srcset="" />
          <h3>Afghan Hound</h3>
        </div>
        <div class="box">
          <img src={eight} alt="" srcset="" />
          <h3>Labrador Retriever</h3>
        </div>
        <div class="box">
          <img src={two} alt="" srcset="" />
          <h3>Pomeranian</h3>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center' , gap:'20px', margin:'20px'}}>
        <div class="box">
          <img src={three} alt="" srcset="" />
          <h3>Pembroke Welsh Corgi</h3>
        </div>
        <div class="box">
          <img src={four} alt="" srcset="" />
          <h3>Japanese Spitz</h3>
        </div>
        <div class="box">
          <img src={five} alt="" srcset="" />
          <h3>Chow Chow</h3>
        </div>
        <div class="box">
          <img src={six} alt="" srcset="" />
          <h3>Pug</h3>
        </div>
      </div>
    </div>
  )
}
root.render(
  <div>
    <Heading></Heading>
    <Images></Images>
  </div>

);
