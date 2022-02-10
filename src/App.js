import { useState } from "react";

//components
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';

function App() {
  const initialState = [
    { id: 1, name: 'The Matrix' },
    { id: 2, name: 'The Dark Knight' },
    { id: 3, name: 'Ironman' },
  ];

  const [movieList, setMoviesList] = useState(initialState);

  function handleDelete(id) {
    setMoviesList((prev) => prev.filter((i) => i.id != id));
  }
  function handleMovieAdd(name) {
    const addmovie = {
      id: new Date().getTime(),
      name: name,
    };
    const newMovies = [...movieList];
    newMovies.push(addmovie);

    setMoviesList(newMovies);
  }
  return (
    <div className="App">
      <AddMovieForm onAdd={handleMovieAdd} />
      <MovieList movies={movieList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
