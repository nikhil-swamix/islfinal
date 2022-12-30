import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Committees = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Committees</title>
        <meta
          name="description"
          content="Committees"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Committees</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                      Committees
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

      <section className="course-details-area dept  pb-60">
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <section className="dept-tabs mt-2">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Committee for SC/ST</Tab>
                    <Tab>Grievence Redressal Committee</Tab>
                    <Tab>Internal Complaint Committee</Tab>
                    <Tab>Anti-Ragging Committee</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Committee for SC/ST</h4>
                      <Table striped bordered hover>
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Dept.</th>
        <th>Designation</th>
        <th>COMMITTEE</th>
    </tr>
    <tr>
        <td>1</td>
        <td>SHUBHAKAR</td>
        <td>ECE</td>
        <td>ASST PROF</td>
        <td>PRESIDENT</td>
    </tr>
    <tr>
        <td>2</td>
        <td>RAGHAVENDER</td>
        <td>CSE</td>
        <td>ASST PROF</td>
        <td>CONVINER</td>
    </tr>
    <tr>
        <td>3</td>
        <td>SRIKANTH</td>
        <td>CSE</td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>4</td>
        <td>SRICHARAN</td>
        <td>CIVIL </td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>5</td>
        <td>NEERAJ KUMAR</td>
        <td>IT</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
                      </Table>
                    </div>
                  </TabPanel>
                  
                 

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Grievence Redressal Committee</h4>
                      <Table striped bordered hover>
                        
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Dept.</th>
        <th>Designation</th>
        <th>COMMITTEE</th>
    </tr>
    <tr>
        <td>1</td>
        <td>DR ZAREENA SULTANA</td>
        <td>H&amp;S</td>
        <td>PROFESSOR</td>
        <td>PRESIDENT</td>
    </tr>
    <tr>
        <td>2</td>
        <td>MR SD BASHA</td>
        <td>ADMIN</td>
        <td>DIRECTOR</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>3</td>
        <td>DR ABDUL BARI</td>
        <td>CSE</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>4</td>
        <td>FIRASAT MIR</td>
        <td>CIVIL </td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>5</td>
        <td>PRAJWALA</td>
        <td>CSE</td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>6</td>
        <td>MOHAMMED AZAM</td>
        <td>MBA</td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MOHD RABBANI SAMDANI</td>
        <td>MECH</td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MR.YASEER</td>
        <td>ECE</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MS. NAJMA BEGUM</td>
        <td>IT</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
                        
                      </Table>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Internal Complaint Committee</h4>
                      <Table striped bordered hover>
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Dept.</th>
        <th>Designation</th>
        <th>COMMITTEE</th>
    </tr>
    <tr>
        <td>1</td>
        <td>DR ZAREENA SULTANA</td>
        <td>H&amp;S</td>
        <td>PROFESSOR</td>
        <td>PRESIDENT</td>
    </tr>
    <tr>
        <td>2</td>
        <td>DR MAZHAR UL HAQ</td>
        <td>EEE</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>3</td>
        <td>DR SRINIVASULU</td>
        <td>MECH</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>4</td>
        <td>MRS K. NANCHARI</td>
        <td>CIVIL </td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>5</td>
        <td>MD BAHAUDDIN</td>
        <td>MECH</td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>6</td>
        <td>AHSAN JAMIL</td>
        <td>H&amp;S</td>
        <td>ASST PROF</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MR. MOHD SAMIUDDIN</td>
        <td>IT</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MR. ABDUL TAMSEEL</td>
        <td>ECE</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MR.MOHD. SHAHNAWAZ</td>
        <td>MECH</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MOHD. SAIF</td>
        <td>CIVIL </td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
                        
                      </Table>
                    </div>
                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Anti-Ragging Committee</h4>
                      <Table striped bordered hover>
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Dept.</th>
        <th>Designation</th>
        <th>COMMITTEE</th>
    </tr>
    <tr>
        <td>1</td>
        <td>DR MOHAMMED MASOOD</td>
        <td>MECH</td>
        <td>PRINCIPAL</td>
        <td>PRESIDENT</td>
    </tr>
    <tr>
        <td>2</td>
        <td>MR SD BASHA</td>
        <td>ADMIN</td>
        <td>DIRECTOR</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>3</td>
        <td>DR ABDUL BARI</td>
        <td>CSE</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>4</td>
        <td>DR PREM CHANDRA</td>
        <td>IT</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>5</td>
        <td>DR ABDUL MATEEN AHMED</td>
        <td>ECE</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>6</td>
        <td>DR MAZHAR UL HAQ</td>
        <td>EEE</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>7</td>
        <td>DR SRINIVASULU</td>
        <td>MECH</td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MRS K. NANCHARI</td>
        <td>CIVIL </td>
        <td>HOD</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MS. JUVAIRIYAH</td>
        <td>ECE</td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MR. FAHEEM SUBHANI</td>
        <td>CIVIL </td>
        <td>STUDENT</td>
        <td>MEMBER</td>
    </tr>

                      </Table>
                    </div>
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

export default Committees
