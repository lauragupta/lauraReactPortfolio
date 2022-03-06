import React, { useState } from 'react';

export default function Contact() {
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function onblurName(event) {
    setErrorName(event.target.value === "") 
  }

  function onblurEmail(event) {
    setErrorEmail(event.target.value === "") 
  }
  
  function onblurMessage(event) {
    setErrorMessage(event.target.value === "") 
  }

  return (
    <div className="column col-8 offset-1">
      <h1>Contact Me</h1>
      <form className="form contact-form">
        <div className="form-group">
            <label for="contactName">name:</label>
            <input className="form-control" type="text" id="signUpName" onBlur={(event) => onblurName(event)}/>
            {errorName && (
              <div className="">
                Please provide a valid name.
              </div>
            )}
        </div>
        <div className="form-group">
            <label for="contactEmail">email:</label>
            <input className="form-control" type="email" id="contactEmail" onBlur={(event) => onblurEmail(event)} />
            {errorEmail && (
              <div className="">
                Please provide a valid email address.
              </div>
            )}
        </div>
        <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" type="text" id="message" onBlur={(event) => onblurMessage(event)} />
            {errorMessage && (
              <div className="">
                Please provide a message.
              </div>
            )}
        </div>
        <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
