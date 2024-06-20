import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
padding: 1em;
background: skyblue;
`;

const Title = styled.h1`
font-size: 1.5em;
color: blue;
text-align: center;
`;

const Button = styled.button`
color: ${props => props.dark ? "white" : "dark"};
background: ${props => props.dark ? "black" : "white"};
border: 1px solid black;
`;

const RoundedButton = styled(Button)`
border-radius: 16px;
`;

function MainPage(props) {
    return(
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundedButton>RoundNormal</RoundedButton>
            <RoundedButton dark>RoundDark</RoundedButton>
        </Wrapper>
    );
}
export default MainPage;