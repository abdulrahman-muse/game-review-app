import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Col, Button } from "react-bootstrap";


function Games({ games, getGame }) {

    return (
        <div className='App' >
            <Container fluid>
                <Col className='d-flex justify-content-center'>
                    {games.map((game) => (
                        <Card className='m-3 flex' key={game.id} style={{ background: '#778899', width: "250px", height: "250px", border: 0, paddingTop: 150 }} >
                            <Card.Title><b>{game.title}</b></Card.Title>
                            <Card.Img style={{ display: "block", height: 200, marginLeft: "auto", marginRight: "auto", width: 200 }} alt={game.title} src={game.image_url} className='mb-2' />
                            <Card.Text> Genre: {game.genre}</Card.Text>
                            <Card.Text> Developer: {game.developer}</Card.Text>
                            <Link to="/game-reviews">
                                <Button onClick={() => getGame(game.id)}>View Reviews</Button>
                            </Link>
                        </Card>
                    ))}
                </Col>
            </Container>
        </div>
    )
}

export default Games