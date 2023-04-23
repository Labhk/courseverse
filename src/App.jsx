import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homebody from './components/homebody';
import ImportPlaylist from './components/ImportPlaylist';
import Explore from './components/Explore';
import StartCourse from './components/StartCourse';
import VideoPlayer from './components/VideoPlayer';
import Login from './components/Auth/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-bbg'>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Homebody />}/>
        <Route path ="/import" element = {<ImportPlaylist />}/>
        <Route path ="/explore" element = {<Explore />}/>
        <Route path ="/start" element = {<StartCourse />}/>
        <Route path ="/player" element = {<VideoPlayer />}/>
        <Route path ="/login" element = {<Login />}/>
        
      </Routes>
    </BrowserRouter>

    </div>
    
  )
}

export default App
