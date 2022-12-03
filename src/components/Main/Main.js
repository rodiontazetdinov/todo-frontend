import Project from '../Project/Project';
import Tasks from '../Tasks/Tasks';
import Projects from '../Projects/Projects';

import './Main.sass'
import { Route, Routes } from 'react-router-dom';


function Main() {
  return (
    <div className='main'>
      {/* временные прожекты для визуализации наполнения */}
      <Project></Project>
      <Project></Project>
      <Project></Project>
      <Routes>
        <Route
          path={'/tasks'}
          element={<Tasks/>}
        />
        <Route
          path={'/'}
          element={<Projects/>}
        />
      </Routes>
    </div>
  );
}

export default Main;