const initialState = {
  someStateArr: [],
  someState: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'TEST_ACTION':
          return {
              ...state,
              someState: 'changing'
          }
      default: return state
  }
}

export default reducer;