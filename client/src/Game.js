import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row } from "react-bootstrap";




function Game({ game }) {

    return (
        <div className='App'>
            <Row className='justify-content-center'>
                <h1 style={{ paddingTop: 50 }}>{game.title} Reviews</h1>
                {game.reviews?.map((review) => (
                    <Card bg="dark" text="light" key={review.id} className='m-5' style={{ background: '#696969', width: '18rem' }}>
                        <Card.Header>{review.reviewer}</Card.Header>
                        <Card.Body>
                            <Card.Text> {review.title}</Card.Text>
                            <Card.Text>Rating: {review.rating}/5</Card.Text>
                            <Card.Text> {review.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </div>
    )
}



export default Game
