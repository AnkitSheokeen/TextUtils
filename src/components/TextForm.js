import React, {useState} from 'react'
import propTypes from 'prop-types'

  

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
}
const handleClearClick =() => {
    setText("");
}
const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
}
     //default value for text = Enter text here
    const [text, setText] = useState('');

  return (
    <>
    
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{ 0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
}

TextForm.propTypes ={
    heading : propTypes.string
}
