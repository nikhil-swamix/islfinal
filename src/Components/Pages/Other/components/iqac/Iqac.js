import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Iqac = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IQAC</title>
        <meta
          name="description"
          content="IQAC"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">IQAC</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        IQAC
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                    <h6 className="title">K.Nanchari </h6>
                      <p>Head of Department</p>
                    </div>
                  </div>
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/z7NLwF0/mail.png"
                        alt="mail"
                      />
                    </div>
                    <div className="media_content media-body mt-2">
                      <h6 className="title">
                        <a href="mailto:ce.hod@islec.edu.in">
                          ce.hod@islec.edu.in
                        </a>{' '}
                      </h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="course-details-area dept pt-60  pb-60">
        <Container>
        <h4 className='text-center'>Internal Quality Assurance Cell (IQAC)</h4>                            

          <Row>
            <Col lg={12} md={12}>
             <section className="dept-tabs mt-2">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>IQAC</Tab><br></br>
                    <Tab>Criterion 1</Tab>
                    <Tab>Criterion 2</Tab>
                    <Tab>Criterion 3</Tab>
                    <Tab>Criterion 4</Tab>
                    <Tab>Criterion 5</Tab>
                    <Tab>Criterion 6</Tab>
                    <Tab>Criterion 7</Tab>
                  </TabList>

                    <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                        <h4>About Internal Quality Assurance Cell (IQAC) | ISLEC</h4>                            
                            <ul>
                                <li>
                                    <i className="fa fa-angle-double-right"></i> <a href='https://islec.edu.in/NAAC/SelfDeclaration.pdf'>
                                     View  
                                      </a>
                                </li>
                            </ul>
                    </div>
                    </TabPanel>
                  
                  <TabPanel className="tab-content tab-content-info text-justify">
                  <div className="syll text-center">
                      <p>Content here</p>
                    </div>

                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <p>Content here</p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
s                    </div>
                  </TabPanel>
                </Tabs>
              </section>
            </Col>
            {/* <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
..                  </div>
                </div>

..                <div className="text-right">
                  <a href="/events" className="pt-10 ">
                    More{' '}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </aside>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Iqac
