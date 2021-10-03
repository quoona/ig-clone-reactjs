import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Story from "./Story";
import PostIG from "./PostIG";
function Body() {
  return (
    <Container>
      <Section>
        <ContentLeft>
          <StoryStray>
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
          </StoryStray>
          <PostIG
            profilePic="./images/cat_2.jpg"
            message="Hello"
            username="cat two"
            image="./images/cheems.jpg"
          />
          <PostIG />
          <PostIG />
          <PostIG />
        </ContentLeft>
        <ContentRight></ContentRight>
      </Section>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  width: 100%;

  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 30px;
  //   background-color: lightblue;
  max-width: 970px;
  display: flex;
`;

const ContentLeft = styled.div`
  width: 612px;
  //   background-color: gray;
  height: calc(100vh - 35px);
`;

const ContentRight = styled.div`
  width: 100%;
  max-width: 293px;
  margin-left: 30px;
  height: calc(100vh - 35px);
  background-color: lightgreen;
  left: 934.1px;
`;

const StoryStray = styled.div`
  width: 612px;
  height: 70px;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 5px;
  margin-bottom: 24px;
  margin-top: 0;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
