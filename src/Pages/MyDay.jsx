import React from 'react';

export default function MyDay(){
  return(
    <div id="myDay-div" className="scroll">
      <h1>create a healthier day with <i>myDay</i></h1>
      <h4>how do you feel?</h4>
      <div id="myDay-buttons">
        <MoodButton id="happy" img="/mood-icons/happy.png"/>
        <MoodButton id="happyneutral" img="/mood-icons/happyneutral.png"/>
        <MoodButton id="neutral" img="/mood-icons/neutral.png"/>
        <MoodButton id="sadneutral" img="/mood-icons/sadneutral.png"/>
        <MoodButton id="sad" img="/mood-icons/sad.png"/>
      </div>
      <h4>journal, release your thoughts</h4>
      <input id="journal" placeholder="start typing..."/>
      <h4>set goals</h4>
      <Goal />
      <Goal />
      <Goal />
    </div>
  )
}

export function MoodButton(props){
  // this.MoodClicked = this.MoodClicked.bind(this);
  return(
    <button type="button" className="mood-button">
      <img src={props.img}/>
    </button>
  )
}

// export function MoodClicked(e){
//   console.log(e.target.id);
//   document.getElementById(e.target.id).style.backgroundColor = "green";
// }

export function Goal(){
  return(
    <div id="goal">
      <input type="checkbox"/>
      <input placeholder="type your goal here"/>
    </div>
  )
}


/*const buttonPressed = e => {
  console.log(e.target.id);  // Get ID of Clicked Element
} */