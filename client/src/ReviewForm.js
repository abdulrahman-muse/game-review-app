import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Alert, FloatingLabel } from "react-bootstrap";


function ReviewForm({ games, addReview, user, errors, getGame }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        rating: "",
        game_id: "",
        user_id: user.id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        addReview(newData);
    };

    return (
        <div className="App">
            <Container>
                <h1 className="m-5">Add a New No 🧢 Review!</h1>
                <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} onSubmit={onSubmit}>
                    <Form.Group>
                        <FloatingLabel label="Title">
                            <Form.Control
                                className="mb-4"
                                as="textarea"
                                type="text"
                                value={formData.title}
                                name="title"
                                placeholder="Title"
                                onChange={handleInputChange}
                            />
                        </FloatingLabel>
                        {/* Put in a validation for the description to be a minimum of 5 characters*/}
                        <FloatingLabel label="Description">
                            <Form.Control
                                className="mb-4"
                                as="textarea"
                                style={{ height: '100px' }}
                                type="text"
                                name="description"
                                value={formData.description}
                                placeholder="Description"
                                onChange={handleInputChange}
                            />
                        </FloatingLabel>
                        {/* Put in a validation for the rating to be between 1 and 5 */}
                        <FloatingLabel label="Rating">
                            <Form.Control
                                className="mb-4"
                                as="textarea"
                                type="number"
                                name="rating"
                                value={formData.rating}
                                placeholder="Rating/5"
                                onChange={handleInputChange}
                            />
                        </FloatingLabel>
                        <Form.Select size="sm" name="game_id" onChange={handleInputChange}>
                            <option>Select Game</option>
                            {games.map((game) => (
                                <option name="game_id" value={game.id} key={game.id} >{game.title}</option>
                            ))}
                        </Form.Select>
                        <Button variant="dark" className='m-3' type="submit">Add Review</Button>
                        <div>
                            {errors.map((err) => (
                                <Alert key={err} variant={'danger'}>{err}</Alert>
                            ))}
                        </div>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default ReviewForm