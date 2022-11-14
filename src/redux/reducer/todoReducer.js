import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/todoAction";

const initialState = {
  data: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);

      return {
        data: [...state.data, action.payload],
      };

    case DELETE_TODO:
      console.log(action.payload);
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };

    case UPDATE_TODO:
      state.data.splice(action.payload.index, 1, action.payload.data); //new
      return {
        ...state,
        data: state.data,
      };

    default:
      return state;
  }
}

export default todoReducer;
