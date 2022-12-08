export const loadProjects = (projects) => {
  return {
      type: 'LOAD_PROJECTS',
      payload: projects
  }
}