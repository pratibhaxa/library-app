import { useEffect, useState } from "react";
import styled from "styled-components";
import Auth from "./Auth";
import { db, auth, storage } from '../config/firebase';
import { 
    getDocs, 
    collection, 
    addDoc, 
    deleteDoc, 
    updateDoc,
    doc } from 'firebase/firestore'
import { ref, uploadBytes } from "firebase/storage";

const Container = styled.div`
    text-align: center;
`;

const MovieList = styled.div`
    
`;

const AddMovie = styled.div`
    
`;

const Input = styled.input`
    
`;

function FirebaseFile() {
    //fetch movie
    const [movieList, setMovieList] = useState([]);

    const moviesCollectionRef = collection(db, "movies");

    //post movie
    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newReleaseDate, setNewReleaseDate] = useState(0);
    const [newMovieOscar, setNewMovieOscar] = useState(false);

    // update title
    const [updatedTitle, setUpdatedTitle] = useState("");

    // file upload (storage)
    const [fileUpload, setFileUpload] = useState([]);

    const getMovieList = async () => {
        // read data
        // set movie list
        try {
            const data = await getDocs(moviesCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), 
                id: doc.id
            }));
            // console.log({filteredData});
            setMovieList(filteredData);
        }
        catch (err) {
           console.error(err);
        }
    };

    useEffect(() => {
        getMovieList();
    }, []);

    const onSubmitMovie = async () => {
        try {
            await addDoc(moviesCollectionRef, {
                // id will be automatically generated when doc is added
                title: newMovieTitle, 
                releaseDate: newReleaseDate,
                receivedAnOscar: newMovieOscar,
                userId: auth?.currentUser?.uid,
            });
            getMovieList();
        }
        catch (err) {
            console.error(err);
        }
    };
    
    const deleteMovie = async (id) => {
        const movieDoc = doc(db, "movies", id);
        await deleteDoc(movieDoc);
        getMovieList();
    };

    const updateMovieTitle = async (id) => {
        const movieDoc = doc(db, "movies", id);
        await updateDoc(movieDoc, {title: updatedTitle});
        getMovieList();
    };

    const uploadFile = async () => {
        if(!fileUpload) return;
        // keep name similar to th euploaded file
        const filesFolderRef = ref(storage, `firebaseFiles/${fileUpload.name}`);
        try {
            await uploadBytes(filesFolderRef, fileUpload);
        }
        catch (err) {
            console.error(err);
        }
    }

    return(
        <Container>
            <AddMovie>
                <Input 
                    placeholder="Movie Title"
                    onChange={(e) => setNewMovieTitle(e.target.value)}
                />
                <Input 
                    placeholder="Release Date"
                    type={"number"}
                    onChange={(e) => setNewReleaseDate(Number(e.target.value))}
                />
                <label>Received an Oscar</label>
                <Input
                    type={"checkbox"}
                    checked={newMovieOscar}
                    onChange={(e) => setNewMovieOscar(e.target.checked)}
                />
                <button onClick={onSubmitMovie}>Submit Movie</button>
            </AddMovie>
            <MovieList>
                {movieList.map((movie) => (
                    <div>
                        <h1 style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
                        <p>Date: {movie.releaseDate}</p>
                        <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
                        <Input
                            placeholder="New Title"
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                         />
                         <button onClick={() => updateMovieTitle(movie.id)}>Update Title</button>
                    </div>
                ))}
            </MovieList>
            <div>
                <Input 
                    type={"file"}
                    onChange={(e) => setFileUpload(e.target.files[0])}
                />
                <button onClick={uploadFile}>Upload File</button>
            </div>
        </Container>
    )
}

export default FirebaseFile;