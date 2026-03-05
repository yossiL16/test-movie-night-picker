import './App.css'

function App() {

  async function getData(){
      const url = "http://localhost:3000/api/movies";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}


  return (
    <>
    <button onClick={getData}>get data</button>
    </>
  )
}

export default App
