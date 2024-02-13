import React from 'react';
import './Skills.css';
import html from './skillimage/html.png';
import css from './skillimage/css.png';
import js from './skillimage/Js.png';
import java from './skillimage/java.webp';
import node from './skillimage/node.png';
import react from './skillimage/react.png';
import python from './skillimage/py.png';
import mysql from './skillimage/icon-7.png';

function Skills() {
  return (
    <div className="container about" id="about">
      <h4 className="stat-title">My Skills</h4>
      <div className="about-container">
        <div className="right-about">
          <div className="abt-text">
            <div className="image-container">
              <img src={html} alt='HTML'/>
            </div>
            <h3 className="large-text">HTML</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={css} alt='CSS'/>
            </div>
            <h3 className="large-text">CSS</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={js} alt='JavaScript'/>
            </div>
            <h3 className="large-text">JavaScript</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={java} alt='Java'/>
            </div>
            <h3 className="large-text">Java</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={node} alt='Node.js'/>
            </div>
            <h3 className="large-text">Node.js</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={react} alt='React'/>
            </div>
            <h3 className="large-text">React</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={python} alt='Python'/>
            </div>
            <h3 className="large-text">Python</h3>
          </div>

          <div className="abt-text">
            <div className="image-container">
              <img src={mysql} alt='MySQL'/>
            </div>
            <h3 className="large-text">MySQL</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;


// import React from 'react';
// import './Skills.css';
// import html from './skillimage/html.png';
// import css from './skillimage/css.png';
// import js from './skillimage/Js.png';
// import java from './skillimage/java.webp';
// import node from './skillimage/node.png';
// import react from './skillimage/react.png';
// import python from './skillimage/py.png';
// import mysql from './skillimage/icon-7.png';

// function Skills() {
//   return (
//     <div className="container about" id="about">
//       <h4 className="stat-title">My Skills</h4>
//       <div className="about-container">
//         <div className="right-about">
//           <div className="abt-text box">
//             <img src={html} alt='HTML'/>
//             <h3 className="large-text">HTML</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={css} alt='CSS'/>
//             <h3 className="large-text">CSS</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={js} alt='JavaScript'/>
//             <h3 className="large-text">JavaScript</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={java} alt='Java'/>
//             <h3 className="large-text">Java</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={node} alt='Node.js'/>
//             <h3 className="large-text">Node.js</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={react} alt='React'/>
//             <h3 className="large-text">React</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={python} alt='Python'/>
//             <h3 className="large-text">Python</h3>
//           </div>

//           <div className="abt-text box">
//             <img src={mysql} alt='MySQL'/>
//             <h3 className="large-text">MySQL</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;
