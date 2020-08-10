import React from 'react'
import { Card, Row, Col, Spinner } from 'react-bootstrap'
import useAxios from 'axios-hooks'

const Inbound = () => {
  const [{ data, loading, error }] = useAxios(
    'https://backend-isl.herokuapp.com/api/blogs/Inbound',
  )

  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  if (error) return <p>Error!</p>

  const renderCard = (card, _id) => {
    return (
      <Col md={4} lg={4}>
        <Card key={_id} className="box">
          <Card.Img variant="top" src={card.img} />
          <Card.Body>
            <Card.Text>
              {card.descp}{' '}
              <a href={card.link}>
                {card.link ? (
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                ) : (
                  ''
                )}
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  return <Row>{data.map(renderCard)}</Row>
}

export default Inbound
