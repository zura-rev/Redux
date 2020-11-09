const redux = require('redux')

//state
const initialState = {
  counter: 0,
}

//reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      }
    case 'ADD_NUMBER':
      return {
        counter: state.counter + payload,
      }
    default:
      return state
  }
}

//action
const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

const addNumber = (number) => {
  return {
    type: 'ADD_NUMBER',
    payload: number,
  }
}

//store
const store = redux.createStore(reducer)

store.subscribe(() => console.log('state', store.getState()))
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(addNumber(159))
