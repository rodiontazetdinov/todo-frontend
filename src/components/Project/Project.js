import './Project.sass'


function Project({ id, title, todosCount }) {
  return (
    <li className='project'>
      <h2 className='project__title'>
        {title}
      </h2>
      <p className='project__counter'>Todos: {todosCount}</p>
    </li>
  );
}

export default Project;