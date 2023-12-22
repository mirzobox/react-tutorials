- useReducer hook
  const initialValue = { counter: 0 }

  function reducer(state, action) {

  switch(action.type) {
  case "inc":
  return { counter: state.counter + action.step }
  case "dec":
  return { counter: state.counter - action.step }
  default:
  return state
  }

  }
  const [state, dispatch] = useReducer(reducer, initialValue)
