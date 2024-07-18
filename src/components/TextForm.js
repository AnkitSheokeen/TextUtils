import React, {useState} from 'react'
import propTypes from 'prop-types'

  

export default function TextForm(props) {
    
const handleUpClick = () => {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convered to uppercase!","success");
}
const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convered to Lowercase!","success");
}
const handleClearClick =() => {
    setText("");
    props.showAlert("Text Cleared!","success");
}
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed","success");
}
const handleCopy = () => {
    // var text = document.getElementById("myBox");     not needed
    // text.select();                                   not needed as we are using navigator.clipboard
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copyed to clipboard","success");
}


const handleOnChange = (event) => {
    // so that what ever is written will be stored in text and also shows in screen
    setText(event.target.value);
}

     //default value for text = ''
    const [text, setText] = useState('');

  return (
    <>
    
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>Try TextUtils - word counter, character counter, remove extra spaces</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#5095BF':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>clear Extra Spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} character</p>
        <p>{ 0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    
    </>
  )
}

TextForm.propTypes ={
    heading : propTypes.string
}
