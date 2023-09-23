import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

const SSRLogin = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Welcome@DVV') {
      setAuthenticated(true);
      history.push('/dvvs');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <Container className='mt-50 mb-100'>
      <Row  className='justify-content-center'>
         <Col md={5}>
            <h4>Login to access DVV</h4>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username"  value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </Form.Group>

      
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}  required/>
          </Form.Group>
      
            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form>


          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default SSRLogin;
