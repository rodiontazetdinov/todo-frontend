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