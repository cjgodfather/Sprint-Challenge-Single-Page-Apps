import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 27%;
  margin: 3%;
  border: 1px black solid;
  border-radius: 5px;
  background-color: lightgrey;
`;

const CardBody = styled.div`
  text-align: center;
`;

export default function LocationCard(props) {
  return (
    <Card>
      <CardBody>
        <h2>{props.name}</h2>
        <p>{props.type}</p>
        <p>{props.dimension}</p>
      </CardBody>
    </Card>
  );
}
