import Project from '../Project/Project';
import './Main.sass'


function Main() {
  return (
    <div className='main'>
      {/* временные прожекты для визуализации наполнения */}
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </div>
  );
}

export default Main;