import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';




function Game() {
    let { id } = useParams()
    const [game, setGame] = useState({})



    useEffect(() => {
        fetch(`/games/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setGame(data);
            })
    }, [id]);




    return (
        <div className='App'>
            <Row className='justify-content-center'>
                <h1 style={{ paddingTop: 50 }}>{game.title} Reviews</h1>
                {game.reviews?.map((review) => (
                    <Card bg="dark" text="light" key={review.id} className='m-5' style={{ background: '#696969', width: '18rem' }}>
                        <Card.Header>{review.reviewer}</Card.Header>
                        <Card.Body>
                            <Card.Text> Title: {review.title}</Card.Text>
                            <Card.Text> Description: <br />{review.description}</Card.Text>
                            <Card.Text>Rating: {review.rating}/5</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </div>
    )
}



export default Game
