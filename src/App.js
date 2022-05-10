import React from 'react';

import './App.css';
import image from './image/picture.png';

function App() {
  
  return (
    
    <div style={{marginTop:20 }} className="App">
     
<div className="picture"></div>
      <div>
      <div style={{border: 'solid 3px gray'}}>
          <h1 className="title_red">* Habiba El Aggoun *</h1>
          <br />
          <img src={image} alt=""  />
          <br/>
           <img src="img.jpg" alt="" />
           </div>

           <div style={{border: 'solid 3px gray'}}>
        <video width={700} height={400} controls>
          <source src="myvideo.mp4" type="video/mp4" />
        </video>
        </div>
        </div>
    </div>
  );
}

export default App;
