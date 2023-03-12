import { Link } from "react-router-dom";
import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/SearchOutlined';
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

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
    /* display: flex; */
`;

const Search = styled.div`
    display: flex;
    height: 30px;
`;

// const SearchIcon = styled.image`
    
// `

const Input = styled.input`
    width: 300px;
    border-radius: 20px;
    height: 30px;
    border-color: transparent;
    &:focus {
        border-color: transparent !important;
        /* border-color: #b6aca5; */
    }
`;

const Back = styled.div`
    font-size: x-large;
`;

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Table = styled.table`
    
`;

const Tr = styled.tr`
    text-align: center;
`;

const Td = styled.td`
    width: 200px;
`;

const Th = styled.th`
    width: 200px;
    background-color: #b6aca5;
`;

const BookList = styled.table`
    
`;

const UserDetails = styled.div`
    text-align: end;
`;

function ViewBook () {
    const [bookList, setBookList] = useState([]);

    const booksCollectionRef = collection(db, "books");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const getBookList = async (e) => {
        // e.preventDefault();
        // read data
        // set book list
        try {
            const data = await getDocs(booksCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), 
                id: doc.id
            }));
            console.log({data});
            setBookList(filteredData);
        }
        catch (err) {
           console.error(err);
        }
    };

    useEffect(() => {
        getBookList();
    }, []);

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
            </ContainerInner>
            <br/>
            <br/>
            <TableContainer>
            <Table>
                <Tr>
                    {/* <Th>Book ID</Th> */}
                    <Th>Book Title</Th>
                    <Th>Author Name</Th>
                    <Th>Description</Th>
                    <Th>Year of Publish</Th>
                    <Th>Price</Th>
                    <Th>is Bestseller ?</Th>
                </Tr>
                {bookList.map((book) => (
                    <Tr>
                        <Td>{book.bookTitle}</Td>
                        <Td>{book.bookAuthor}</Td>
                        <Td>{book.bookDescription}</Td>
                        <Td>{book.yoPublish}</Td>
                        <Td>{book.bookPrice}</Td>
                        <Td style={{color: book.isbestseller ? "green" : "red"}}>{book.isbestseller === true ? "Yes" : "No"}</Td>
                    </Tr>
                ))}
            </Table>
            </TableContainer>
            <br />
            <br/>
            
            {/* <button onClick={getBookList}>Register</button> */}
            {/* <BookList>
                {bookList.map((book) => (
                    <Tr>
                        <Td>{book.bookTitle}</Td>
                        <Td>{book.bookAuthor}</Td>
                        <Td>{book.bookDescription}</Td>
                        <Td>{book.yoPublish}</Td>
                        <Td>{book.bookPrice}</Td>
                        <Td style={{color: book.isbestseller ? "green" : "red"}}>{book.isbestseller === true ? "Yes" : "No"}</Td>
                    </Tr>
                ))}
            </BookList> */}
            {/* <button onClick={getBookList}>get books</button> */}
        </Container>
    )
}

export default ViewBook;