import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../CSE/components/Sidebar'
import Sidepost from '../CSE/components/Sidepost'
import Slide from '../CSE/components/Slide'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const cse = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>M.Tech CSE</title>
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
                <h4 className="title">M.Tech CSE</h4>
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
                        M.Tech CSE
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                      <p>Head of Department</p>
                      {/* <h6 className="title">Dr. Mohammed Abdul Bari</h6> */}
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
                    <Tab>Curriculum</Tab>
                    <Tab>Publications</Tab>
                    <Tab>Faculty</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        Department of CSE has started its PG program M.Tech(CSE) in the year 2022 with an intake of 18. At present the department has expanded to 180 students. M. Tech in CSE was started in the year 2021 with an intake of 18. The intellectual ambiance in CSE Department is conducive to the holistic development of the students with well-equipped labs.
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

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="mt-50">
                      <h4>Syllabus</h4>
                      <ul className='mt-30'>
                        <li>
                          <i className="fa fa-eye"></i> <a href='https://islec.edu.in/docs/mtechcse/syllabus.pdf'> VIEW SYLLABUS </a>
                        </li>
                      </ul>
                    </div>

                    <Table className='striped bordered hover text-center'>
                        <tr>
                          <th>Lab</th>
                          <th>Download</th>
                        </tr>

                        <tr>
                          <td>ADVANCED ALGORITHMS LAB</td>
                          <td><a href='https://islec.edu.in/docs/mtechcse/lab/AdvanceAlgorithmLab.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>ADVANCED DATA STRUCTURE LAB</td>
                          <td><a href='https://islec.edu.in/docs/mtechcse/lab/AdvanceDataStructureLab.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                        <tr>
                          <td>MACHINE LEARNING SKILLS LAB</td>
                          <td><a href='https://islec.edu.in/docs/mtechcse/lab/MachineLearningLab.pdf'><i class="fa fa-download" aria-hidden="true"></i> </a></td>
                        </tr>
                    </Table>

                  </TabPanel>
                 

                  <TabPanel>
                    <div className="syll text-center">

                    <Table className='striped bordered hover'>
                     <tr>
                        <th>Name</th>
                        <th>View</th>
                     </tr>
                     <tr>
                        <td>WEAPON DETECTION USING ARTIFICIAL INTELLIGENCE AND DEEP LEARNING FOR SECURITY APPLICATIONS</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/1.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>A PROJECT REPORT ON INTRUSION DETECTION</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/2.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>FINGERPRINT IMAGE IDENTIFICATION FOR CRIME DETECTION</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/3.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>DECENTRALIZED APPLICATION FOR SECURE MESSAGING IN A TRUSTLESS ENVIRONMENT</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/4.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>FACIAL RECOGNITION ATTENDANCE SYSTEM</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/5.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>DRIVER DROWSINESS MONITORING SYSTEM USINGMACHINE LEARNING</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/6.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>Graphical Password Secure Authentication System</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/7.pdf'>View</a></td>
                     </tr>
                     <tr>
                        <td>MINI PROJECT RESEARCH PUBLICATION</td>
                        <td><a href='https://islec.edu.in/docs/mtechcse/publications/mini-22-23.pdf'>View</a></td>
                     </tr>


                    </Table>

                      
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
        <td>Dr.Pathan Ahmed Khan</td>
        <td>Assoc. Prof.</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Heena Yasmin</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>3</td>
        <td>M. Sai Kiran</td>
        <td>Asst.Prof</td>
    </tr>
                    </Table>
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
