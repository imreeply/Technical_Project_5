export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload: {
      title: payload,
      complited: false,
      id: Date.now(),
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function updateTodo(payload) {
  return {
    type: UPDATE_TODO,
    payload: payload,
  };
}
