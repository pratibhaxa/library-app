import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../config/firebase";
import Header from "./Header";
import signupimage from '../images/signupimage.png'
import GoogleButton from 'react-google-button'

const Container = styled.div`
    background-color: #fff7f2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Bottom = styled.div`
    flex: 1;
    display: flex;
    /* padding-top: 50px; */
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
`;

const Image = styled.img`
    width: 100%;
    height: 913px;
`;

const Form = styled.div`
    flex: 1;
    display: flex;
    /* background-color: gray; */
`;

const Wrapper = styled.div`
    margin: auto;
`;

const Label = styled.label`
    font-size: large;
`;

const Input = styled.input`
    width: 250px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #dfdfdf;
    margin: 20px;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
`;

const H3 = styled.h3`
    
`;

const Button = styled.button`
    margin-left: 80px;
    text-align: center;
    width: 120px;
    height: 40px;
    border-radius: 30px;
    border-style: none;
    cursor: pointer;
    background-color: #a29a91;
    &:hover {
        background-color: #786c62;
        color: white;
    }
`;

const UserDetails = styled.div`
    
`;

const H4 = styled.h4`
    padding-left: 130px;
`;

function SigninPage () {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

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

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            // CREATING PROBLEMS SOLVE IT
            window.open("https://library-app-c6bf9.web.app/home",'_self');
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Header />
            <Bottom>
                <ImageContainer>
                    <Image src={signupimage}/>
                </ImageContainer>
                <Form>
                    <Wrapper>
                        {/* <H3> Register User </H3> */}
                        <Label>Email ID</Label>
                        <br/>
                        <Input 
                            placeholder="Enter Email ID"
                            onChange={(e) => {
                                setLoginEmail(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Password</Label>
                        <br/>
                        <Input 
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setLoginPassword(e.target.value);
                            }}
                        />
                        <br/>
                        <br/>
                        <Button onClick={login}>Sign In</Button>
                        <br/>
                        <br/>
                        <H4>OR</H4>

                        {/* <br/>
                        <br/>
                        <br/>
                        {user?.email != null ? 'Signed up successfully, Please proceed to login' : 'Please try again in a few minutes'} */}
                        <GoogleButton style={{marginLeft: "30px"}} onClick={signInWithGoogle}>Sign In With Google</GoogleButton>
                        
                        {/* {user?.email != null ? history.pushState('/') : 'Please try again in a few minutes'} */}
                        
                        {/* <br/>
                        <br/>
                        <Button onClick={logout}> Log Out </Button>
                        <UserDetails>
                            <H4> User Logged In : </H4>
                            {user?user.email: "Not Logged In"}
                            {user.email}
                            {user?.email != null ? 'Signed up successfully, Please proceed to login' : 'Please try again in a few minutes'}
                            {user?.email == null ? 'Please try again in a few minutes' : null}
                        </UserDetails> */}
                    </Wrapper>
                </Form>
            </Bottom>
        </Container>
    )
}

export default SigninPage;