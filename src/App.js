import React from 'react';
import Navigation from "./Components/Navigation/Navigation";
import { GlobalStyle } from './Components/Style/Globalstyle';
import { usePhrases } from './Components/hooks/usePhrases';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Tabs/Main';
import Persons from './Components/Tabs/Persons';
import Starships from './Components/Tabs/Starships';
import Planets from './Components/Tabs/Planets';
import Films from './Components/Tabs/Films';
import { useFetch } from './Components/hooks/useFetchPersons';
import { useOpenModal } from './Components/hooks/useOpenModal';

function App() {


  const response = useFetch();
  const phrases = usePhrases();
  const openModal = useOpenModal();

  return (
    <Router>
      <GlobalStyle />
      <Navigation {...phrases} />
      <Routes>
        <Route path='persons' element={<Persons {...response} {...openModal}/>} />
        <Route path='starships' element={<Starships {...response} {...openModal}/>} />
        <Route path='planets' element={<Planets {...response}  {...openModal} />} />
        <Route path='films' element={<Films {...response} {...openModal}/>} />
        <Route path='/' element={<Main {...phrases} />} />
      </Routes>
    </Router>
  );
}

export default App;
