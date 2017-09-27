import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';

//import validateInput from '../../server/shared/validations/login'
//import { login } from '../../actions/authActions';

class LoginForm extends React.Component {
  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          field="identifier"
          label="Username / Email"
        />

        <TextFieldGroup
          field="password"
          label="Password"
          type="password"
        />
        <div className="form-group"><button className="btn full-width">Login</button></div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginForm;
