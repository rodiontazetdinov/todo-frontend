export const loadProjects = (projects) => {
  return {
      type: 'LOAD_PROJECTS',
      payload: projects
  }
}

export const projectsLoaded = () => {
  return {
      type: 'PROJECTS_LOADED'
  }
}

export const toggleAddProjectPopupOpened = (isOpen) => {
  return {
      type: 'TOGGLE_ADD_PROJECT_POPUP_OPENED',
      payload: isOpen
  }
}