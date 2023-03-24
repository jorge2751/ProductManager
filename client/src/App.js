import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products/:id" element={<Detail />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
