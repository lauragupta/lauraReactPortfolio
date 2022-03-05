import React from 'react';

export default function Contact() {
  return (
    <div class="column col-8 offset-1">
      <h1>Contact Me</h1>
      <form class="form contact-form">
        <div class="form-group">
            <label for="contactName">name:</label>
            <input class="form-control" type="text" id="signUpName" />
        </div>
        <div class="form-group">
            <label for="contactEmail">email:</label>
            <input class="form-control" type="email" id="contactEmail" />
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" type="text" id="message" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
