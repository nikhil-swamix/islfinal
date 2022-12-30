import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const Rti = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RTI</title>
        <meta
          name="description"
          content="RTI"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>


      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Right To Information</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                      Right To Information
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section class="courses_details_area pt-40 pb-30">
        <div class="container">
            <div class="row">
  
                <div class="col-lg-8 order-lg-first">
                    <div class="courses_details_content">
                        <div class="single_courses_details  mt-40">
                            <h4 class="courses_details_title capital">Right To Information</h4>
                            <h6>The following committee has been nominated for RTI Cell.</h6>
                        </div>
                        <div class="single_courses_details  mt-40">
                            
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                        <th>Office</th>
                                        <th>E-Mail</th>
                                        <th>Mobile</th>
                                    </tr>
                              </thead>
                        
                              <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mohammed Pasha</td>
                                        <td>PR Officer / Appellate Authority</td>
                                        <td>Desk – 1, Admin Dept</td>
                                        <td>rti@islec.edu.in</td>
                                        <td>+91 9989405490</td>
                                    </tr>

                              </tbody>

                            </Table>

                        </div>              
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default Rti
