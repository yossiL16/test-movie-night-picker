import MovieCard from '../components/MovieCard'
import { useMovies } from '../store/zustand'

export default function Home() {

    const list = useMovies((state) => state.listMovies)

  return (
    <div className='home-container'>
        {list.map((item, index) => {
            <MovieCard 
            key={index}
            img={item.Images[0]}
            runtime={item.Runtime}
            gener={item.Genre}
            language={item.Language} />
        })}
    </div>
  )
}
