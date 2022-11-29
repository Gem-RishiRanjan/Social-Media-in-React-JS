import React from 'react';

import './about.css';
function About() {
  return (
    <div className='aboutdiv'>
        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Name:&nbsp;</span>
            <span>Virat Kohli</span><br /></div>

        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Friends:&nbsp;</span>
            <span>259</span><br /></div>

        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Sex:&nbsp;</span>
            <span>Male</span><br /></div>

        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Birthday:&nbsp;</span>
            <span>5 November 1988</span><br /></div>

        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Relationship Status:&nbsp;</span>
            <span>Married</span><br /></div>

        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>School:&nbsp;</span>
            <span>Vishal Bharti Public School</span><br /></div>

        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Email:&nbsp;</span>
            <span>viratkohli@gmail.com</span><br /></div>
        
        <div className='aboutelement'>
            <span style={{fontWeight:"bold"}}>Phone no:&nbsp;</span>
            <span>9828291045</span>
    </div></div>
  )
}

export default About