// import logo from './logo.svg';
// import '../../index.sass'
import './App.sass';
import Main from '../Main/Main';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProjects } from '../../actions';
import * as api from '../../api/api.js';


import Header from '../Header/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjects(api.getProjects()));
  }, []);

  return (
    <div className="App">
      <Header/>
      <Main>
      </Main>


    </div>
  );
}

export default App;
