import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  margin: 5% 10%;
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

export default function CharacterCard(props) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setCharacter(res.data));
  }, [props.match.params.id]);
  return (
    <Card>
      <CardImg src={character.image} alt="image" />
      <CardBody>
        <h2>{character.name}</h2>
        <p>{character.gender}</p>
        <p>{character.species}</p>
      </CardBody>
    </Card>
  );
}
