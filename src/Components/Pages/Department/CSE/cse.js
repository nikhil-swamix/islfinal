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
                        src="https://www.islec.edu.in/docs/cse/csehod.png"
                        alt="author"
                      />
                    </div>

                    <div className="media_content media-body">
                      <h6 className="title">Dr. Mohammed Jameel Hashmi 	</h6>
                      <p>MCA , Ph.D</p>
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
                    <p></p>
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
                    <Tab>Placement</Tab>
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
        <th>Date of Joining</th>
        <th>Qualification</th>
        <th>Nature of Association</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr.M.A.Bari</td>
        <td>Associate Professor</td>
        <td>26-06-2018</td>
        <td>M.Sc.(Engineering)and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dr.Mohammed Jameel Hashmi</td>
        <td>Associate Professor</td>
        <td>3/1/22</td>
        <td>MCA and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Dr. Syed Asadullah Hussaini</td>
        <td>Associate Professor</td>
        <td>5/3/18</td>
        <td>ME/M.Tech and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Dr.Pathan Ahmed Khan</td>
        <td>Associate Professor</td>
        <td>1/2/20</td>
        <td>ME/M.Tech and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Dr.Md.Zainlabuddin</td>
        <td>Associate Professor</td>
        <td>1/6/18</td>
        <td>ME/M.Tech and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Dr.VeeramalaiSankardass</td>
        <td>Professor</td>
        <td>23-01-2017</td>
        <td>ME/M.Tech and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Dr.Suresh Kumar</td>
        <td>Professor</td>
        <td>2/6/17</td>
        <td>ME/M.Tech and PhD</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>8</td>
        <td>S.K. Saleem</td>
        <td>Assistant Professor</td>
        <td>10/6/17</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MukarramUddin</td>
        <td>Assistant Professor</td>
        <td>7/11/16</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>10</td>
        <td>M. Sai Kiran</td>
        <td>Assistant Professor</td>
        <td>2/1/21</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Ijteba Sultana</td>
        <td>Assistant Professor</td>
        <td>1/6/21</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>12</td>
        <td>L.Vaishnavi</td>
        <td>Assistant Professor</td>
        <td>29-03-2022</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Afsha Nishat</td>
        <td>Assistant Professor</td>
        <td>2/5/22</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Asma Akbar</td>
        <td>Assistant Professor</td>
        <td>1/1/18</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Nousheen Fathima</td>
        <td>Assistant Professor</td>
        <td>13-09-2022</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>16</td>
        <td>T.Anita</td>
        <td>Assistant Professor</td>
        <td>21-07-2018</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>17</td>
        <td>VaseemUddin</td>
        <td>Assistant Professor</td>
        <td>31-12-2021</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Madhuri Dachapalli</td>
        <td>Assistant Professor</td>
        <td>30-01-2021</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Asjad MohiUddin</td>
        <td>Assistant Professor</td>
        <td>12/12/19</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Mohd TaqiUddin Ahmed</td>
        <td>Assistant Professor</td>
        <td>12/10/17</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Mohd Akber Ali</td>
        <td>Assistant Professor</td>
        <td>7/7/22</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Heena Yasmin</td>
        <td>Assistant Professor</td>
        <td>4/2/21</td>
        <td>M.E/M.Tech</td>
        <td>Regular  </td>
    </tr>
    <tr>
        <td>23</td>
        <td>Md Dastagir</td>
        <td>Assistant Professor</td>
        <td>23-03-2018</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>24</td>
        <td>Rehana Fatima</td>
        <td>Assistant Professor</td>
        <td>3/2/20</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Imreena Ali</td>
        <td>Assistant Professor</td>
        <td>9/1/14</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Gayathri</td>
        <td>Assistant Professor</td>
        <td>28-08-2021</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>27</td>
        <td>Lubna Nousheen</td>
        <td>Assistant Professor</td>
        <td>14-09-2022</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>28</td>
        <td>Umme Ruma</td>
        <td>Assistant Professor</td>
        <td>14-03-2018</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>29</td>
        <td>Mateen Sultana</td>
        <td>Assistant Professor</td>
        <td>1/7/17</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>30</td>
        <td>Shaista Farheen</td>
        <td>Assistant Professor</td>
        <td>2/1/20</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>31</td>
        <td>Syed Abdul Wahab Asif</td>
        <td>Assistant Professor</td>
        <td>1/7/22</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>32</td>
        <td>GousiaTabassum</td>
        <td>Assistant Professor</td>
        <td>28-08-2017</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>33</td>
        <td>Mohammed Rahmat Ali</td>
        <td>Assistant Professor</td>
        <td>14-09-2020</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>34</td>
        <td>Mohd Azhar Siddiqui</td>
        <td>Assistant Professor</td>
        <td>28-02-2024</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>35</td>
        <td>Mohd Amer</td>
        <td>Assistant Professor</td>
        <td>26-02-2024</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>36</td>
        <td>Raheela Tabassum</td>
        <td>Assistant Professor</td>
        <td>25-02-2024</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>37</td>
        <td>Ms.Asra Fatima</td>
        <td>Assistant Professor</td>
        <td>5/3/24</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>38</td>
        <td>Mohd Zakir Hussain</td>
        <td>Assistant Professor</td>
        <td>5/3/24</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>39</td>
        <td>Mohd Ghouse Uddin</td>
        <td>Assistant Professor</td>
        <td>15-03-2024</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>40</td>
        <td>Sumera Jabeen</td>
        <td>Assistant Professor</td>
        <td>16-03-2024</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>41</td>
        <td>Mohd Harun</td>
        <td>Assistant Professor</td>
        <td>15-03-2024</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>42</td>
        <td>Abdul Khaliq</td>
        <td>Assistant Professor</td>
        <td>9/3/24</td>
        <td>M.E/M.Tech</td>
        <td>Regular</td>
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

                  <TabPanel>
                    <div className="syll text-center">
                      <h4>Year of Passing , A.Y.- 2022-2023</h4>
                      <Table>
    <tr>
        <th>Sl.No</th>
        <th>Name Of The Student</th>
        <th>Roll.No</th>
        <th>Salary Per Annum</th>
        <th>On/Off Campus</th>
    </tr>
    <tr>
        <td>1</td>
        <td>NIKHATH SULTANA</td>
        <td>160519733001</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>2</td>
        <td>ATIYA</td>
        <td>160519733004</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>3</td>
        <td>SHAIK SHARFUDDIN</td>
        <td>160519733011</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>4</td>
        <td>SYED MUSTAFA ALI</td>
        <td>160519733084</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>5</td>
        <td>MOHAMMED KHAJA ADNAN ALI KHAN</td>
        <td>160519733103</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>6</td>
        <td>SYED MOHAMMED KAREEMUDDIN</td>
        <td>160519733110</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MOHAMMED ASIM KHAN</td>
        <td>160519733305</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>8</td>
        <td>AYESHA SIDDIQUA</td>
        <td>160519733002</td>
        <td>4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MOHAMMED FAISAL UDDIN</td>
        <td>160519733007</td>
        <td>4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MOHD ABDULLAH ANSARI</td>
        <td>160519733028</td>
        <td>4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MOHAMMED ZABI UDDIN</td>
        <td>160519733030</td>
        <td>4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>12</td>
        <td>SYED KHAJA IRFAN UDDIN</td>
        <td>160519733039</td>
        <td>4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>13</td>
        <td>SYED MAHMOOD</td>
        <td>160519733053</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>14</td>
        <td>MUNEEB ABDUL QADEER</td>
        <td>160519733044</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>15</td>
        <td>JUNAID HUSSAIN</td>
        <td>160519733064</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>16</td>
        <td>MUHAMMAD BIN ALI BIN HALAIS</td>
        <td>160519733057</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>17</td>
        <td>SHAISTA PARVEEN</td>
        <td>160519733069</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>18</td>
        <td>RUBEENA</td>
        <td>160519733085</td>
        <td>2.2 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>19</td>
        <td>NAZMEEN</td>
        <td>160519733089</td>
        <td>2.2 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>20</td>
        <td>NAHDIA MARYAM OSMANI</td>
        <td>160519733087</td>
        <td>2.2 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>21</td>
        <td>HASSAN QURESHI</td>
        <td>160519733102</td>
        <td>2.2 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>22</td>
        <td>SYED OSMAN KHALEEL</td>
        <td>160519733114</td>
        <td>2.2 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>23</td>
        <td>KHAJA TABARAK UDDIN</td>
        <td>160519733306</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>24</td>
        <td>MOHAMMED ISMAIL</td>
        <td>160519733092</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>25</td>
        <td>KHALED IBRAHIM BAYZEED</td>
        <td>160519733112</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>26</td>
        <td>ABDULLA MOHD</td>
        <td>160519733307</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>27</td>
        <td>FASEE UR REHMAN</td>
        <td>160519733095</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>28</td>
        <td>MOHD WASIF UR RAHMAN</td>
        <td>160519733101</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>29</td>
        <td>MOHAMMED SADIQ ALI</td>
        <td>160519733301</td>
        <td>3.75 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>30</td>
        <td>SANIYA FATHIMA</td>
        <td>160519733096</td>
        <td>3.94 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>31</td>
        <td>ABDUL AZIZ AKBAR KHAN</td>
        <td>160519733115</td>
        <td>3.94 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>32</td>
        <td>QUDSIYA FATIMA</td>
        <td>160519733304</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>33</td>
        <td>MOHAMMED MUBASHSHIR ALAM</td>
        <td>160519733097</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>34</td>
        <td>MOHAMMED NAIF UDDIN</td>
        <td>160519733310</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>35</td>
        <td>SYED SUFFIAN HUSSAIN</td>
        <td>160519733068</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>36</td>
        <td>MOHAMMED NABEEL AHMED JUNAIDI</td>
        <td>160519733083</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>37</td>
        <td>NOUSHEEN SULTANA</td>
        <td>160519733018</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>38</td>
        <td>UZMA BEGUM</td>
        <td>160519733005</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>39</td>
        <td>ABDUL RAFEY</td>
        <td>160519733015</td>
        <td>3.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>40</td>
        <td>MOHAMMED FAHAD</td>
        <td>160519733098</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>41</td>
        <td>ABDUL ARBAZ</td>
        <td>160519733106</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>42</td>
        <td>SYED AHMED MOHI UDDIN HASAN</td>
        <td>160519733010</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>43</td>
        <td>MOHAMMED ABEEL AHMED MOHIUDDIN</td>
        <td>160519733008</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>44</td>
        <td>IMRAN BIN IBRAHIM</td>
        <td>160519733012</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>45</td>
        <td>SYED ADNAN</td>
        <td>160519733026</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>46</td>
        <td>MOHAMMED SUFIYAN ALI QUADRI</td>
        <td>160519733034</td>
        <td>9 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>47</td>
        <td>MOHD SAIFULLA</td>
        <td>160519733016</td>
        <td>6.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>48</td>
        <td>MD ABDUL WADOOD KHAN</td>
        <td>160519733109</td>
        <td>6.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>49</td>
        <td>TAHNIYATH BEGUM</td>
        <td>160519733023</td>
        <td>6.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>50</td>
        <td>MIRZA ABRAR BAIGH</td>
        <td>160519733049</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>51</td>
        <td>MOHD KAIF</td>
        <td>160519733038</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>52</td>
        <td>SYED ADNAN AFTAB</td>
        <td>160519733056</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>53</td>
        <td>MOHAMMED ATHER</td>
        <td>160519733072</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>54</td>
        <td>SYED AMIR</td>
        <td>160519733071</td>
        <td>3.6 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>55</td>
        <td>MOHD SUBHAN KHAN</td>
        <td>160519733060</td>
        <td>3.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>56</td>
        <td>MOHAMMAD ABBAS</td>
        <td>160519733094</td>
        <td>3.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>57</td>
        <td>MOHD YASIN</td>
        <td>160519733079</td>
        <td>3.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
</Table>

                        <h4 className='mt-35 mb-15'>Year of Passing , A.Y.- 2021-2022</h4>

                        <Table>
     <tr>
        <th>Sl.No</th>
        <th>Name Of The Student</th>
        <th>Roll.No</th>
        <th>Salary Per Annum</th>
        <th>On/Off Campus</th>
    </tr>
    <tr>
        <td>1</td>
        <td>KHAJA MOHAMMED RAHEEMUDDIN</td>
        <td>160518733004</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>2</td>
        <td>HUMERA FATIMA</td>
        <td>160518733002</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>3</td>
        <td>MOHD ABDUL KAREEM UDDIN</td>
        <td>160518733007</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>4</td>
        <td>SHAIK ABDUL HABEEB</td>
        <td>160518733012</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>5</td>
        <td>MOHD ABDUL RAHMAN</td>
        <td>160518733013</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>6</td>
        <td>NEHA NIMRA TAMKEEN</td>
        <td>160518733014</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MOHAMMED IBRAHIM SHOEB</td>
        <td>160518733015</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>8</td>
        <td>ADEEBA NAAZ</td>
        <td>160518733016</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MOHD ATIF</td>
        <td>160518733017</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>10</td>
        <td>SYED AMER AFRIDI</td>
        <td>160518733018</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>11</td>
        <td>ABDUL REHMAN KHAN</td>
        <td>160518733019</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>12</td>
        <td>JUNAID AKBAR KHAN</td>
        <td>160518733020</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>13</td>
        <td>MOHAMAD MISBAH UDDIN ZIA</td>
        <td>160518733021</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>14</td>
        <td>MOHAMMED RASHED AHMED</td>
        <td>160518733022</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>15</td>
        <td>MOHD OWAIS</td>
        <td>160518733023</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>16</td>
        <td>SYED YAQOOB AYAAN ISHAQUI</td>
        <td>160518733024</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>17</td>
        <td>SADAF UNNISA</td>
        <td>160518733025</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>18</td>
        <td>SYED ALAUDDIN BUKHARI</td>
        <td>160518733027</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>19</td>
        <td>MOHAMMED ISHAQ</td>
        <td>160518733028</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>20</td>
        <td>MOHAMMED SAMEER</td>
        <td>160518733030</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>21</td>
        <td>SYEDA INBISATH FATIMA</td>
        <td>160518733031</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>22</td>
        <td>ABDUL HADI</td>
        <td>160518733032</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>23</td>
        <td>SAFI UR RAHMAN PASHA</td>
        <td>160518733033</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>24</td>
        <td>ANAS BIN YAHIYA QURESHI</td>
        <td>160518733036</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>25</td>
        <td>SALMA SUMREEN</td>
        <td>160518733037</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>26</td>
        <td>FOUZIA SULTANA</td>
        <td>160518733038</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>27</td>
        <td>MOHAMMED AZHARUDDIN</td>
        <td>160518733040</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>28</td>
        <td>SYED BILAL AHMED HUSSAINI</td>
        <td>160518733041</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>29</td>
        <td>MOHD ABDUL HAQ</td>
        <td>160518733043</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>30</td>
        <td>FAIZAN AHMED</td>
        <td>160518733044</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>31</td>
        <td>SYED SHEHRIYAR ALI</td>
        <td>160518733045</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>32</td>
        <td>AMER BIN AHMED BINDIYAB</td>
        <td>160518733046</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>33</td>
        <td>ZAKARIYA</td>
        <td>160518733047</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>34</td>
        <td>SHAIKH MOHAMMED SARFARAZ</td>
        <td>160518733049</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>35</td>
        <td>SYED HASHMATH PASHA QUADRI</td>
        <td>160518733050</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>36</td>
        <td>SHAYESTA NAZNEEN</td>
        <td>160518733056</td>
        <td>1.175 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>37</td>
        <td>MOHAMMED FAISAL ILYAS</td>
        <td>160518733057</td>
        <td>1.175 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>38</td>
        <td>SYED SAFI UDDIN</td>
        <td>160518733059</td>
        <td>1.175 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>39</td>
        <td>RAHEEM ALI</td>
        <td>160518733060</td>
        <td>1.175 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>40</td>
        <td>MOHAMMED FARHANUDDIN</td>
        <td>160518733061</td>
        <td>1.175 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>41</td>
        <td>MOHAMMED RAFI UDDIN</td>
        <td>160518733063</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>42</td>
        <td>MOHAMMED AYAZ HUSSAIN KHAN</td>
        <td>160518733065</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>43</td>
        <td>MOHAMMED MOINUDDIN ANSARI</td>
        <td>160518733066</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>44</td>
        <td>AFREEN SULTANA</td>
        <td>160518733067</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>45</td>
        <td>NADA FAYAZ</td>
        <td>160518733068</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>46</td>
        <td>SUMMAIYA FATIMA</td>
        <td>160518733069</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>47</td>
        <td>MOHAMMED SAMEER</td>
        <td>160518733070</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>48</td>
        <td>MOHD ABDUL RIZWAN</td>
        <td>160518733071</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>49</td>
        <td>MOHD NABEED UDDIN</td>
        <td>160518733005</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>50</td>
        <td>SUMERIA BEGUM</td>
        <td>160518733006</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>51</td>
        <td>MOHTASHAM SAYEED MOHIUDDIN</td>
        <td>160518733008</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>52</td>
        <td>MUSKAAN TABASUM</td>
        <td>160518733009</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>53</td>
        <td>MADIHA MUDDASIR</td>
        <td>160518733116</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>54</td>
        <td>MOHAMMED ABDUL WAJID SARSHAAR</td>
        <td>160518733106</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>55</td>
        <td>MOHAMMED SHOEB</td>
        <td>160518733307</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>56</td>
        <td>HUMERA TABBASUM</td>
        <td>160518733074</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>57</td>
        <td>HAFSA FATIMA</td>
        <td>160518733075</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>58</td>
        <td>SHOAIB ALI KHAN</td>
        <td>160518733076</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>59</td>
        <td>MIR MUJAHED ALI KHAN</td>
        <td>160518733077</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>60</td>
        <td>MOHD ABDUL FAIZAN</td>
        <td>160518733079</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>61</td>
        <td>MOHAMMED SALMAN KHAN</td>
        <td>160518733084</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>62</td>
        <td>SHEEMA NARGIS</td>
        <td>160518733085</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>63</td>
        <td>MOHAMMAD ALTAF HUSSAIN</td>
        <td>160518733086</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>64</td>
        <td>HABIB MOHAMMED YAMANI</td>
        <td>160518733089</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>65</td>
        <td>SAADIYA</td>
        <td>160518733090</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>66</td>
        <td>FARHAN ALI BAIG</td>
        <td>160518733093</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>67</td>
        <td>SHAIK SAADULLAH SHAREEF</td>
        <td>160518733094</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>68</td>
        <td>ASMA NAMERA</td>
        <td>160518733096</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>69</td>
        <td>AHMER MAHMOOD KHAN</td>
        <td>160518733099</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>70</td>
        <td>MOHAMMED ABDUL RAHEEM</td>
        <td>160518733102</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>71</td>
        <td>SYED TAJ UDDIN</td>
        <td>160518733104</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>72</td>
        <td>MOHAMMED AKRAM ALI</td>
        <td>160518733108</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>73</td>
        <td>MOHD FAHAD</td>
        <td>160518733113</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>74</td>
        <td>MOHAMMED SAEED</td>
        <td>160518733114</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>75</td>
        <td>MOHD GHOUSE MATEEN</td>
        <td>160518733115</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>76</td>
        <td>MOHAMMED FAIZAN ALI</td>
        <td>160518733117</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>77</td>
        <td>MOHAMMED SHADEEL</td>
        <td>160518733118</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>78</td>
        <td>MOHD ABDUL RAHMAN</td>
        <td>160518733078</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>79</td>
        <td>ZUBIYA RAHMAN</td>
        <td>160518733112</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>80</td>
        <td>MOHAMMED SHAHIDUDDIN</td>
        <td>160518733301</td>
        <td>1.75 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>81</td>
        <td>HAFSA FATIMA</td>
        <td>160518733302</td>
        <td>1.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>82</td>
        <td>SYED MOHAMMED IMADUDDIN MASIR</td>
        <td>160518733304</td>
        <td>1.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>83</td>
        <td>SUMAYYA MAHEEN UNNISA</td>
        <td>160518733305</td>
        <td>1.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>84</td>
        <td>MOHAMMED ABDUL REHAN</td>
        <td>160518733306</td>
        <td>1.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>85</td>
        <td>MOHAMMED ASIF UDDIN</td>
        <td>160518733308</td>
        <td>1.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
</Table>

                <h4 className='mt-35 mb-15'>Year of Passing , A.Y.- 2020-2021</h4>

                <Table>
    <tr>
        <th>Sl.No</th>
        <th>Name Of The Student</th>
        <th>Roll.No</th>
        <th>Salary Per Annum</th>
        <th>On/Off Campus</th>
    </tr>
    <tr>
        <td>1</td>
        <td>MOHD SOHAIL</td>
        <td>160517733030</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>2</td>
        <td>MOHAMMED SOHAIL ASKARI</td>
        <td>160517733073</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>3</td>
        <td>ADIL ALI KHAN</td>
        <td>160517733062</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>4</td>
        <td>MOHD AZHAR SIDDIQUI</td>
        <td>160517733301</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>5</td>
        <td>MOHD AHMED KHAN</td>
        <td>160517733036</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>6</td>
        <td>MARYAM SANIYA</td>
        <td>160517733026</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>7</td>
        <td>SUMAIYA BANU</td>
        <td>160517733056</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>8</td>
        <td>AFREEN FATHIMA</td>
        <td>160517733013</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SANA SULTANA</td>
        <td>160517733051</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MOHAMMED NIHAL KHAN</td>
        <td>160517733090</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MOHD SHAMSUDDIN AWAIS</td>
        <td>160517733035</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>12</td>
        <td>MOHAMMED FIRASATH</td>
        <td>160517733085</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>13</td>
        <td>M.A. ATIF</td>
        <td>160517733060</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>14</td>
        <td>MOHAMMED RIYAN ALI HASHMI</td>
        <td>160517733076</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>15</td>
        <td>SYED ABDUL KHADER ZOHAIB MEHDI</td>
        <td>160517733048</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>16</td>
        <td>NEHA TANVEER</td>
        <td>160517733057</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>17</td>
        <td>SYED NIHAL HUSSAIN MADANI</td>
        <td>160517733079</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Afreen sultana</td>
        <td>160517733080</td>
        <td>2.5 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>19</td>
        <td>MIRZA SOHAIL BAIG</td>
        <td>160517733074</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>20</td>
        <td>SUMAN ZAREEN</td>
        <td>160517733023</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>21</td>
        <td>SYED NOMAAN</td>
        <td>160517733052</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>22</td>
        <td>MOHAMMED KHALEELULLAH FAROOQUI SAFI</td>
        <td>160517733064</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>23</td>
        <td>ABDUL AKBER</td>
        <td>160517733022</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>24</td>
        <td>MOHD ABDUL BASEER</td>
        <td>160517733049</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>25</td>
        <td>SHAIK HAMED</td>
        <td>160517733059</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>26</td>
        <td>ABRAR AHMED ANSARI</td>
        <td>160517733088</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>27</td>
        <td>SYED MOHAMMED FURQAN ISHAQUI</td>
        <td>160517733058</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>28</td>
        <td>SYED MUTHALLIB AHMED</td>
        <td>160517733061</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>29</td>
        <td>MOHAMMED ABDUL HASEEB</td>
        <td>160517733054</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>30</td>
        <td>MOHAMMAD MUDASSIR</td>
        <td>160517733067</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>31</td>
        <td>MATEEN KHAN</td>
        <td>160517733070</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>32</td>
        <td>SYED AHADULLAH</td>
        <td>160517733075</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>33</td>
        <td>ABDUL MUJAHID</td>
        <td>160517733084</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>34</td>
        <td>SYED NUMAN HUSSAIN</td>
        <td>160517733086</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>35</td>
        <td>MOHAMMED ABDUL RAZZAK</td>
        <td>160517733033</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>36</td>
        <td>AFFAN ABDUL MOYEED</td>
        <td>160517733002</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>37</td>
        <td>SYED SHAHAB UDDIN</td>
        <td>160517733089</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>38</td>
        <td>SHAIKH AFNANUL HAQ</td>
        <td>160517733077</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>39</td>
        <td>SYED MATEEN</td>
        <td>160517733303</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>40</td>
        <td>AFFAN SALMA</td>
        <td>160517733066</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>41</td>
        <td>MOHAMMED MUJEEB</td>
        <td>160517733015</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
</Table>

        <h4 className='mt-35 mb-15'>Year of Passing , A.Y.- 2019-2020</h4>

        <Table>
    <tr>
        <th>Sl.No</th>
        <th>Name Of The Student</th>
        <th>Roll.No</th>
        <th>Salary Per Annum</th>
        <th>On/Off Campus</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Mohammed Hussain omer</td>
        <td>160516733004</td>
        <td>2.2 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>2</td>
        <td>IRFAN HUSSAIN</td>
        <td>160516733014</td>
        <td>2.2 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mohd Haseeb Ahmed</td>
        <td>160516733020</td>
        <td>2.2 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Mohd Azam</td>
        <td>160516733039</td>
        <td>2.2 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>5</td>
        <td>MOHD OMER FATTAH</td>
        <td>160516733044</td>
        <td>2.2 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>6</td>
        <td>MD. Abdul Majid Zakir</td>
        <td>160516733045</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>7</td>
        <td>AimanShifa</td>
        <td>160516733046</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MohdBariqIshtiaq</td>
        <td>160516733047</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Mohd Abdul Naseer</td>
        <td>160516733048</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Husna Anjum</td>
        <td>160516733050</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>11</td>
        <td>SyedaMaheen Hashmi</td>
        <td>160516733051</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Juveria Tabassum</td>
        <td>160516733052</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Nadiya jabeen</td>
        <td>160516733053</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Syedahafsafatima</td>
        <td>160516733055</td>
        <td>2.4 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>15</td>
        <td>ShaistaNaaz Zainab</td>
        <td>160516733057</td>
        <td>2.6 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Shaista Tabassum</td>
        <td>160516733058</td>
        <td>2.6 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Syed Zia Ur Rahman</td>
        <td>160516733064</td>
        <td>2.6 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Sana Fatima</td>
        <td>160516733067</td>
        <td>2.6 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Ajmeri Begun</td>
        <td>160516733069</td>
        <td>2.6 LPA</td>
        <td>OFF CAMPUS</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Sameena</td>
        <td>160516733070</td>
        <td>2.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>21</td>
        <td>SyedaSumairaMohammadi</td>
        <td>160516733074</td>
        <td>2.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Mohd Izhar ali</td>
        <td>160516733077</td>
        <td>2.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>23</td>
        <td>Syed Muqtadir Uddin Hussaini</td>
        <td>160516733079</td>
        <td>2.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>24</td>
        <td>Arshiya sultana</td>
        <td>160516733080</td>
        <td>2.0 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Shoeb Nawaz Khan</td>
        <td>160516733083</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Mohd Fahad Ismail</td>
        <td>160516733086</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>27</td>
        <td>Anza Khan</td>
        <td>160516733088</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>28</td>
        <td>Mohammed Adnan Ansari</td>
        <td>160516733089</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>29</td>
        <td>Rafath Fatima</td>
        <td>160516733092</td>
        <td>2.5 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>30</td>
        <td>VIQUAR UDDIN KHAN</td>
        <td>160516733093</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>31</td>
        <td>ABU OBAIDA HARIS</td>
        <td>160516733097</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>32</td>
        <td>FaraazMohd Khan</td>
        <td>160516733060</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>33</td>
        <td>MohdSohail Ahmed</td>
        <td>160516733072</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>34</td>
        <td>Syeda Maryam Fatima</td>
        <td>160516733049</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>35</td>
        <td>FATIMA NEHA</td>
        <td>160516733090</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>36</td>
        <td>Mohammed Mutaseem Hussain</td>
        <td>160516733031</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>37</td>
        <td>Mohd Yousuf ali</td>
        <td>160516733041</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>38</td>
        <td>Syed Abdul Samad</td>
        <td>160516733022</td>
        <td>3 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>39</td>
        <td>Mariam Ahmed ullah</td>
        <td>160516733017</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>40</td>
        <td>SAIF QASIM SYED</td>
        <td>160516733066</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
    </tr>
    <tr>
        <td>41</td>
        <td>MOHAMMED YOUNUS</td>
        <td>160516733001</td>
        <td>2.4 LPA</td>
        <td>ON CAMPUS</td>
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