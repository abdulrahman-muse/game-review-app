import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card } from "react-bootstrap";



function Home({ user, games }) {


    let shownGames = games.filter(g => g.reviews.length >= 3)


    return (
        <div>
            <Container fluid>
                <h1 className="m-5">Trending Games 🔥</h1>

                <Col className='d-flex justify-content-center'>
                    {shownGames.map((game) => (
                        <Card className='m-5' key={game.id} style={{ background: '#778899', width: "250px", height: "250px", border: 0 }} >
                            <Card.Title style={{ marginRight: 50 }}>{game.title}</Card.Title>
                            <Card.Img variant="bottom" alt={game.title} src={game.image_url} style={{ width: "200px", height: "200px" }} />
                        </Card>
                    ))}
                </Col>
                <h1 className="m-5">My Recent Reviews</h1>
                <Row className='justify-content-center'>
                    {user.reviews?.map((review) => (
                        <Card bg="dark" text="light" key={review.id} className='m-5' style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>{review.game}</Card.Title>
                                <Card.Text>{review.title}</Card.Text>
                                <Card.Text>{review.description}</Card.Text>
                                <Card.Subtitle className='m-2'>Rating: {review.rating}/5</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home
