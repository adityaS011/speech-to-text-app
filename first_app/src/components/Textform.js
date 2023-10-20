import React, { useImperativeHandle, useState } from 'react'

export default function Textform(props) {

  const handelUpClick = () => {
    console.log("Uppercase clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  

  const handelLoClick = () => {
    console.log("Lowercase clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    
  }

  const handleOnChange = (event) => {
    console.log("On Change")
    setText(event.target.value)
  }
  const [text, setText] = useState('This is the text');


  return (
    <>

    <div className='container my-2'>
      <h1 for="myBox" className="form-label">{props.heading}</h1>
      <div >
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
      </div>
      <button  className="btn btn-primary m-2" onClick={handelUpClick} >Convert to Uppercase</button>
      <button  className="btn btn-primary m-2" onClick={handelLoClick} >Convert to Lowercase</button>
    </div>

    <div className='container my-3'>
      <h1> Your Text Summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
      
    </div>
    </>

  )
}
