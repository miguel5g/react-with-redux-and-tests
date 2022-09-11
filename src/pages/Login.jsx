import React from 'react';
import { connect } from 'react-redux';
import { updateUserData } from '../redux/actions/userActions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { dispatch, history } = this.props;

    // updateUserDataDispatch(email, password);
    dispatch(updateUserData(email, password));
    history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" onChange={this.handleChange} />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          data-testid="password"
          onChange={this.handleChange}
        />

        <button type="button" onClick={this.handleClick}>
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserDataDispatch: (email, password) => dispatch(updateUserData(email, password)),
});

export default connect()(Login);
