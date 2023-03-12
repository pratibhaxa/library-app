import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
    
} from "firebase/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../config/firebase";

const Container = styled.div`
    text-align: center;
`;

const Register = styled.div`
    
`;

const H3 = styled.h3`
    
`;

const Input = styled.input`
    
`;

const Button = styled.button`
    
`;

const Login = styled.div`
    
`;

const UserDetails = styled.div`
    
`;

const H4 = styled.h4`
    
`;

const Logout = styled.div`
    
`;

function UserCred() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])
    

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        }
        catch (err) {
            console.error(err);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        }
        catch (err) {
            console.error(err);
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return(
        <Container>
            <Register>
                <H3> Register User </H3>
                <Input 
                    placeholder="Email"
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                    }}
                />
                <Input 
                    placeholder="Password"
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }}
                />
                <Button onClick={register}>Create User</Button>
            </Register>
            <Login>
                <H3> Login </H3>
                <Input 
                    placeholder="Email"
                    onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}
                />
                <Input 
                    placeholder="Password"
                    onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }}
                />
                <Button onClick={login}> Login </Button>
            </Login>
            <UserDetails>
                <H4> User Logged In : </H4>
                {user?user.email: "Not Logged In"}
            </UserDetails>
            <Logout>
                <H3> Log Out </H3>
                <Button onClick={logout}> Log Out </Button>
            </Logout>
        </Container>
    )
}

export default UserCred;