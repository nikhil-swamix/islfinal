import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Header'
import Table from './Table'
import Sidebar from '../../Sidebar'
import { Helmet } from 'react-helmet'

const Publication = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Research & Development</title>
        <meta name="description" content="" />

        <link rel="canonical" href="http://islec.edu.in/research" />
      </Helmet>

      <Header />
      <section className="mt-60">
        <Container>
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
