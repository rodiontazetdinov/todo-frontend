export const getProjects = () => {
  if (localStorage.getItem('projects')) {
    console.log(localStorage.getItem('projects'));
    const projects = JSON.parse(localStorage.getItem('projects'));
    console.log(projects)
    return projects;
  }
  const project = [{id: '1', title: 'Ваш первый проект', todosCount: 0}];
  localStorage.setItem('projects', JSON.stringify(project));
  // нужно ли будет возвращать?
  return project;
  //или пустая страница
  // return '';

};

export const addProject = (id, title, todosCount) => {
  if (localStorage.getItem('projects')) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.push({id, title, todosCount});
    localStorage.setItem('projects', JSON.stringify(projects));
    // нужно ли будет возвращать?
    return projects;
  }

  const project = [{id, title, todosCount}];
  localStorage.setItem('projects', JSON.stringify(project));
  // нужно ли будет возвращать?
  return project;
};
