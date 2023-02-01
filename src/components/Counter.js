import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch(); // useDispatch : action 을 통해 상태 변경을 위해
  const counter = useSelector((state) => state.counter.counter); // useSeletor : Central Data Store 에서 어떠한 상태를 getState() 하기위해
  const show = useSelector((state) => state.counter.showCounter);
  // redux가 저장소에서 상태변경이 일어나면 이 컴포넌트를 re-rendering 함 (즉, 항상 최신의 상태를 화면에 나타낼 수 있다.)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //dispatch(counterActions.increase({ amount: 10 })); // (redux-toolkit 이 만듬) {type : 고유식별자 , payload : {amount : 10}}
    // ../store/index => increse => state.counter = state.counter + action.payload.amount;
    dispatch(counterActions.increase(10)); // (redux-toolkit 이 만듬) {type : 고유식별자 , payload : 10}
    // ../store/index => increse => state.counter = state.counter + action.payload;
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCountner());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*

/////////////////////////////////
////Class 기반 컴포넌트 작성법////
////////////////////////////////

import { Component } from "react";
import { connect } from "react-redux";
// 사용할 클래스에 react의 Component 상속시킴
class Counter extends Component {
  // Class 기반 컴포넌트에서는 Hooks를 사용하지 못함
  // 그래서 connect()() 함수로 redux에 연결 해야한다.

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// 관례적으로 이름을 이렇게 쓴다.
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    // key = props name
    // value = setting action
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchProps)(Counter);

*/
