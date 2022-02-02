import { useState }  from 'react';
import { moviesData }  from './data';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';

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

  return (
    <div className="App">
       <Search rating={rating} text={text} handelText={handelText} handelRating={handelRating}/>
       <MovieList movie={movie.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rating)} del={handelDelete}/>
       <AddMovie add={handelAdd}/>
    </div>
  );
}

export default App;
