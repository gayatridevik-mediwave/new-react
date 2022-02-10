import { useState } from 'react'




const AddMovieForm = (props) => {
    const [newMovieName, setNewMovieName] = useState("");

    function handleChange(e) {
        // console.log(e.target.value);
        setNewMovieName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(newMovieName);
        setNewMovieName("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newMovieName} onChange={handleChange} />
            <input type="submit" value="Add item" />
        </form>
    );
}

export default AddMovieForm;