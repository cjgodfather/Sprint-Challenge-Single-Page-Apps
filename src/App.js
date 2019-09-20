import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList.js";
import CharacterDetail from "./components/CharacterDetail";

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/character/:id" component={CharacterDetail} />
      <Route path="/locations" component={LocationsList} />
    </main>
  );
}
