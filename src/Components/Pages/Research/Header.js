import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container fluid>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Research & Development</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="https://islengg.ac.in">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="https://islengg.ac.in">
                        Research & Development
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Header
