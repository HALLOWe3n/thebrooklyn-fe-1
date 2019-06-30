import React from "react";
import { Switch, Route } from "react-router-dom";
// import pages
import MainPage from "../Containers/MainPage";
import FavoritesPage from "../Containers/FavoritesPage";
import PopularPage from "../Containers/PopularPage";
import AlbumsPage from "../Containers/AlbumsPage";
import WhatsNewPage from "../Containers/WhatsNewPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/popular" component={PopularPage} />
      <Route path="/albums" component={AlbumsPage} />
      <Route path="/whats_new" component={WhatsNewPage} />
    </Switch>
  );
};

export default App;
