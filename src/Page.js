import React from 'react'
import './index.scss';
import './App.css';


export default function Page() {
  return (
    <div style={{width:"100%", height:"100%"}}>
      <div className='intro'>
        <h2 style={{ textAlign: "center"}}>
          Hi!
        </h2>
        <h2 style={{ textAlign: "center"}}>
          My name is Matt.
        </h2>
      </div>
    </div>
  )
}