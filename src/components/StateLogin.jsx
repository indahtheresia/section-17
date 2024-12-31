import { useState } from 'react';
import Input from './Input.jsx';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValue.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]: true
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event.target.value)} value= {enteredValue.email} onBlur={() => handleInputBlur('email')} error={emailIsInvalid && 'Please enter a valid email!'} />
        
        <Input label="Password" id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)} value= {enteredValue.password} onBlur={() => handleInputBlur('password')} error={passwordIsInvalid && 'Please enter a valid password!'} />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
