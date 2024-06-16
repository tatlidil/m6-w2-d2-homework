import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div className="counter-container text-center mt-5">
        <h2>Counter</h2>
        <div className="counter-display bg-primary text-white p-3">
          <span className="badge badge-light m-2">{this.props.count}</span>
          <button className="btn btn-light m-2" onClick={this.decrement}>-</button>
          <button className="btn btn-light m-2" onClick={this.increment}>+</button>
          <button className="btn btn-light m-2" onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
