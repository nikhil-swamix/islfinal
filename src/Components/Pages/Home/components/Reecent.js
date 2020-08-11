import React from 'react'
import { Card, Row, Col, Spinner } from 'react-bootstrap'
import useAxios from 'axios-hooks'

const Reecents = () => {
  const [{ data, loading, error }] = useAxios(
    'https://backend-isl.herokuapp.com/api/blogs/recent',
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
      <Col md={6} lg={6} className="mt-15 mb-15">
        <Card key={_id} className="box">
          <Card.Img variant="top" src={card.img} />
        </Card>
      </Col>
    )
  }

  return <Row>{data.map(renderCard)}</Row>
}

export default Reecents
