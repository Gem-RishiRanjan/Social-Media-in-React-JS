import React from 'react';
import intro from './intro.svg';
import suit from './suit.svg';
import bat from './bat.png';
import house from './house.svg';
import heart from './heart.svg';
import img1 from './img1.webp';
import img2 from './img2.webp';
import "./timeline.css";

function Timeline() {
  return (
    <div className='time'>
        <div>
        <div className='intro'>
            <img src = {intro} style={{height: 15, width:15}} />
            <span className='title'>Intro</span>
            <br /><br />
        </div>
        <div className='intro'>
            <img src = {suit} style={{height: 15, width:15}} />
            <span className='title'>Professional <span className='inlinetitle'><u>Cricketer</u></span></span>
        </div>
        <div className='intro'>
            <img src = {suit} style={{height: 15, width:15}} />
            <span className='title'>Studied at <span className='inlinetitle'><u>Vishal Bharti Public School</u></span></span>
        </div>

        <div className='intro'>
            <img src = {suit} style={{height: 15, width:15}} />
            <span className='title'>Founder at <span className='inlinetitle'><u>One8 Pvt Ltd</u></span></span>
        </div>

        <div className='intro'>
            <img src = {bat} style={{height: 30, width:17}} />
            <span className='title'>82*(53) vs Pakistan <span className='inlinetitle'><u>T20 WorldCup 2022</u></span></span>
        </div>
        <div className='intro'>
            <img src = {bat} style={{height: 30, width:17}} />
            <span className='title'>82*(51) vs Australia <span className='inlinetitle'><u>T20 WorldCup 2016</u></span></span>
        </div>

        <div className='intro'>
            <img src = {house} style={{height: 30, width:17}} />
            <span className='title'>Lives in <span className='inlinetitle'><u>New Delhi, India</u></span></span>
        </div>

        
        <div className='intro'>
            <img src = {heart} style={{height: 30, width:17}} />
            <span className='title'>Married </span>
        </div>
        </div>
        <div className='sidetitle'>
            <img src = {img1} style={{width:"100%"}} /> <br /><br /><br />  
            <img src = {img2} style={{width:"100%"}}/>
        </div>
    </div>
  )
}

export default Timeline