import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";


function Games({ games, getGame }) {

    return (
        <div className="grid-container">
            {games.map((game) => (<div className="grid-item" key={game.id} >
                <h1><b>{game.title}</b></h1>
                <img alt={game.title} src={game.image_url} />
                <p> Genre: {game.genre}</p>
                <p> Developer: {game.developer}</p>
                <Link to="/game-reviews">
                    <button onClick={() => getGame(game.id)}>View Reviews</button>
                </Link>
            </div>))}
        </div>
    )
}

export default Games