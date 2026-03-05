import { useNavigate } from 'react-router-dom'
import { useMovies } from '../store/zustand';

export default function MovieCard({img, year, runtime, gener, language, obj}) {
    
    const navigate = useNavigate();

    const addObj = useMovies((state) => state.addObj)
    
    function handleButton(){
        addObj(obj)
        navigate('/Details')
    }


    
  return (
    <div className="card-home">
        <div className="image-item">
            <img src={img} alt="img title" />
        </div>
        <div className="data-item">
            <p>{year}</p>
            <p>{runtime}</p>
            <p>{gener}</p>
            <p>{language}</p>
        </div>
        <button onClick={handleButton}>Select Seats</button>
    </div>
  )
}
