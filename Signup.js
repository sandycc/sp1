import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const Signup = ({ dataSignup, ...props}) => {
  const [ name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [addres, setAddres] = useState('')
  const [city, setCity] = useState('')
  const [state, setstate] = useState('')
  const [zip, setZip] = useState('')
  console.log('data')


  const onSubmitSignup = (e) => {
    e.preventDefault()
    dataSignup({
      name,
      email,
      password,
      addres,
      city,
      state,
      zip
    })
  }

  return (
    <Form onSubmit={(e) => onSubmitSignup(e)}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text"onChange={(e) => setName(e.target.value)}  />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" value="Choose...">
            <option>Choose...</option>
            <option>semarang</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>

  )
}
export default Signup