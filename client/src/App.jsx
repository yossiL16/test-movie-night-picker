import './App.css'
import { useMovies } from './store/zustand'

function App() {


const list = useMovies((state) => state.listMovies)

function handle(){
  console.log(list);
  
}

  return (
    <>
    <button onClick={handle}>get item</button>
    </>
  )
}

export default App
