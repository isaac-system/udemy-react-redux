import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication";
import counterReducer from "./counter";

// createStore vs configureStore
// 공통점 : 둘 다 store를 만들어 준다.
// 차이점 : configureStore 는 여러개의 reducer를 쉽게 하나로 합칠 수 있다.
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

/* redux-toolkit을 사용하지 않고 작성하는 방법!
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // 완전히 새로운 객체인 새 snapshot을 항상 반환해야 한다.
    // 즉, 기존 state 새 state 덮어쓴다. (over-write)
    // 의문 - args 로 얻은 state를 반환하는 대신에 아래처럼 하면 안될까?
    // state.counter++;
    // return state;
    // 현재 작동 안함, 다른 버튼 눌러서 re-rendering 시킬 때 state값이 변경되어 있긴함
    // 객체의 경우 참조한 객체와는 같을 수 있지만 새로만든 객체와는 참조값이 다르므로 다르다.
    // ex) console 창 // [] === [] -> false
    // 절대 기존 state를 변경하지마
    // 대신 새로운 state 객체를 반화하여 재정의해

    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};
*/
