import './App.css';
import { Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Summary } from './pages/Summary';
import { DoneToDo } from "./pages/DoneToDo";
import { OpenToDo } from "./pages/OpenToDo"
import { Details } from './pages/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Summary />}/>
        <Route path='/done' element={<DoneToDo />}/>
        <Route path='/done/:todoId' element={<Details />}/>
        <Route path='/open' element={<OpenToDo />}/>
        <Route path='/open/:todoId' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
