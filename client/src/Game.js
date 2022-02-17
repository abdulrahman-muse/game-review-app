import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";



function Game({ game }) {

    return (
        <div>
            {game.reviews?.map((review) => (
                <Card className="review" key={review.id}>
                    <Card.Text>User: {review.reviewer}</Card.Text>
                    <Card.Text>Title: {review.title}</Card.Text>
                    <Card.Text>Rating: {review.rating}/5</Card.Text>
                    <Card.Text>Description: {review.description}</Card.Text>
                </Card>
            ))}
        </div>
    )
}


export default Game

// {/* <div className="review" key={review.id}>
// <p>User: {review.reviewer}</p>
// <p>Title: {review.title}</p>
// <p>Rating: {review.rating}/5</p>
// <p>Description: {review.description}</p>
// </div> */}