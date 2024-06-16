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
      <div className="text-center mt-5">
        <h2>Counter</h2>
        <span className="badge badge-primary m-2">{this.props.count}</span>
        <button className="btn btn-danger m-2" onClick={this.decrement}>-</button>
        <button className="btn btn-success m-2" onClick={this.increment}>+</button>
        <button className="btn btn-warning m-2" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
