import { onAuthStateChanged } from "firebase/auth";
import { 
    addDoc, 
    collection 
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db, auth } from "../config/firebase";

const Container = styled.div`
    background-color: #fff7f2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Header = styled.div`
    background: rgb(168,159,151);
    background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 60px;
    font-size: larger;
`;

const ContainerInner = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;

const Heading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Back = styled.div`
    font-size: x-large;
`;

const Table = styled.table`
    background-color: #f6e4e4;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tr = styled.tr`
`;

const Td = styled.td`
`;

const Action = styled.div`
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserDetails = styled.div`
    text-align: end;
`;

function AddBook () {
    const [newBookTitle, setNewBookTitle] = useState("");
    const [newBookDescription, setNewBookDescription] = useState("");
    const [newBookPrice, setNewBookPrice] = useState("");
    const [newBookAuthor, setNewBookAuthor] = useState("");
    const [newYoPublish, setNewYoPublish] = useState("");
    const [newIsbestseller, setNewIsbestseller] = useState("");
    const [successfull, setSuccessfull] = useState("");

    const booksCollectionRef = collection(db, "books");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const onSubmitBook = async () => {
        try {
            await addDoc(booksCollectionRef, {
                // id will be automatically generated when doc is added
                bookTitle: newBookTitle, 
                bookDescription: newBookDescription,
                bookPrice: newBookPrice,
                bookAuthor: newBookAuthor,
                yoPublish: newYoPublish,
                isbestseller: newIsbestseller,
                userId: auth?.currentUser?.uid,
                
            });

        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Header>Library Management System</Header>
            <UserDetails>Welcome {user?.email}</UserDetails>
            <ContainerInner>
                <Back>
                    <Link 
                        to='/home' 
                        style={{
                            textDecoration: "none", 
                            textDecorationColor: "black", 
                            color: "black"
                        }}>Back</Link>
                </Back>
                
                    <Heading>Enter Book Details : </Heading>
                    <br />
                    <TableContainer>
                    <Table>
                        <Tr>
                            <Td>Enter Book Name : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Book Name" 
                                    onChange={(e) => {
                                        setNewBookTitle(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Book Description : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Book Description" 
                                    onChange={(e) => {
                                        setNewBookDescription(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Book Price : </Td>
                            <Td>
                                <input 
                                    type="number" 
                                    placeholder="Book Price" 
                                    onChange={(e) => {
                                        setNewBookPrice(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Author Name : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Author Name" 
                                    onChange={(e) => {
                                        setNewBookAuthor(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Published Year : </Td>
                            <Td>
                                <input 
                                    type="number" 
                                    placeholder="Published Year" 
                                    onChange={(e) => {
                                        setNewYoPublish(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Is it a Bestseller : </Td>
                            <Td>
                                <input 
                                    type="checkbox" 
                                    onChange={(e) => {
                                        setNewIsbestseller(e.target.checked)
                                    }}
                                />
                            </Td>
                            <Td></Td>
                        </Tr>
                    </Table>
                    </TableContainer>
                    <br />
                    <Button><button type="button" onClick={onSubmitBook}>Add Book to Library</button></Button>
                                    
                </ContainerInner>
        </Container>
    )
}

export default AddBook;