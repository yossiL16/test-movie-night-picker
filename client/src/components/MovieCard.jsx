export default function MovieCard({img, runtime, gener, language}) {

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
        <button>Select Seats</button>
    </div>
  )
}
