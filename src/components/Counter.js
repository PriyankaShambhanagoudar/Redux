import { useDispatch, useSelector } from "react-redux";

import { counterActions } from '../store/index';

import classes from "./Counter.module.css";

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functional component

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {

    // (createReducer )dispatch({ type: 'increment' });
    //craeteSlice
    dispatch(counterActions.increment());

  };
  const increaseHandler = () => {
    // (createReducer ) dispatch({ type: "increase", amount: 10 });
    //craeteSlice
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    // (createReducer )dispatch({ type: "decrement" });;
    //craeteSlice
    dispatch(counterActions.decrement());

  };

  const toggleCounterHandler = () => {
    // (createReducer ) dispatch({ type: "toggle" });
    //craeteSlice
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//import { useDispatch, useSelector, connect } from 'react-redux'
//import { Component } from 'react'
//class based component

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   };

//   decrementHandler() {
//     this.props.decrement();
//   };

//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)} >Increment</button>
//           <button onClick={this.decrementHandler.bind(this)} >Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);

