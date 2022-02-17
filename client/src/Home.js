import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card } from "react-bootstrap";



function Home({ user, games}) {

    // console.log(user.reviews)
    let shownGames = games.filter(g => g.reviews.length >= 1)

    // console.log(shownGames)
    return (
        <div className='App'>
            <Container fluid>
                <Row>
                <Col className='d-flex justify-content-center'>
                    <h1 className="m-5">Trending 🔥</h1>
                        {shownGames.map((game) => (
                            <Card className='m-3 flex' key={game.id} style={{ background: '#696969', width: "250px", height: "250px"}} >
                                <Card.Title style={{ color: 'black'}}>{game.title}</Card.Title>
                                <Card.Img variant="bottom" alt={game.title} src={game.image_url} style={{ width: "200px", height: "200px"}} />
                            </Card>
                        ))}
                </Col>
                <Col className='d-flex justify-content-center'>
                    <h1 className="m-5">My Reviews</h1>
                        {user.reviews?.map((review) => (
                            <Card key={review.id} className='m-5' style={{ background: '#696969', width: "300px", height: "300px"}}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'black'}}>Title: {review.title}</Card.Title>
                                    <Card.Subtitle className='m-2' style={{ color: 'black'}}>Rating: {review.rating}/5</Card.Subtitle>
                                    <Card.Text style={{ color: 'black'}}>Description: {review.description}</Card.Text>
                                </Card.Body>
                            </Card>
                         ))}
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home

// style={{ background: 'white', width: "400px", height: "400px", padding: "10px", margin: "10px"}}