import Axios from "axios";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth, googleProvider } from "../config/firebase";
import signupimage from '../images/signupimage.png'
import Header from "./Header";
import GoogleButton from 'react-google-button'


const Container = styled.div`
    background-color: #fff7f2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

// const Header = styled.div`
//     /* height: 50%; */
//     background: rgb(168,159,151);
//     background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%);
// `;

// const Top = styled.div`
//     flex: 1;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     /* margin-top: 50px; */
//     color: white;
//     /* background-color: green; */
// `;

// const Left = styled.div`
//     flex: 1;
//     display: flex;
//     text-align: center;
//     align-items: center;
//     margin: 20px;
//     margin-left: 200px;
//     /* margin-top: 80px; */
//     /* cursor: pointer; */
// `;

// const LeftText = styled.div`
//     cursor: pointer;
// `;

// const Right = styled.div`
//     flex: 1;
//     display: flex;
//     /* text-align: center;
//     align-items: center; */
//     justify-content: flex-end;
//     /* margin-top: 80px; */
    
// `;

// const Text = styled.div`
//     margin: 20px;
//     margin-left: 60px;
//     /* margin-right: 30px; */
//     /* background-color: aliceblue; */
//     cursor: pointer;
//     // when hovered over
//     &:hover {
//         text-decoration: underline;
//         text-decoration-color: black;
//     }
// `;

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
    
`;

function SignupPage () {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    // const [isSignupSuccess, setIsSignupSuccess] = useState("");

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

    // if (user.email != null) {
    //     setIsSignupSuccess = "Signed up successfully, Please proceed to login";
    // }
    // else {

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
    }
    
    return (
        <Container>
            {/* <Header>
                <Top>
                    <Left>
                        <LeftText>Library Management System</LeftText></Left>
                    <Right>
                        <Text><Link to='/' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>HOME</Link></Text>
                        <Text><Link to='/about' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>ABOUT</Link></Text>
                        <Text><Link to='/signup' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN UP</Link></Text>
                        <Text style={{marginRight: "200px"}}><Link to='/login' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN IN</Link></Text>
                    </Right>
                </Top>
            </Header> */}
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
                                setRegisterEmail(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Create Password</Label>
                        <br/>
                        <Input 
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setRegisterPassword(e.target.value);
                            }}
                        />
                        <br/>
                        <br/>
                        <Button onClick={register}>Create User</Button>
                        <br/>
                        <br/>
                        <br/>
                        {user?.email != null ? 'Signed up successfully, Please proceed to login' : 'Please try again in a few minutes'}
                        {/* <GoogleButton onClick={signInWithGoogle}>Sign In With Google</GoogleButton>
                        <br/>
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

export default SignupPage;