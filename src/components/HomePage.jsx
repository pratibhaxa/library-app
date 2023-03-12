import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Body = styled.div`
    font-size: large;
    margin: 20px;
`;

const Wrapper = styled.div`
    
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddBook = styled.div`
    vertical-align: middle;
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        /* border-color: black; */
    }
`;

const ViewBook = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        border-color: black;
    }
`;

const ModifyBook = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        border-color: black;
    }
`;

// const Wishlist = styled.div`
    
// `;

const Profile = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    /* border-style: solid; */
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        border-color: black;
        /* border-style: solid; */
    }
`;

const Footer = styled.footer`
    display: flex;
    position: absolute;
    bottom: 0;
    background-color: lightgray;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
`;

const LeftText = styled.div`
`;

const RightText = styled.div`
    
`;

function HomePage () {
    return (
        <Container>
            <Header>Library Management System</Header>
            <Body>
                Select action you want to perform :
            </Body>
            <Wrapper>
                <Contents>
                    <AddBook>
                        <Link 
                            to='/addbook' 
                            style={{
                                // paddingTop: "10px", 
                                // paddingBottom: "10px", 
                                // // padding: "100%",
                                // margin: "auto", 
                                // height: "100%",
                                verticalAlign: "center",
                                width: "100%", 
                                textDecoration: "none", 
                                textDecorationColor: "black", 
                                backgroundColor: "lightgray", 
                                color: "black", 
                                display: "flex", 
                                justifyContent: "center"
                            }}>Add New Book</Link>
                    </AddBook>
                    <ViewBook>
                        <Link 
                            to='/viewbook' 
                            style={{
                                width: "100%", 
                                textDecoration: "none", 
                                textDecorationColor: "black", 
                                backgroundColor: "lightgray", 
                                color: "black", 
                                display: "flex", 
                                justifyContent: "center"
                            }}>View Books</Link>
                    </ViewBook>
                </Contents>
                <Contents>
                    <ModifyBook>
                        <Link 
                            to='/modifybook' 
                            style={{
                                width: "100%",  
                                textDecoration: "none", 
                                textDecorationColor: "black", 
                                backgroundColor: "lightgray", 
                                color: "black", 
                                display: "flex", 
                                justifyContent: "center"
                            }}>Modify Book Details</Link>
                    </ModifyBook>
                    <Profile>
                        <Link 
                            to='/profile' 
                            style={{
                                width: "100%", 
                                textDecoration: "none", 
                                textDecorationColor: "black", 
                                backgroundColor: "lightgray", 
                                color: "black", 
                                display: "flex", 
                                justifyContent: "center"
                            }}>Profile</Link>
                    </Profile>
                </Contents>
            </Wrapper>
            <Footer>
                <LeftText>
                ~ Pratibha Pradhan 
                </LeftText>
                <RightText>
                     insert contact options
                </RightText>
            </Footer>
        </Container>
    )
}

export default HomePage;