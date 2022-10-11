import './App.css';
import MusicPlayer from './Components/MusicPlayer';
import { Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';



function App() {
  // const {activeSong} = useSelector((state) => state.player)
  return (
  
   <div className="relative flex">
    <div className='flex-1 flex flex-col bg-gradient-to-br from-white to-slate-500"'>
    <div className='px-6 h-[calc(100vh)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
      {/* h-[calc(100vh-72px)] that's why there is a blank at the bottom */}
        <div className='flex-1 h-fit pb-40'>
        <Routes>
      <Route path='/' element={<Discover/>} />

     </Routes>
        </div>
    
      </div>
    </div>
  
    
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#1212] backdrop-blur-lg rounded-t-3xl z-10">
       <MusicPlayer />
        </div>
    
    </div>

   
 
  );
}

export default App;
