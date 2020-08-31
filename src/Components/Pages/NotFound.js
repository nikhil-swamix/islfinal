import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const NotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className="pt-90 pb-90 text-center">
            <div>
              <img
                src="https://i.ibb.co/R7kWXgM/404.png"
                className="img-fluid"
                alt="404"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound
