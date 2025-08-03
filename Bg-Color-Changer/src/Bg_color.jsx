import React, { useState } from 'react';

const Bg_color = () => {
  const [color, setColor] = useState('lightblue');
  
  return (
    <div style={{ 
      backgroundColor: color, 
      minHeight: '100vh',
      padding: '20px',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="btn">
        <button onClick={() => setColor("red")} style={{backgroundColor: 'red', color: 'white'}}>Red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "green", color: 'white'}}>Green</button>
        <button onClick={() => setColor("blue")} style={{backgroundColor: "blue", color: 'white'}}>Blue</button>
        <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button> 
        <button onClick={() => setColor("orange")} style={{backgroundColor: "orange"}}>Orange</button> 
        <button onClick={() => setColor("purple")} style={{backgroundColor: "purple", color: 'white'}}>Purple</button>
        <button onClick={() => setColor("lightblue")} style={{backgroundColor: "lightblue"}}>Light Blue</button>
        <button onClick={() => setColor("white")} style={{backgroundColor: "white", color: 'black'}}>White</button>
        <button onClick={() => setColor("black")} style={{backgroundColor: "black", color: 'white'}}>Black</button>
        <button onClick={() => setColor("pink")} style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={() => setColor("gray")} style={{backgroundColor: "gray", color: 'white'}}>Gray</button>
        <button onClick={() => setColor("brown")} style={{backgroundColor: "brown", color: 'white'}}>Brown</button>
        <button onClick={() => setColor("cyan")} style={{backgroundColor: "cyan"}}>Cyan</button>
        <button onClick={() => setColor("lime")} style={{backgroundColor: "lime"}}>Lime</button>
        <button onClick={() => setColor("teal")} style={{backgroundColor: "teal", color: 'white'}}>Teal</button>
        <button onClick={() => setColor("navy")} style={{backgroundColor: "navy", color: 'white'}}>Navy</button>
        <button onClick={() => setColor("maroon")} style={{backgroundColor: "maroon", color: 'white'}}>Maroon</button>
      </div>
    </div>
  );
}

export default Bg_color;