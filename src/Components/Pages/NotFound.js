import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const NotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className="pt-90 pb-90 text-center">
            <h1>Page Not Found..</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound
