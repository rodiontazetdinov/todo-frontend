const initialState = {
  projects: [],
  projectsLoaded: false,
  isAddProjectPopupOpened: false
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
      case 'TOGGLE_ADD_PROJECT_POPUP_OPENED':
        return {
            ...state,
            isAddProjectPopupOpened: action.payload
        }
      default: return state
  }
}

export default reducer;