import React, {useState} from 'react'

export default function About(props) {


// #1E3F53


  return (
    <div className='container' style={props.color}>
      <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={props.color} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.color}>
              <strong>TextUtils gives you a way to analyze your text</strong> quickly an efficiently. Be it word count, character count, uppercase, lowercase and many more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={props.color} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.color}>
              <strong>TextUtils is a free Character counter tool</strong> Provides instant character count & word count statistics for a given text. TextUtils report the number of words and charachter. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={props.color} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.color}>
              <strong>This word counter software works in any web browsers</strong> scuh as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, exel documnet, pdf documnet, <code>Essay</code>, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}