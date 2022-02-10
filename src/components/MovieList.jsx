function MovieList(props) {
    function handleDelete(id) {
        props.onDelete(id);
    }
    return (
        < div >
            <ul>
                {props.movies.map(function (movie) {
                    return (
                        <li key={movie.id}> {movie.name} {""}
                            <button onClick={() => handleDelete(movie.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div >
    );

}

export default MovieList;
