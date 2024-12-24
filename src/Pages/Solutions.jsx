import React from 'react';

const hotlineNames = ["Crisis Support Services", "Teen Line", "National Eating Disorders Association Helpline", "National Association of Anorexia Nervosa and Associated Disorders (ANAD)", "LGBT National Hotline", "Trevor Lifeline", "TransLifeline", "NAMI HelpLine", "SAMHSA National Helpline", "S.A.F.E. Alternatives self-harm helpline", "Boys Town Crisis Hotline", "988 Suicide & Crisis Lifeline", "Thursday’s Child National Helpline", "Veterans Crisis Line", "Vet Center Call Center", "VA's National Caregiver Support Line"];
const hotlines = ["800-273-8255", "800-852-8336", "800-931-223", "888-375-7767", "888-843-4564", "866-488-7386", "877-565-8860", "1-800-950-6264", "800-662-4357", "800-366-8288", "800-448-3000", "988", "800-872-5437", "988 (Press 1)", "877-927-8387", "855-260-3274"];

export default function Solutions(){
  return(
    <div className="scroll" id="solutions-div">
      <h3>so how can we help?</h3>
      <p>It's important for all of us to do our part in making mental health more equitable for everyone. A couple of key methods of providing support for our community would be <i>advocating for the cause, checking in with your loved ones, and volunteering or creating your own  to support the movement. </i></p>
      <h4>advocating</h4>
      <ul>
        <li>Get involved with mental health petitions and rallies</li>
        <li>Raise awareness on social media</li>
        <li>Always be educated on mental health issues in your community</li>
      </ul>
      <h4>checking in with loved ones</h4>
      <ul>
        <li>Check in on your friends and family -- you never know what someone else is going through</li>
        <li>Ensure your close ones that you are there to listen and support them</li>
      </ul>
      <h4>volunteering or creating your own passion project</h4>
      <ul>
        <li>Reach out to local mental health organizations to find volunteering opportunities</li>
        <li>Raise awareness on a mental health cause that you find important</li>
        <li>Bring a chapter of a mental health organization to your local region</li>
      </ul>
      <h3>need urgent help? find a hotline to call for support</h3>
      <HotlinesCards
        names={hotlineNames}
        phones={hotlines}
        />
    </div>
  )
}

export function HotlinesCards({names, phones}){
  return(
    <>
       {names.map((name, index) => (
        <div className="card">
          <h1 key={index}>{name}</h1>
          <h3>{phones[index]}</h3>
        </div>
       ))}
    </>
  )
}