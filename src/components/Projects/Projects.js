import * as api from '../../api/api.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../../actions/index.js';

import Project from '../Project/Project.js';
import AddBtn from '../AddBtn/AddBtn.js';

import './Projects.sass';

function Projects() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(loadProjects(api.getProjects()));
  }, []);
  const { projects, projectsLoaded } = useSelector(state => state);

  const renderProjectsList = (arr) => {
    if (arr.length === 0) {
        return (
          <h5 className='projects__hint'>Добавьте Ваш первый проект</h5>
        )
    }

    return arr.map(({id, title, todosCount}) => {
        return (
            <Project
              key={id}
              title={title}
              todosCount={todosCount}
              id={id}
            />
        )
    })
  };

  const elements = renderProjectsList(projects);
  console.log(projects);

  return (
    //пока оставить варинт с заглушкой
    // projectsLoaded?
    <ul className='projects'>
      {elements}
      <AddBtn/>
    </ul>
    // :
    // <h5> Заглушка при загрузке </h5>
  );
}

export default Projects;