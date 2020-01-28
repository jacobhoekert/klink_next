import React, {useState} from 'react';
import {db, auth} from '../firebaseConfig';
import {CoinContext} from '../contexts/CoinContext';

const SignupDialog = ({progress, setProgress}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    password2: ''
  });
  const [error, setError] = useState("");

  const updateForm = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  const validate = () => {
    let {password, password2, email, name, number} = form;
    number = number.replace(/\D/g,'');

    
    if(name.length == 0){
      //Name is empty
      return "Please enter your name";
    }
    if(!email.includes("@") || !email.includes(".") || email.length < 5){
      //Email is invalid
      return "Please enter a valid email";
    }
    if(number.length == 0){
      //Number is empty
      return "Please enter your phone number";
    }
    if(number.length != 10 && number.length != 11 && number.length != 12 && number.length != 13){
      //Number is invalid
      return "Please enter a valid phone number";
    }
    if(password == ""){
      //Empty passwords
      return "Please enter a password";
    }
    if(password.length <= 6){
      //Password is less than 6 letters
      return "Password must be at least 6 characters";
    }
    if(password !== password2){
      //Passwords don't match
      return "Passwords do not match";
    }
    
    return null;
  }

  const handleSubmit = (onFinish) => {
    const error = validate();
    if(error == null){
      db.collection("treasure_hunt").add({
        email: form.email,
        name: form.name,
        number: form.number,
      });
      localStorage.setItem("treasure", true);
      try {
        auth.createUserWithEmailAndPassword(form.email, form.password).then((result) => {
          console.log(result);
        });
      } catch (e) {console.log(e)}
      setProgress(4);
      onFinish();
    }else{
      //Show the error
      setError(error);
    }
  }

  return(
    progress == 3 ?
    <CoinContext.Consumer>
      {({active, found, addOne}) => (
        <div id="account-container">
          <div id="info-card">
            <div id="header">
              <h3>Create an Account!</h3>
              <i className="material-icons" onClick={() => {setProgress(0);}}>close</i>
            </div>
            <div id="content">
              <input id="account-name" name="name" type="name" value={form.name} onChange={(e) => updateForm(e)} placeholder="First & Last Name"/>
              <input id="account-email" name="email" type="email" value={form.email} onChange={(e) => updateForm(e)} placeholder="Email Address"/>
              <input id="account-number" name="number" type="tel" value={form.number} onChange={(e) => updateForm(e)} placeholder="Phone Number"/>
              <input id="account-password" name="password" type="password" value={form.password} onChange={(e) => updateForm(e)} placeholder="Password"/>
              <input id="account-password-confirm" name="password2" type="password" value={form.password2} onChange={(e) => updateForm(e)} placeholder="Confirm Password"/>
              <p id="error-message">{error}</p>
            </div>
            <div id="buttons">
              <button onClick={() => {setProgress(2);}}>Back</button>
              <button onClick={() => {handleSubmit(() => {addOne('done')});}}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </CoinContext.Consumer> : <></>
  )
}

export default SignupDialog