import './App.css';
import React, { useEffect, useState } from 'react';
import Games from './Games';
import Game from './Game';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';
import ReviewForm from './ReviewForm';
import Home from './Home';

function App() {
  const [game, setGame] = useState([])
  const [games, setGames] = useState([])
  const [reviews, setReviews] = useState([])

  function getGame(id) {
    fetch(`/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGame(data);
      })
  }

  useEffect(() => {
    fetch("/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
  }, []);

  const addReview = (formData) => {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newReview) => {
        console.log(newReview)
        setReviews([...reviews, newReview])
      })
  };

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/games">
            <Games games={games} getGame={getGame} />
          </Route>
          <Route exact path="/">
            <Home reviews={reviews}/>
          </Route>
          <Route exact path="/review-form">
            <ReviewForm games={games} addReview={addReview} />
          </Route>
          <Route exact path="/game-reviews">
            <Game games={games} game={game} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
