import React from 'react'
import "./HomeTop.css"
import heroBcg from "../../images/hero-bcg.jpeg"
const HomeTop = () => {
  return (
    <div className='home-top'>
        <div className="left">
            <h1>Design Your <br />Comfort Zone</h1>
            <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, maxime obcaecati laborum laboriosam repellendus quaerat recusandae numquam dolorem saepe delectus harum provident possimus tempora cum voluptates adipisci reprehenderit! In, labore.</p>
        </div>
        <div className="right">
            <img src={heroBcg} alt="hero" />
        </div>
    </div>
  )
}

export default HomeTop
