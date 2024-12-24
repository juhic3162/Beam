import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return(
    <div className="scroll" id="home-div">
      {/*flexbox and make img in line with the div*/} 
      
      <div id="home-container-one">
        <img src="/hands-bonding.jpg"/>
        <div>
          <h3>mental health matters.</h3>
          <p>With the growing rates of mental health disorders worldwide, no age group is spared by the impacts of mental health. </p>
          <Link to="/impact" className="home-div-link">learn more</Link>
        </div>
      </div>

      <div id="home-container-two">
        <h3 id="quote">“There is hope, even when your brain tells you there isn’t.” ― John Green</h3>
      </div>
      
      <div id="home-container-three">
        <h3>practice healthy strategies</h3>
        <div id="healthy-strat-blurbs">
          <HealthyStrat strat="mood tracking" blurb="being present in yourself and aware of your moods can help you effectivly manage your lifestyle choices"/>
          <HealthyStrat strat="journaling" blurb="journaling allows opportunity to better understand your mind and to find focus and clarity on your current circumstances"/>
          <HealthyStrat strat="goal setting" blurb="having goals within your life can fuel passion, foster optimisim, and overall allow for a positive mindset"/>
        </div>
        <Link to="/myDay" className="home-div-link">start now!</Link>
      </div>

      <div id="home-container-four">
        <h3>advocate.</h3>
        <p>As the numbers of anxiety and depression rates increase globally, it is vital that awareness is brought to mental health equity and our community makes a collective effort to bring change to this issue at hand. The change starts with us.</p>
        <Link to="/solutions" className="home-div-link">keep it going!</Link>
      </div>
    </div>
  )
}

export function HealthyStrat(props){
  return(
    <div className="strat-blurb-div">
      <h4>{props.strat}</h4>
      <p>{props.blurb}</p>
    </div>
  )
}

