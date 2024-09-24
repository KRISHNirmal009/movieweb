import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';




function Header() {

  const [index, setIndex] = useState([]);
  const [user, setUser] = useState([]);
  function Check4(evt) {
    console.log(evt.target.value);
    setIndex(evt.target.value);

  }
  async function Check() {
    let data = await axios.get(`https://www.omdbapi.com/?apikey=4e9e8ed7&t=${index}
      
      
      `);
    // console.log(data);
    setUser(data.data)
  }


  return (
    <>
      <Navbar className="mb-4" bg="dark" data-bs-theme="dark">
        <Container>

          <Nav className="me-auto">
            <Navbar.Brand href="/">Home</Navbar.Brand><br></br>
            <Nav.Link href="/constact">Contactus</Nav.Link><br>
            </br>
            <Nav.Link href="/From">from</Nav.Link>
            <Nav.Link href="/From2">Movie</Nav.Link>
            <Nav.Link href="/From3">series</Nav.Link>
          </Nav>

     

        </Container>
        <Form.Group controlId='firstName'>
          <Form.Label>Movie Name</Form.Label>
          <Form.Control type='text' onChange={Check4} placeholder='Enter Here' name='firstName' />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={Check}>
          Submit
        </Button>

      </Navbar>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.Poster} />
        <Card.Body>
          <Card.Title>MovieName={index}
          </Card.Title>

          <Card.Text> MovieRating={user.imdbRating}

          </Card.Text>


        </Card.Body>
      </Card>
      

    </>
  );
}
export default Header;