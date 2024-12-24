import React from 'react';

export default function Contact(){
  return(
    <div className="scroll" id="contact-div">
      <h1>at beam, we want you to <i>beam</i></h1>
      <h2>BEAM</h2>
      <h3>noun</h3>
      <h5>1. a smile that glows, almost in comparison to the beaming sun</h5>
      <h5>2. a strong, supportive structure meant to hold up intense weight</h5>
      <p id="contact-para">You deserve to thrive. To beam means to be in the best possible state of mental well being for <i>you.</i> Keep in mind, this looks different for everyone. You deserve to feel strong and supportive, in the same way a beam is. And of course, you deserve to have a beaming smile on your face, always :)</p>
      <h1>about the team</h1>
      <div id="contact-cards">
        <ContactCard 
          img="/kwk.png"
          name="Kode with Klossy"
          desc="kodewithklossy.com"
          blurb="Kode with Klossy is a free two week coding camp for girls aged 13-18."
          />
        <ContactCard 
          img="/juhi.png"
          name="Juhi Chitkara"
          desc="juhic3162@gmail.com"
          blurb="Juhi is the founder of beam. She is a rising freshman at the University of Maryland studying Computer Science."
          />
        <ContactCard 
          img="/dhei.png"
          name="Deloitte Health Equity Institute"
          desc="deloitte.com"
          blurb="Deloitte Health Equity Institute is an organization that focuses on the health equity of all people"
          />
      </div>
      <h2>FEEDBACK?</h2>
      <h4>
        <a href="https://forms.gle/RNhMEzTkRVtkCs1e6" target="_blank">send it in to this form!</a>.
      </h4>
    </div>
  )
}

export function ContactCard(props){
  return(
    <div className="contact-card-div">
      <img src={props.img}/>
      <h3>{props.name}</h3>
      <h6>{props.desc}</h6>
      <p>{props.blurb}</p>
    </div>
  )
}