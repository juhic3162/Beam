//WEBCAM JSX
import React from 'react';

export default function Smile(){
    return(
        <div id="smile-div">
            <img id="logo-smile" src="/beam_name_logo.png"/>
            <div className="bubble">
                <h3 id="first-com">almost there...</h3>
                <div id="webcam-container">
                    <button id="smile-button" type="button" onClick={init} >click here and smile big!</button>
                </div> 
                <h3 id="sec-com">keep smiling...</h3>
            </div>
            <div id="label-container"></div> 
            <button id="skip-button" type="button" onClick={redirect}>or skip for now</button>
        </div>
    )
}


//WEBCAM JS

// TODO: Paste the link to your model between the "" on line 2!
export const URL = "https://teachablemachine.withgoogle.com/models/u9-UvD3qj/";


// Learn more about how the model works below

export let model, webcam, labelContainer, maxPredictions;
export let smileyCount = 0;


// Load the image model and setup the webcam
export async function init() {
    smileyCount=0;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    //remove smile button
    document.getElementById('webcam-container').removeChild(document.getElementById('webcam-container').lastElementChild);
    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

export async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
export async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        if(prediction[i].probability.toFixed(2)>.90 && prediction[i].className=="smiling face"){
            smileyCount++;
            if(smileyCount>30){
                console.log("SMILEY REACHED!");
                document.getElementById('webcam-container').removeChild(document.getElementById('webcam-container').lastElementChild);
                document.getElementById('webcam-container').appendChild(document.createElement('button'));
                document.getElementById('webcam-container').lastElementChild.innerHTML = "you're in!";
                setTimeout(redirect, 2000);
                i=maxPredictions;
            }else if(smileyCount==5){
                //add text on both side of the camera displaying "almost there" and then two seconds later "keep smiling"
                document.getElementById("first-com").style.visibility="visible";
                setTimeout(()=>document.getElementById("sec-com").style.visibility="visible", 2000);
            }
        }
        // labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

export function redirect(){
  window.location.href = '/#/home';
}