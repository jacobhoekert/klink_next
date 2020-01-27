import React, {useState} from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/contact.scss';

const Contact = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const updateForm = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
    console.log(form);
  }

  const resetForm = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: 'POST',
      url: 'https://us-central1-spare-change-cc572.cloudfunctions.net/sendMail',
      data: form
    }).then(function() {
      console.log("Email successfully sent!");
      resetForm();
      setHasSubmitted(true);
      setIsLoading(false);
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  const DisplayMessage = () => {
    if(hasSubmitted) {
      return <div className="display-message">Thank you for contacting us! We will get back to you shortly.</div>
    }else {
      return <div className="display-message"></div>
    }
  }

  return (
    <section id="contact">
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <h1>Contact Us</h1>
        <p id="description">If you would like to ask a question about fundraising, share a story about something that worked for you, or just say hi, send us a message through the form below!</p>
        <div id="questions">
          <div id="names">
            <input name="firstName" value={form.firstName} onChange={(e) => updateForm(e)} placeholder="First Name"/>
            <input name="lastName" value={form.lastName} onChange={(e) => updateForm(e)} placeholder="Last Name"/>
          </div>
          <input id="contact-email" name="email" value={form.email} onChange={(e) => updateForm(e)} placeholder="Email Address"/>
          <textarea rows="5" id="contact-message" name="message" value={form.message} onChange={(e) => updateForm(e)} placeholder="Message"></textarea>
          <div id="submit-row">
            <DisplayMessage />
            <button type="submit">
              { isLoading ?
                  <ClipLoader size={20} color={"#7831d4"} loading={true}/>
                : <><p>Send</p> <i className="material-icons">arrow_forward</i></>
              }
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact