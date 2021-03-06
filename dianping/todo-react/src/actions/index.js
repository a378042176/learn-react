import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT
} from "./actionTypes";

let nextTodoId = 0;
/**
 * 新增待办事项
 * @param {*} text
 */
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

/**
 * 更改待办事项状态
 * @param {*} id
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
/**
 * 设置过滤状态
 * @param {*} filter
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
});
