import Form from './components/Form';
import { useState , useCallback ,useEffect} from 'react';
import MoviesCollection from './components/MoviesCollection';

function App() {
  let [movies , setMovies] = useState([])

  const fetchMovies = useCallback (async()=>{
      let response = await fetch("https://simple-database-d4a3b-default-rtdb.firebaseio.com/niru.json")
      let data = await response.json()
      const loadedMovie = []
      for(const key in data) {
        loadedMovie.push({
          id: key,
          actor : data[key].actor,
          collection : data[key].collection,
          moviename : data[key].moviename
        })
      }
       setMovies(loadedMovie)
  },[])
  
   


  let movieDetailsHandler = async (movieDetails)=> {
    await fetch("https://simple-database-d4a3b-default-rtdb.firebaseio.com/niru.json", {
      method : "POST",
      body : JSON.stringify(movieDetails)
    })
  }
  useEffect(()=>{
    fetchMovies()
  },[movieDetailsHandler])
  return (
    <div>
       <Form onSubmitForm ={movieDetailsHandler}/>
       <MoviesCollection  datas={movies} />
    </div>
  );
} 

export default App;
