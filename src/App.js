import { useState }  from 'react';
import { moviesData }  from './data';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from './components/Info';

function App() {
  const [movie, setMovie] = useState(moviesData);
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  // handel delete

  const handelDelete = (id) => {
    const deleteMovie = [...movie].filter(el => el.id !== id);
    setMovie(deleteMovie);
  }

  //adding movie

  const handelAdd = (newMovie) =>{
    setMovie([...movie,newMovie]);
  };
   
  //handel text

  const handelText = (e) => setText(e.target.value);
   
  const handelRating = (x) => setRating(x); 
  const handelEdit=(editedMovie)=>{
    setMovie(movie.map(el=>el.id===editedMovie.id?{...el,...editedMovie}:el))
  }

  return (
    <div className="App">
      <Router>
          <Search rating={rating} text={text} handelText={handelText} handelRating={handelRating}/>
        <Routes>
         
          <Route path="/" element={ <div>
          <MovieList movie={movie.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rating)} del={handelDelete} handelEdit={handelEdit}/>
          <AddMovie add={handelAdd}/>
          </div>} />
          <Route path="/Info/:id" element={<Info movie={movie}/>} />
          
          
          </Routes>
         
      </Router>
    </div>
  );
}

export default App;
