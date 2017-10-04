import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import InputPreview from '../components/InputPreview';
import { setMessage } from '../actions/message';

class App extends Component {
  handleChange = (value) => {
    this.props.dispatch(setMessage(value));
  }
  render() {
    const { message } = this.props.messageReducer;
    return (
      <div>
        <InputPreview
          value={message}
          onChange={this.handleChange}
        />
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </div>
    );
  }
}
export default connect(state => state)(App);
