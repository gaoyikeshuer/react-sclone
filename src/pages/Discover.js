import React from 'react'
import { genres } from '../asset/constant'
import SongCard from '../Components/SongCard'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import Loader from '../Components/Loader'
import Error from '../Components/Error'
import { useDispatch, useSelector } from 'react-redux'
import MusicPlayer from '../Components/MusicPlayer'



const Discover = () => {
  const dispatch = useDispatch();//what's it mean?
  const {activeSong, isPlaying } = useSelector((state) => state.player);//what's it mean?
    const {data, isFetching ,error} = useGetTopChartsQuery()
    console.log(isFetching);
    const genreTitle = 'Pop'
    if (isFetching) return <Loader title ="Loading songs ..."/>
    if (error) return <Error/> 
  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
       
            <select onChange={() =>{}}
            value =""
            className='bg-black text-gray-300 p-3 text-sm outline-none rounded-lg sm:mt-0 mt-5 '
            >
                {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>

        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
     {data?.map((song, i)=>(<SongCard key={song.key} isPlaying={isPlaying} activeSong={activeSong} data = {data} song= {song} i={i}/>))}
      {/* Add ? incase the data doesn't exist yet */}
        </div>
      
      <div><MusicPlayer/></div>
    </div>
  )
}

export default Discover