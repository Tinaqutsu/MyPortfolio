import React from 'react'
import './Skills.css' // ----------------import style
// ------Import skills images 
import html from './skillimage/html.png';
import css from './skillimage/css.png'
import js from './skillimage/Js.png'
import java from './skillimage/java.webp'
import node from './skillimage/node.png'
import react from './skillimage/react.png'
import python from './skillimage/py.png'



function Skills() {
  return (
    // Skills images
    <div className='skills-page'>
        <h5>Skills</h5>

        <div className="html-img">
        <img src={html} alt="image-html" />
        <h3 class="large-text">html</h3>
        </div>

        <div className="html-img">
        <img src={css} alt="image-css" />
        <h3 class="large-text">CSS</h3>
        </div>

        <div className="html-img">
        <img src={js} alt="image-js" />
        <h3 class="large-text">Javascript</h3>
        </div>

        <div className="html-img">
        <img src={java} alt="image-java" />
        <h3 class="large-text">Java</h3>
        </div>


        <div className="html-img">
        <img src={node} alt="image-node" />
        <h3 class="large-text">Node.js</h3>
        </div>

        <div className="html-img">
        <img src={react} alt="image-react" />
        <h3 class="large-text">React.js</h3>
        </div>

        <div className="html-img">
        <img src={python} alt="image-python" />
        <h3 class="large-text">Python</h3>
        </div>
    
    </div>
    
  )
}


export default Skills;