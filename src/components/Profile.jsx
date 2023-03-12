import { Link } from "react-router-dom";
import styled from "styled-components";
import WIPimage from '../images/WIP.jpg'

const Container = styled.div`
    /* background-color: #fff7f2; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Back = styled.div`
    font-size: x-large;
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    
`;

const Image = styled.img`
    align-items: center;
    margin-left: 350px;
    width: 60%;
    height: 80%;
`;

function Profile () {
    return (
        <Container>
            <Back>
                <Link 
                    to='/home' 
                    style={{
                        textDecoration: "none", 
                        textDecorationColor: "black", 
                        color: "black"
                    }}>Go back to the previous screen</Link>
                </Back>
            <ImageContainer>
                <Image src={WIPimage}/>
            </ImageContainer>
        </Container>
    )
}

export default Profile;