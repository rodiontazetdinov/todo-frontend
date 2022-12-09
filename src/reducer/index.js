const initialState = {
  projects: [],
  projectsLoaded: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOAD_PROJECTS':
          return {
              ...state,
              projects: action.payload
          }
      case 'PROJECTS_LOADED':
        return {
            ...state,
            projectsLoaded: true
        }
      default: return state
  }
}

export default reducer;