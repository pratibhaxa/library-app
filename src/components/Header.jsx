import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    
    /* margin-top: 0; */
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
    /* margin-top: 80px; */
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
    /* margin-top: 80px; */
    
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

function Header () {
    return (
        <Container>
            <Top>
                <Left>
                    <LeftText>Library Management System</LeftText></Left>
                <Right>
                    <Text><Link to='/' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>HOME</Link></Text>
                    <Text><Link to='/about' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>ABOUT</Link></Text>
                    <Text><Link to='/signup' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN UP</Link></Text>
                    <Text style={{marginRight: "200px"}}><Link to='/signin' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN IN</Link></Text>
                </Right>
            </Top>
        </Container>
    )
}

export default Header;