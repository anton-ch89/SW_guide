import React from 'react';
import Navigation from "./Components/Navigation/Navigation";
import { GlobalStyle } from './Components/Style/Globalstyle';
import { usePhrases } from './Components/hooks/usePhrases';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './Components/Tabs/Main';
import Persons from './Components/Tabs/Persons';
import Starships from './Components/Tabs/Starships';
import Planets from './Components/Tabs/Planets';
import Films from './Components/Tabs/Films';
import { useFetch } from './Components/hooks/useFetchPersons';
import { usePages } from './Components/hooks/usePages';
import { useOpenModal } from './Components/hooks/useOpenModal';

function App() {

  
  const response = useFetch();
  const phrases = usePhrases();
  const pages = usePages();
  const openModal = useOpenModal();


  return (
    <Router>
      <GlobalStyle />
      <Navigation  />
      <Routes>
      <Route path='persons' element={<Persons {...response} {...pages} /> } />
      <Route path='starships' element={<Starships {...response} {...pages} />} />
      <Route path='planets' element={<Planets {...response} {...pages} {...openModal}/>} />
      <Route path='films' element={<Films {...response}/>} />
      <Route path='/' element={<Main {...phrases}/>} />
      </Routes>
    </Router>
  );
}

export default App;
