import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
// 이건 counter 에 관한 Slice 이다.
const counterSlice = createSlice({
  name: "coutner", // 식별자
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // Reducer를 만들어서 사용할 때는 아래와 같이 상태를 변경하는 것은 안된다고 했다.
      // 그러나 redux-toolkit 패지키 내부적으로 알아서 항상 새로운 객체를 생성하여 상태를 변경할 수 없는 코드로 변환하여 집어 넣는다.
      // 그러므로 개발자는 상태의 불변성이나 반복된 객체를 복사할 필요도 없어지게 되므로 신경쓴게 줄어든다.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCountner(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 컴포넌트에서 action을 dispatch 하기위해 export 해줘야한다.
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
