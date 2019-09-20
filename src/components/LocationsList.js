import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import LocationCard from "./LocationCard";

const WrappedDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default function LocationsList() {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => setLocationList(res.data.results));
  }, []);

  return (
    <WrappedDiv>
      {locationList
        ? locationList.map(location => (
            <LocationCard
              key={location.name}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
            />
          ))
        : null}
    </WrappedDiv>
  );
}
