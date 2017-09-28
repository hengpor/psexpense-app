import React from 'react';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

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
        <div className="form-group">
            <button className="btn full-width" onClick={(event) => this.handleClick(event)}>Login</button>
            </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginForm = connect(mapStateToProps)(LoginForm);
export { connectedLoginForm as LoginForm };

export default LoginForm;
