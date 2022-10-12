import React from 'react'
import Track from './Track'
import Controls from './Controls'
import Player from './Player'
import Seekbar from './Seekbar'
import VolumBar from './VolumBar'

const MusicPlayer = () => {
  return (
    <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
      
       <Track/>
        <div className='flex-1 flex flex-col items-center justify-center'>
        <Controls/>
        <Seekbar/>
        <Player/>

        </div>
        <VolumBar/>
    </div>
  )
}

export default MusicPlayer