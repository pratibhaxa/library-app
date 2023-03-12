import { Link } from "react-router-dom";
import styled from "styled-components";
import book from '../images/homeImage.png';

const Container = styled.div`
    background-color: #e8fee7;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Header = styled.div`
    height: 50%;
    background: rgb(168,159,151);
    background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%);
`;

const Top = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 50px; */
    color: white;
    /* background-color: green; */
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    margin: 20px;
    margin-left: 200px;
    margin-top: 80px;
    /* cursor: pointer; */
`;

const LeftText = styled.div`
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    /* text-align: center;
    align-items: center; */
    justify-content: flex-end;
    margin-top: 80px;
    
`;

const Text = styled.div`
    margin: 20px;
    margin-left: 60px;
    /* margin-right: 30px; */
    /* background-color: aliceblue; */
    cursor: pointer;
    // when hovered over
    &:hover {
        text-decoration: underline;
        text-decoration-color: black;
    }
`;

const Bottom = styled.div`
    margin-top: 120px;
    font-weight: bolder;
    font-size: 2cm;
    color: white;
    text-align: center;
`;

const ImageContainer = styled.div`
    
`;

const Image = styled.img`
    width: 100%;
`;

function StartPage () {
    return (
        <Container>
            <Header>
                <Top>
                    <Left>
                        <LeftText>~ Pratibha Pradhan ~</LeftText></Left>
                    <Right>
                        <Text><Link to='/' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>HOME</Link></Text>
                        <Text><Link to='/about' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>ABOUT</Link></Text>
                        <Text><Link to='/signup' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN UP</Link></Text>
                        <Text style={{marginRight: "200px"}}><Link to='/signin' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN IN</Link></Text>
                    </Right>
                </Top>
                <Bottom>Library Management System</Bottom>
            </Header>
            <ImageContainer>
                <Image src={book} />
            </ImageContainer>
        </Container>
    )
}

export default StartPage;