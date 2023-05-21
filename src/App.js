import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Detailspage from './components/Detailspage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:country_name' element={<Detailspage />} />
      </Routes>
    </div>
  );
}

export default App;
