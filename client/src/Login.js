import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button } from "react-bootstrap";

function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
            <section>
                <div className='App'>
                    <Container>
                        <h1 className='m-5'>No 🧢 Reviews</h1>
                        {/* <Card> */}
                            {showLogin ? (
                                <>
                                    <LoginForm setUser={setUser} />
                                    <hr />
                                    <p>
                                        Don't have an account? &nbsp;
                                        <Button variant='secondary' className='m-1' type="submit" onClick={() => setShowLogin(false)}>Sign Up</Button>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <SignUpForm setUser={setUser} />
                                    <hr />
                                    <p>
                                        Already have an account? &nbsp;
                                        <Button variant='secondary' className='m-1' type="submit" onClick={() => setShowLogin(true)}>Log In</Button>
                                    </p>
                                </>
                            )}
                            {/* </Card> */}
                    </Container>
                </div>
            </section>
    );
}


export default Login;