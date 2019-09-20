import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 27%;
  margin: 3%;
  border: 1px black solid;
  border-radius: 5px;
  background-color: lightgrey;
`;

const CardImg = styled.img`
  width: 100%;
  border-bottom: 1px black solid;
`;

const CardBody = styled.div`
  text-align: center;
`;

const CardBtn = styled.button`
  background-color: lightblue;
  text-align: center;
  border:1px black solid;
  border-radius:5px;
  width: 50%
  margin: 5% 25%;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <CardImg src={props.image} alt="image" />
      <CardBody>
        <h2>{props.name}</h2>
        <p>{props.gender}</p>
        <p>{props.species}</p>
      </CardBody>
      <CardBtn onClick={props.onClicked}>Details</CardBtn>
    </Card>
  );
}
