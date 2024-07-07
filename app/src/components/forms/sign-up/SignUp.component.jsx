import { useState } from 'react';
import FormInput from '../form-input/FormInput.component';
import AuthButton from '../../buttons/AuthButton.component';
import { createUserBasicAuth, createUserAuthDoc } from '../../../utils/firebase/firebase.utils';
import './SignUp.styles.scss';

const defaultFormFields = { displayName: '', email: '', password: '', confirmPassword: '' };
const SignUp = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) { alert('passwords do not match') ; return; }
    try {
      const { user } = await createUserBasicAuth( email, password );
      await createUserAuthDoc(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form-container' onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required={true}
          autoComplete='off'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email'
          type='email'
          required={true}
          autoComplete='off'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required={true}
          autoComplete='off'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <FormInput
          label='Confirm Password'
          type='password'
          required={true}
          autoComplete='off'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <div className='sign-up-button-container'>
          <AuthButton type='submit'>Sign Up</AuthButton>
        </div>
      </form>
    </div>
  );
};
export default SignUp;