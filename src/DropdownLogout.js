import { Avatar, Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

function DropdownLogout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <Container>
      <IconButton>
        <Avatar onClick={toggling} src="./images/cat.jpg" />
      </IconButton>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            <ListItem>Profile</ListItem>
            <ListItem>Logout</ListItem>
          </DropdownList>
        </DropdownListContainer>
      )}
    </Container>
  );
}

export default DropdownLogout;

const Container = styled.div``;
const DropdownListContainer = styled.div`
  width: 230px;
`;
const DropdownList = styled.ul`
  padding: 0;
  margin: 0 auto;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
`;
