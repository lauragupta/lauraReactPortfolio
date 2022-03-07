import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function onblurName(event) {
    setErrorName(event.target.value === "") 
  }

  function onblurEmail(event) {
    const isEmptyString = event.target.value === "";
    const isValidEmail = validateEmail(event.target.value)
    setErrorEmail(isEmptyString || !isValidEmail);
  }
  
  function onblurMessage(event) {
    setErrorMessage(event.target.value === "") 
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className='container'>
      <div className="row">
        <h1 className='column offset-1'>Contact Me</h1>
        <div className='column col-10 col-md-5 offset-1'>
          <form className="form contact-form">
            <div className="form-group">
                <label htmlFor="contactName">name:</label>
                <input className="form-control" type="text" onBlur={(event) => onblurName(event)}/>
                {errorName && (
                  <div className="formErr">
                    Please provide a valid name.
                  </div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="contactEmail">email:</label>
                <input className="form-control" type="email" onBlur={(event) => onblurEmail(event)} />
                {errorEmail && (
                  <div className="formErr">
                    Please provide a valid email address.
                  </div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" type="text" id="message" onBlur={(event) => onblurMessage(event)} />
                {errorMessage && (
                  <div className="formErr">
                    Please provide a message.
                  </div>
                )}
            </div>
            <div className="form-group">
                <button className="contactSubmit btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="otherContact column col-10 col-md-5 offset-1">
            <h5 className="main-info">Or You can contact me at...</h5>
            <h6 className="main-info" ><a href="mailto:codinglauragupta@gmail.com">codinglauragupta@gmail.com</a></h6>
            <h6 className="main-info">‪(408)479-4045‬</h6>
        </div>
      </div>
    </div>
  );
}
