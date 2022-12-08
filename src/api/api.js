// создаём объект
// const user = { name: 'Ivan', age: 23 };
// // преобразовываем объект в строку и сохраняем в localStorage
// localStorage.setItem('user', JSON.stringify(user));
// // извлекаем данные и преобразовываем в объект
// const savedUser = JSON.parse(localStorage.getItem('user'));

// localStorage.setItem('storedUsers', JSON.stringify(users));
// ...
// var users = [];
// if (localStorage.getItem('storedUsers'))
//   users = JSON.parse(localStorage.getItem('storedUsers'));

export const getProjects = () => {
  if (localStorage.getItem('projects')) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
  }
  return '';

};

export const addProject = (id, title, todosCount) => {
  if (localStorage.getItem('projects')) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.push({id, title, todosCount});
    // нужно ли будет возвращать?
    return projects;
  }
  const project = [{id, title, todosCount}];
  localStorage.setItem('projects', JSON.stringify(project));
  // нужно ли будет возвращать?
  return project;
};
