import React from 'react'
import htmlImg from '../images/html_logo.png'
import cssImg from '../images/css_logo.png'
import reactImg from '../images/react_logo.png'
import jsImg from '../images/js_logo.png'

const Technologies = () => {
  return (
    <div className='container-technologies'>
        <h3>Front End Technologies</h3>
        <div className='div-technologies'>
            <img src={htmlImg} alt='html' />
            <img src={cssImg} alt='css' />
            <img src={jsImg} alt='js' />
            <img src={reactImg} alt='react' />
        </div>
    </div>
  )
}

export default Technologies