import SignUp from '../../components/forms/sign-up/SignUp.component';
import SignIn from '../../components/forms/sign-in/SignIn.component';
import ForgotAuth from '../../components/forms/forgot-auth/ForgotAuth.component';
import './Auth.styles.scss';

const Authentication = () => {
  return (
    <div className='auth'>
      <div>
        <div className='auth-container'>
          <SignIn />
          <div className='auth-container-spacer' />
          <div className='auth-container'>
            <ForgotAuth />
          </div>
        </div>
      </div>
      <div className='auth-container'>
        <SignUp />
      </div>
    </div>
  );
};
export default Authentication;