import { useMovies } from '../store/zustand'

export default function Seats() {

    const currentMovie = useMovies((state) => state.currentMovie)
    const item = currentMovie[0]

  return (
    <div className='seats-page'>
        <div className='header'>
            <div className='left-header'>
                <h1>Choose your seats</h1>
                <p>Movie details</p>
                <p>Movie ID: {item.imdbID}</p>
            </div>
            <div className='right-header'>
                <div className='t-h'>
                    <div className='red'></div>
                    <p>Available</p>
                </div>
                <div className='t-h'>
                    <div className='green'></div>
                    <p>Taken</p>
                </div>
            </div>
        </div>
        <div className='grid'>
            
        </div>

    </div>
  )
}
