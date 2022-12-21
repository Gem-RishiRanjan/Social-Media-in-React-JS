import React from 'react'
import v1 from './v1.webp';
import v2 from './v2.jfif';
import v3 from './v3.webp';
import v4 from './v4.avif';
import v5 from './v5.jpg';
import v6 from './v6.avif';
import v7 from './v7.webp';
import v8 from './v8.jpg';
import v9 from './v9.avif';
import v10 from './v10.webp';
import './photos.css';

function Photos() {
  return (
    <div className='imagecol'>
        <div className='imagerow'>
            <img src = {v1} className='imgclass' />
            <img src = {v6} className='imgclass' />
            <img src = {v3} className='imgclass' />
        </div>
        <br />
        <div className='imagerow'>
            <img src = {v4} className='imgclass' />
            <img src = {v2} className='imgclass' />
            <img src = {v5} className='imgclass' />
        </div>
        <br />
        <div className='imagerow'>
            <img src = {v7} className='imgclass' />
            <img src = {v8} className='imgclass' />
            <img src = {v9} className='imgclass' />
        </div>
        <br />
        <div className='imagerow'>
            <img src = {v10} className='imgclass' />

        </div>
        <br />
    </div>
  )
}

export default Photos