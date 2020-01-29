import React, { useState, useEffect } from 'react'
import validator from 'validator';
import {db} from '../firebaseConfig';
import '../styles/email_form.scss';
import newId from '../utils/newId';

const EmailForm = (props) => {
  const [ inputValue, setInputValue] = useState('');
  const [ isValidEmail, setEmailValidity ] = useState([false]);
  const [ hasSubmitted, setHasSubmitted ] = useState(false);
  
  const [ waitlistID, setWaitlistID] = useState('');
  const [ waitlistFormID, setWaitlistFormID] = useState('');
  const [ emailID, setEmailID] = useState('');

  useEffect(() => {
    setWaitlistID(newId());
    setWaitlistFormID(newId());
    setEmailID(newId());
  }, []);

  useEffect(() => {
    setEmailValidity(validator.isEmail(inputValue));
  }, [inputValue]);
  
  const handleInputChange = (e) => {
    const {value} = e.currentTarget;
    console.log(value);
    setInputValue(value);
    setHasSubmitted(false);
  }

  const resetForm = () => {
    document.getElementById("waitlist-form").reset();
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (isValidEmail) {
      resetForm();
      db.collection(props.databaseCollection).add({
        email: inputValue
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }
  }

  const DisplayMessage = () => {
    if(hasSubmitted && isValidEmail) {
      return <div className="display-message">{props.successMessage}</div>
    } else if(hasSubmitted && !isValidEmail) {
      return <div className="display-message" style={{color: "red"}}>Please enter a valid email address</div>
    } else {
      return <div className="display-message"></div>
    }
  }

  return (
    <div id={waitlistID} className="waitlist">
      <form id={waitlistFormID} className="waitlist-form" onSubmit={handleSubmit}> 
        <div className="hidden-label">
          <label htmlFor={emailID}>Email Address</label>
        </div> {/* Hidden – Here for screen readers */}
        <input 
          id={emailID}
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        <button type="submit">
          <i className="material-icons">arrow_forward</i>
        </button>
      </form>
      <DisplayMessage />
    </div>
  )
}

export default EmailForm