import './App.css';
import { Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';

function App() {
  return (
  
   <div className="App">
      Hello 
     <Routes>
      <Route path='/' element={<Discover/>}>

      </Route>
     </Routes>
    </div>

   
 
  );
}

export default App;
