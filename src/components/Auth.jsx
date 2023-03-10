import styled from "styled-components";
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from "react";

const Container = styled.div`
    
`;

const Input = styled.input`
    
`;

const Button = styled.button`
    
`;

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (err) {
            console.error(err);
        }
    };

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
        
        </Container>
    )
}

export default Auth;