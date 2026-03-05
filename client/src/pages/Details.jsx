import { useMovies } from '../store/zustand'
import { useNavigate } from 'react-router-dom'

export default function Details() {

  const navigate = useNavigate();
  const currentMovie = useMovies((state) => state.currentMovie)
  const item = currentMovie[0]
  const removeObj = useMovies((state) => state.removeObj)

  function handleClick(){
    removeObj()
    navigate('/')

  }
  
  
  return (
    <div className='container-details'>
      <button onClick={handleClick} style={{position:'absolute', left:'0px', margin:'5px'}}>{'<-Back'}</button>
      <div className='title-details'>
        <h2>{item.Title}</h2>
        <p className='low-title'><strong>{`(${item.Year})`}</strong></p>
      </div>
      <p className='low-title'>Pick your seats and enjoy</p>

      <div className='poster-movie'>
        <div className='left-poster'>
          <div className='image-poster'>
            <img src={item.Images} alt="image" />
          </div>
          <button>Choose Seats</button>
        </div>
        <div className='right-poster'>
          <div className='top'>
            <p>IMDb: {item.imdbRating}</p>
            <p>Votes: {item.imdbVotes}</p>
            <p>Metascore: {item.Metascore}</p>
          </div>
          <div className='story'>
            <h2>Story</h2>
            <p>{item.Plot}</p>
          </div>
          <div className='middle'>
            <div>
              <h3>Movie ID</h3>
              <h4>{item.imdbID}</h4>
              </div>
            <div>
              <h3>Year</h3>
              <h4>{item.Year}</h4>
            </div>
          </div>
          <div className='low'>
            <button>Go to Seats</button>
            <button onClick={handleClick}>Back to list</button>
          </div>

        </div>
      </div>
    </div>
  )
}
