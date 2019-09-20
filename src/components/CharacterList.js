import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const WrappedDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  console.log(characterList, searchResults);
  const handleChange = event => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => setCharacterList(res.data.results));
  }, []);

  // stretch query API
  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
  //     .then(res => setCharacterList(res.data.results));
  // }, [searchTerm]);

  useEffect(() => {
    const results = characterList.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const clickHandler = id => {
    props.history.push(`character/${id}`);
  };

  return (
    <section className="character-list">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleChange={handleChange}
      />
      <WrappedDiv>
        {searchResults.length === 0
          ? characterList.map(character => (
              <CharacterCard
                key={character.name}
                image={character.image}
                name={character.name}
                gender={character.gender}
                species={character.species}
                onClicked={() => clickHandler(character.id)}
              />
            ))
          : searchResults.map(character => (
              <CharacterCard
                key={character.name}
                image={character.image}
                name={character.name}
                gender={character.gender}
                species={character.species}
                onClicked={() => clickHandler(character.id)}
              />
            ))}
      </WrappedDiv>
    </section>
  );
}
