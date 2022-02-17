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
import Login from './Login';

function App() {
  const [game, setGame] = useState([])
  const [games, setGames] = useState([])
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([])


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


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
        setReviews(data)
      });
  }, []);

  const addReview = (formData) => {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newReview) => setReviews([...reviews, newReview]));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    })
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <Router>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/login">
          </Route>
          <Route exact path="/games">
            <Games games={games} getGame={getGame} />
          </Route>
          <Route exact path="/">
            <Home user={user} games={games} />
          </Route>
          <Route exact path="/review-form">
            <ReviewForm errors={errors} user={user} games={games} addReview={addReview} />
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
