import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../CSE/components/Sidebar'
import Sidepost from '../CSE/components/Sidepost'
import Syllabus from '../CSE/components/Syllabus'
import Slide from '../CSE/components/Slide'
import { Link } from 'react-router-dom'
import TableP from './components/Table'
import { Helmet } from 'react-helmet'

const cse = () => {
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
                <h4 className="title">Computer Science & Engineering</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a href="#/">Department</a>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        Computer Science & Engineering
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                  <div className="media_image">
                      <img
                        className="author"
                        src="https://www.islec.edu.in/docs/cse/csehod.jpg"
                        alt="author"
                      />
                    </div>

                    <div className="media_content media-body">
                      <h6 className="title">Dr. Mohammed Abdul Bari</h6>
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
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="mailto:cse.hod@islec.edu.in">
                          cse.hod@islec.edu.in
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

      <section className="course-details-area dept pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <Slide />
              <section className="dept-tabs mt-20">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Programme Outcomes</Tab>
                    <Tab>Course Outcomes</Tab>
                    <Tab>Syllabus</Tab>
                    <Tab>Publications</Tab>
                    <Tab>Faculty</Tab>
                    <Tab>Infrastructure</Tab>
                    <Tab>Department Events</Tab>
                    <Tab>Resources</Tab>
                    <Tab>Course Materials</Tab>
                    <Tab>*Student Clubs</Tab>
                    <a href='https://islec.edu.in/docs/paqic/cse.pdf'><Tab>*PAQIC</Tab></a>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                      Department of CSE has started its UG program BE(CSE) in the year 2008 with an intake of 60. At present the department has expanded to 180 students. M. Tech in CSE was started in the year 2021 with an intake of 18. The intellectual ambiance in CSE Department is conducive to the holistic development of the students with well-equipped labs.
                      </p>
                      <p>
                      CSE department is in process of recognized research under Osmania University. Faculty and students have few patents to their credit. Department of CSE has center of excellence approved from Osmania University.
                      </p>
                      <p>Department has committed well qualified and professionally active staff and most of the staff are pursuing Ph.D. in emerging areas like AI, ML, Cyber Security, Data Science, Data Mining, and Block Chain.</p>
                      <p>Department is conducting the workshops and certifications under EduSkills, EC-Council. Various activities are conducted in collaboration with professional bodies like CSI, ISTE along with student branches of IEEE and CSI.</p>
                      <p>The placement records of the CSE department are exceptional, students getting placed in various MNC. Our placement record has been consistent with the placement record more of students placed every year. Top companies that visited the campus for placements. The number of students who are doing internships is gradually increasing every year.</p>

                      <h4>ABOUT THE HOD</h4>

                      <p><b>Dr. Mohammed Abdul Bari</b> – Currently Working as Professor and HOD in CSE Dept , ISL Engineering College ,having More than 15 years of teaching experience in reputed Engineering Colleges in India, Europe, and Gulf University. More than 49 international journals, including, IEEE, Elsevier and Springer     Co-Author of 3(Three) books, Strong knowledge of relational databases (RDBMS), data modelling, SAP, Software Engineering, and Manet. 3 Patent, I2OR National Eminent Researcher Award 2020. Double Masters, Cisco Certified., Reviewer of Conference CSAE-2019, Reviewer Journal Mathematics and Computer Science (MCS), ICACECS-Springer; AWS Cloud Practitioner Certified, Juniper Networks Cloud, Designed Syllabus VII Sem Osmania University -Cyber Security & Forensic Subjects. 2022, Cloud & DevOps 6 months course from the school of Continuing & Distance Education (SCDE) -JNTUH.</p>




                      <h4>Vision</h4>
                      <p>
                      To Establish the department as a centre of learning and innovation in computing and its applications, to produce successful graduates in computer science & engineering through collaboration between industry and academician to meet the global demand.
                      </p>

                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> MD1 : To empower students through knowledge sharing and adapting to emerging technology.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> MD2 : To equip students with cutting-edge tools for adapting to the demands of a global economy.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> MD3 : To inculcate the urge for lifelong learning along with professional and ethical practices.
                        </li>
                      </ul>

                      <h4>Program Educational Objectives (PEOs)</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>PEO 1 :
                          Gain strong fundamentals concepts and technical competency through innovate solutions to solve emerging problems.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 2 : Continuously enhance their skills through training in multidisciplinary rapidly changing technology.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 3 : Exhibit commitment to ethical practices, societal contributions, and lifelong learning.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <p>
                      At the end of the program the students (Engineering
                      Graduates) will be able to:
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-check"></i>PO 1 : Engineering knowledge:
                        Apply the knowledge of mathematics, science, engineering
                        fundamentals, and an engineering specialization to the
                        solution of complex engineering problems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 2 : Problem analysis:
                        Identify, formulate, review research literature, and
                        analyse complex engineering problems reaching
                        substantiated conclusions using first principles of
                        mathematics, natural sciences, and engineering sciences.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 3 : Design/development of
                        solutions: Design solutions for complex engineering
                        problems and design system components or processes that
                        meet the specified needs with appropriate consideration
                        for the public health and safety, and the cultural,
                        societal, and environmental considerations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 4 : Conduct investigations
                        of complex problems: Use research-based knowledge and
                        research methods including design of experiments,
                        analysis and interpretation of data, and synthesis of
                        the information to provide valid conclusions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 5 : Modern tool usage:
                        Create, select, and apply appropriate techniques,
                        resources, and modern engineering and IT tools including
                        prediction and modelling to complex engineering
                        activities with an understanding of the limitations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 6 : The engineer and
                        society: Apply reasoning informed by the contextual
                        knowledge to assess societal, health, safety, legal and
                        cultural issues and the consequent responsibilities
                        relevant to the professional engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 7 : Environment and
                        sustainability: Understand the impact of the
                        professional engineering solutions in societal and
                        environmental contexts, and demonstrate the knowledge
                        of, and need for sustainable development.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 8 : Ethics: Apply ethical
                        principles and commit to professional ethics and
                        responsibilities and norms of the engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 9 : Individual and team
                        work: Function effectively as an individual, and as a
                        member or leader in diverse teams, and in
                        multidisciplinary settings.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 10 : Communication:
                        Communicate effectively on complex engineering
                        activities with the engineering community and with
                        society at large, such as, being able to comprehend and
                        write effective reports and design documentation, make
                        effective presentations, and give and receive clear
                        instructions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 11 : Project management and
                        finance: Demonstrate knowledge and understanding of the
                        engineering and management principle and apply these to
                        one’s own work, as a member and leader in a team, to
                        manage projects and in multidisciplinary environments.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 12 : Lifelong learning:
                        Recognize the need for, and have the preparation and
                        ability to engage in independent and life-long learning
                        in the broadest context of technological change.
                      </li>
                      <h4>Program Specific Outcomes</h4>
                      <li>
                        <i className="fa fa-check"></i>PSO 1 : Efficient coding: an
                        ability to analyse a problem, design the algorithm and
                        optimally code its solution.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PSO 2 : Software deployment: an
                        ability to identify & define computing requirements to
                        test, implement and maintain a software product.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                  <object data="http://islec.edus.in/DATA/CO/cse.pdf" type="application/pdf" width={900} height={900}>
                    <p>View Course Outcome here  <a href="http://islec.edu.in/DATA/CO/cse.pdf">View PDF!</a></p>
                  </object> 
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <Syllabus />

                      <Table className='striped bordered hover'>
                        <tr>
                          <th>Lab</th>
                          <th>Download</th>
                        </tr>

                        <tr>
                          <td>ADVANCED COMPUTER SKILLS LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/ACS_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>

                        <tr>
                          <td>COMPUTER NETWORKS LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/CN_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>  
                        <tr>
                          <td>COMPUTER ORGANIZATION LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/CO_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>DESIGN AND ANALYSIS OF ALGORITHMS LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/DAA_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>DATABASE MANAGEMENT SYSTEMS LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/DBMS_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>DISTRIBUTED SYSTEM LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/DISTRIBUTED_SYSTEM_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>DATA STRUCTURESAND ALGORITHMS LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/DSA_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>DATA SCIENCE LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/DSR_LAB FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>MACHINE LEARNING LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/ML_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>OOPS USING JAVA LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/OOP_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>OPERATING SYSTEM LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/OS_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>SOFTWARE ENGINEERING LAB</td>
                          <td><a href='https://islec.edu.in/docs/cse/LAB/SE_LAB_FINAL.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>


                      </Table>

                    </div>
                  </TabPanel>
                 

                  <TabPanel>
                    <div className="syll text-center">

                    <Table className='striped bordered hover'>
                     <tr>
                        <th>Name</th>
                        <th>View</th>
                     </tr>
                     <tr>
                        <td>CSE PAPER PUBLICATION 2019_23</td>
                        <td><a href='https://islec.edu.in/docs/cse/publications/CSE-PAPER-PUBLICATION-19-23.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>CSE PAPER PUBLICATION 2017_21</td>
                        <td><a href='https://islec.edu.in/docs/cse/publications/CSE-PAPER-PUBLICATION-2017_21.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>CSE PAPER PUBLICATION 2016_20</td>
                        <td><a href='https://islec.edu.in/docs/cse/publications/CSE-PAPER-PUBLICATION-2016_20.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>CSE 2018-22 All Publicaton</td>
                        <td><a href='https://islec.edu.in/docs/cse/publications/CSE-2018-22-All-Publicaton.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>2_Grants_2017_18</td>
                        <td><a href='https://islec.edu.in/docs/cse/publications/2_Grants_2017_18.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>3_Grants_2016_20</td>
                        <td><a href='https://islec.edu.in/docs/cse/publications/3_Grants_2016_20.pdf'>View</a></td>
                     </tr>
                    </Table>

                      
                      <TableP />
                    </div>
                  </TabPanel>


                  <TabPanel>
                    <div className="syll text-center">
                    <Table className='striped bordered hover'>
    <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Designation</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr. M.A. Bari</td>
        <td>Assoc. Prof.</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dr. Jameel Hashmi</td>
        <td>Assoc. Prof.</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Dr. Syed Asadullah Hussaini</td>
        <td>Assoc. Prof.</td>
    </tr>
    <tr>
        <td>4</td>
        <td>S.K. Saleem</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mukarram Uddin</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Asma Akbar</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>7</td>
        <td>T. Anita</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Asjad Mohi Uddin</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Umme Ruma</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Shaista Farheen</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Mohammed Rahmat Ali</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Madhuri Dachapalli</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Vaseem Uddin</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>14</td>
        <td>S. Sunaina</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Mohd Taqi Uddin Ahmed</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Mohd Akber Ali</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Nishat Akbari</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Syed Omer Farooq</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>19</td>
        <td>L. Vaishnavi</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>20</td>
        <td>A.Raj Shaker</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Ijteba Sultana</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Ayesha Mehreen</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>23</td>
        <td>Afsha Nishat</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>24</td>
        <td>Nousheen Fathima</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Syed Moiduddin Shahbaaz</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Shaheen Fatima</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>27</td>
        <td>Md Hasan Majeed Faaraan</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>28</td>
        <td>Mohammed Sheraz Nadeem</td>
        <td>Asst.Prof</td>
    </tr>
</Table>
                    </div>
                  </TabPanel>
                  

                  <TabPanel>
                    <div className="syll">
                      <h4>INFRASTRUCTURE</h4>

                      <div className='mt-30'>
                      <Row>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Infra/in1.png" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Infra/in2.png" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Infra/in3.png" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Infra/in5.JPG" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Infra/in3.JPG" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                      </Row>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Departmental Events</h4>

                      <Row>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/career_guidance.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/interview.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/fullstack.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/hackathon.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/phishing.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/python.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/ISRO.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/cell.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/cse/Events/higher.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>

                        
                      </Row>


                      <ul>
                        <li><a href='https://islec.edu.in/docs/cse/Club_Activities-Red_Hat.pdf'><h6>
                          Club Activities-Red Hat <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/cse/FDP-2020-21.pdf'><h6>
                          FDP-2020-21 <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/cse/Club-Activities-Cyber-Security.pdf'><h6>
                          Club Activities-Cyber Security <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/cse/Club-Activities-Full-Stack.pdf'><h6>
                          Club Activities-Full Stack <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/cse/Club-Activities-Python.pdf'><h6>
                          Club Activities-Python <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        
                        <li><a href='https://islec.edu.in/docs/cse/Club-Activities-Big-Data-Analytics.pdf'><h6>
                          Club Activities- Big Data Analytics <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/cse/Club-Activities-AWS.pdf'><h6>
                          Club Activities-AWS <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>

                      </ul>
                    
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Student Resources</h4>
                      <ul className='mt-30'>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='https://islec.edu.in/docs/cse/Resources/EC_Council.pdf'> MoU | EduSkills </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='https://islec.edu.in/docs/cse/Resources/EC_Council.pdf'> MoU | EC-Council </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='/#'> Academic Email usage Policy </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='https://internship.aicte-india.org/'> AICTE Internships  </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='https://nptel.ac.in/domains'>  NPTEL Domain Certificate </a>
                        </li>

                      </ul>
                    </div>
                  </TabPanel>
                  
                  <TabPanel>
                    <h1 className='mt-50'>Work in progress</h1>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Students Club</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> Big Data Analytics
                        </li>
                        <li>
                          <i className="fa fa-check"></i> AWS
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Cyber Security
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Full Stack Web Developer
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Python
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Red Hat
                        </li>
                      </ul>
                    
                    </div>
                  </TabPanel>



                </Tabs>

              </section>
            </Col>
            <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
                    <Sidebar />
                  </div>
                </div>

                <Sidepost />
                
                <div className="text-right">
                  <a href="/events" className="pt-10 ">
                    More{' '}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default cse