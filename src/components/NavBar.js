import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Text...Utils</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <div className='d-flex'>
                <button className="btn bg-primary mx-1" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-secondary mx-1"onClick={() => {props.toggleMode('secondary')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-success mx-1" onClick={() => {props.toggleMode('success')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-danger mx-1" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-warning mx-1" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-info mx-1" onClick={() => {props.toggleMode('info')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-white mx-1" onClick={() => {props.toggleMode('white')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
                <button className="btn bg-dark mx-1" onClick={() => {props.toggleMode('dark')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></button>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div> */}
            </div>
        </div>
    </nav>
  )
}
