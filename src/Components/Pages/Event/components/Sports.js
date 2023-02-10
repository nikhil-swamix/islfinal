import React from 'react'
import { Card, Row, Col, Spinner } from 'react-bootstrap'
import useAxios from 'axios-hooks'

const Sports = () => {
  const [{ data, loading, error }] = useAxios(
    'https://islec.herokuapp.com/api/blogs/sports',
  )

  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  if (error)
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Something Went Wrong...</span>
        </Spinner>
      </div>
    )

  const renderCard = (card, _id) => {
    return (
      <Col md={4} lg={4} className="mt-15 mb-15">
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

export default Sports
