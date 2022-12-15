import './App.sass';
import Main from '../Main/Main';

import Header from '../Header/Header';
import ProjectAddPopup from '../ProjectAddPopup/ProjectAddPopup'

function App() {

  return (
    <div className="App">
      <Header/>
      <Main>
      </Main>
      <ProjectAddPopup/>
    </div>
  );
}

export default App;
