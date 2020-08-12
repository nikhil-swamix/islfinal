import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Header'
import Table from './Table'
import Sidebar from '../../Sidebar'

const Publication = () => {
  return (
    <>
      <Header />
      <section className="mt-60">
        <Container fluid>
          <Row>
            <Col lg={8} className="syllabus">
              <Table />
            </Col>
            <Col lg={4} md={4} className="sidebar academic">
              <aside>
                <Sidebar />
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Publication
