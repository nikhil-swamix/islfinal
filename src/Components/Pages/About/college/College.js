import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const College = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Computer Science & Engineering</title>
        <meta
          name="description"
          content="ISLEC is Approved by AICTE and Affiliated to Osmania University"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">ISL Engineering College</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        ISL Engineering College
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="course-details-area dept pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={10} md={10}>
              <section className="dept-tabs mt-20">

                    <div className="">
                      <h4>Vision</h4>
                      <p>
                      Our vision is to be a top ranking engineering college recognized for excellence in technical education and research. To prepare all students for successful careers imbibing core human values to meet the growing technological and social-economics needs of our nation and the world at large. 
                      </p>

                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> Our mission is to produce creative and technically strong and trained engineers of highest quality.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To develop the potential of human resources and to meet the challenges of the ever expanding global needs.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To enable the students to develop their own abilities and talents and create a work culture based on strong moral and ethical values.
                        </li>
                      </ul>

                    </div>

              </section>
            </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default College