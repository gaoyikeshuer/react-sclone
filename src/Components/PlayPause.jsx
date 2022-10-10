import React from 'react'
import {BsPlayCircleFill,BsPauseCircleFill} from 'react-icons/bs'

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => {
  return (
    isPlaying && activeSong?.title === song.title ?
    (<BsPauseCircleFill size={35} className="text-gray-300" onClick={handlePause}/>):(
    <BsPlayCircleFill  size={35} className="text-gray-300" onClick={handlePlay}/>)
  )
}

export default PlayPause