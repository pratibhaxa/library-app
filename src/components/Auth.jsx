import styled from "styled-components";
import { db, auth, googleProvider } from '../config/firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signOut } from 'firebase/auth';
import { useState } from "react";

const Container = styled.div`
    text-align: center;
`;

const Input = styled.input`
    width: 300px;
`;

const Button = styled.button`
    
`;

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userList, setUserList] = useState("");

    // const moviesCollectionRef = collection(db, "movies");

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password, {
                email: "",
                password: "",
            });
            
        }
        catch (err) {
            console.error(err);
        }
    };

    // const isEmailPresent = async () => {
    //     try {
    //         // get email from database
    //         const data = await getDocs(moviesCollectionRef);
    //         const filteredData = data.docs.map((doc) => ({
    //             ...doc.data(),
    //             id: doc.id,
    //         }));
    //         console.log(filteredData[0].userId);
    //         // filteredData.
    //         // console.log(get)
    //         // setEmailCheck(emailFromDb.email);
    //     }
    //     catch (err) {
    //         console.error(err);
    //     }
    // }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        }
        catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                placeholder="Password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signIn}>Sign In</Button>
            <br/>
            <br/>
            <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            <br/>
            <br/>
            <Button onClick={logout}>Logout</Button>
            {/* <Button onClick={isEmailPresent}>Is Email Present in DB</Button> */}
        </Container>
    )
}

export default Auth;