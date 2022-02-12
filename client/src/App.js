import './App.css';
import React, { useEffect, useState } from 'react';
import Games from './Games';
import GameReviews from './GameReviews';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [gameReviews, setGameReviews] = useState([])
  const [games, setGames] = useState([])

  function getGameReview(id) {
    fetch(`/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGameReviews(data);
      })
  }

  useEffect(() => {
    fetch("/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Games games={games} getGameReview={getGameReview} />
          </Route>
          <Route exact path="/game-reviews">
            <GameReviews games={games} gameReviews={gameReviews} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
