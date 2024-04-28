import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import Tables from './Table'
import Sidebar from '../Academic/Sidebar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const Exambranch = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exam Branch</title>
        <meta name="description" content="Exam Timetable & Notifications" />

        <link rel="canonical" href="http://islec.edu.in/exambranch" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Exam Branch</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Exam Branch
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      {/* <img
                        className="authorExam"
                        src="https://i.ibb.co/RC8C8jx/raghavender-removebg-preview-1.jpg"
                        alt="author"
                      /> */}
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
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="https://islengg.ac.in">
                          exambranch@islec.edu.in
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-60 mb-60 exambranch">
        <Container>
          <Row>
            <Col md={4} className="sidebar academic">
              <Sidebar />
            </Col>

            <Col md={8}>

            <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>About Exambranch</Tab>
                    <Tab>Notifications</Tab>
                  </TabList>
                  



                  <TabPanel className="tab-content tab-content-info text-justify">

                    <h5>About Exambranch</h5>

                    <p>The college boasts of its world-class infrastructure for conducting all the examinations. A qualified and hands-on team of teaching and non-teaching staff are associated with the cell for carrying out the activities efficiently. The examination branch is headed by the Controller of Examinations and the Principal is the Chief Controller of Examinations.
The office of the Controller of Examinations was established in the year 2016 after the conferment of Autonomous status to the institute.
</p>
                    <h6>The responsibilities of the office are:</h6>
                    <ul>
                      <li><i className="fa fa-check"></i> Circulating academic calendar which includes all the academic related activities.</li>
                      <li><i className="fa fa-check"></i>	Conducting the Continuous Internal Examinations (CIE) and Semester End Examinations (SEE).</li>
                      <li><i className="fa fa-check"></i>	Processing Internal Examination results, Consolidate attendance.</li>
                      <li><i className="fa fa-check"></i>	Issuing certificates such as Grade Sheet, Consolidated Statements of Grade, Provisional Certificate received from Osmania University</li>
                      <li><i className="fa fa-check"></i> The CoE shall be responsible for the Collections and Maintenance of student biodata from the students.</li>
                      <li><i className="fa fa-check"></i>	To obtain approved syllabi for each course from the respective BOS Chairperson.</li>
                      <li><i className="fa fa-check"></i>	Registration of programs opens electives from the students for the Semester End Examinations.</li>
                      <li><i className="fa fa-check"></i>	Conduction of all examinations of UG/PG and issue notifications, timetables, seating Plans,and Invigilation duties.</li>
                      <li><i className="fa fa-check"></i> To obtain a panel of examiners for theory and laboratories from the respective Chairperson, BOS.</li>
                      <li><i className="fa fa-check"></i> To appoint Panel of Examiners for question paper setting and evaluation of both Internal and External (Theory and laboratory) Examinations from various other colleges and Universities.</li>
                      <li><i className="fa fa-check"></i> To appoint Scrutinizers and coding officers.</li>
                      <li><i className="fa fa-check"></i> To appoint Moderators for question papers.</li>
                      <li><i className="fa fa-check"></i> To issue the Hall Tickets to the eligible students for the Examination.</li>
                      <li><i className="fa fa-check"></i> To maintain stationary related to the exam branch.</li>
                      <li><i className="fa fa-check"></i> To arrange for the review of results and moderation.</li>
                      <li><i className="fa fa-check"></i> To publish the results with approval of Osmania university, officials.</li>
                      <li><i className="fa fa-check"></i> To issue semester grade cards, provisional certificates, and Transcripts</li>
                      <li><i className="fa fa-check"></i> To arrange for revaluation and challenge evaluation of answer scripts.</li>
                      <li><i className="fa fa-check"></i> Any other related work pertaining to examinations and evaluation as and when required by the Principal.</li>
                      <li><i className="fa fa-check"></i> Functions of Additional Controller of Examination</li>
                      <li><i className="fa fa-check"></i> Preparation and distribution of timetables and communicating the same to the departments, well in advance.</li>
                      <li><i className="fa fa-check"></i> Correspond regularly with the paper setters and external examiners</li>
                      <li><i className="fa fa-check"></i> Prepare Nominal rolls, Hall tickets, D-forms, and Attendance statements.</li>
                      <li><i className="fa fa-check"></i> Assist in organizing question papers, oversee the moderation, assign question paper codes and finally print the selected paper.</li>
                      <li><i className="fa fa-check"></i> Arrange for coding of answer scripts and spot valuation.</li>
                      <li><i className="fa fa-check"></i> Seal and issue answer scripts to the appointed internal/external evaluators.</li>
                      <li><i className="fa fa-check"></i> Arrange for scrutiny of answer scripts and tabulation of results.</li>
                      <li><i className="fa fa-check"></i> Preserve valued answer scripts for future reference.</li>
                      <li><i className="fa fa-check"></i> Obtain Key Solutions to the question paper from the respective examiners.</li>
                      <li><i className="fa fa-check"></i> Help the controller in processing and analyzing the results.</li>
                      <li><i className="fa fa-check"></i> Document student data.</li>
                      <li><i className="fa fa-check"></i> Assist in the publication of results.</li>
                      <li><i className="fa fa-check"></i> Any other work related to examinations and evaluation as assigned by the Controller of Examinations.</li>

                    </ul>

                    <Table className='striped bordered hover text-center'>
    <tr>
        <th>S.NO</th>
        <th>NAME OF THE FACULTY</th>
        <th>DESIGNATION</th>
        <th>ROLE</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr. Mohammed Masood</td>
        <td>PRINCIPAL</td>
        <td>Chief Superintendent</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mr. M A SALMAN KHAN</td>
        <td>Assistant Professor, Mechanical</td>
        <td>Additional Chief Superintendent</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mr. Mohammed Ashraf</td>
        <td>Assistant Professor, ECE</td>
        <td>Additional Chief Superintendent</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Mr. SMK AMJAD ALI KHAN</td>
        <td>Admin Department</td>
        <td>Office Superintendent</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mr. Ahsan Jamil </td>
        <td>Assistant Professor, ECE</td>
        <td>Exam Branch Coordinator </td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mr. Sameer Majeed</td>
        <td>Assistant Professor, MBA</td>
        <td>Exam Branch Coordinator </td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mr. Ahraj Ali</td>
        <td>System Administration</td>
        <td>System In charge</td>
    </tr>
</Table>


                  </TabPanel>
                  <TabPanel className="tab-content tab-content-info text-justify">

                    <Tables />

                  </TabPanel>
                  </Tabs>

              </section>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Exambranch
