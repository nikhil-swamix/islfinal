import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from './components/Sidebar'
import Sidepost from './components/Sidepost'
import Syllabus from './components/Syllabus'
import Slide from './components/Slide'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const hns = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Humanities and Sciences</title>
        <meta
          name="Humanities and Sciences"
          content="ISLEC is Approved by AICTE and Affiliated to Osmania University"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Humanities and Sciences</h4>
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
                        Humanities and Sciences
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                  <div className="media_image">
                      <img
                        className="author"
                        src="https://i.ibb.co/dL0Z218/Whats-App-Image-2024-04-26-at-4-35-49-AM.jpg"
                        alt="author"
                      />
                    </div>

                    <div className="media_content media-body">
                      <p>Head of Department</p>
                      <h6 className="title">Dr. Md Ibraheem Altaf</h6>
                      <p className="edu">M.Sc., PhD.</p>
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
                        <a href="mailto:hns.hod@islec.edu.in">
                          hns.hod@islec.edu.in
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
                    <Tab>*Student Clubs</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>HoD Profile</h4>
                      <p><b>Dr. Mohammed Ibraheem Altaf</b> graduated from osmania university in the year 2001 and proceeded to obtain M.Sc from Osmania University in the year 2003.
In his quest for betterment he obtained M.Phil in 2005, B.Ed in the year 2006 and finally he was awarded Doctrate in Philosophy in the year 2019.
</p>
                      <p>With 20 years of teaching experience and vast industry experience. He is the author of 2 books and 10 papers which were published in various international journals, attended various conferences, workshops and faculty development programs and is the holder 2 patents.</p>
                      <p>Now as the Head of the Department of Humanities and Sciences in ISLEC he strives to give quality education and ample opportunity for growth to the leaders of tomorrow. </p>
                      {/* <h4>Course Description</h4>
                      <p>
                        Electrical engineering is a field of engineering that
                        generally deals with the study and application of
                        electricity, electronics, and electromagnetism. This
                        field first became an identifiable occupation in the
                        later half of the 19th century after commercialization
                        of the electric telegraph, the telephone, and electric
                        power distribution and use. Subsequently, broadcasting
                        and recording media made electronics part of daily life.
                        The invention of the transistor, and later the
                        integrated circuit, brought down the cost of electronics
                        to the point they can be used in almost any household
                        object.
                      </p> */}
                      <h4>Vision</h4>
                      <p>To establish the department as a launching pad for young engineers to
become successful professionals in their respective field; by
providing conducive atmosphere that encrouges critical thinking,
research, innovation, ethics and lifelong learning.

                      </p>
                      
                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> MD 1 : To implement the curriculum through effective teaching learning
process that promotes conceptual learning.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> MD 2 : To enculcate professional skills by adopting new emerging
Technologies.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> MD 3 : To provide co-curricular and extracurricular activities through
student clubs, mentoring and motivation for their holistic
development.
                        </li>
                      </ul>
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <p>
                        Electrical and Electronics Engineering is a broad
                        discipline that incorporates skills and expertise in the
                        areas which are essential to most sectors of industry.
                        Bachelors program in Electrical and Electronics
                        Engineering in the college is aimed at preparing
                        graduates who will
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          Demonstrate technical competence in identifying,
                          formulating, analyzing, and creating engineering
                          solutions including multi disciplinary technical areas
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Continuously enhance
                          their skills through higher education or research to
                          emerge as competent technologist, educators or
                          professionals.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Advance in their
                          careers as successful professionals demonstrating
                          ethical and societal responsibilities.
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
                        <i className="fa fa-check"></i> Engineering knowledge:
                        Apply the knowledge of mathematics, science, engineering
                        fundamentals, and an engineering specialization to the
                        solution of complex engineering problems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Problem analysis:
                        Identify, formulate, review research literature, and
                        analyse complex engineering problems reaching
                        substantiated conclusions using first principles of
                        mathematics, natural sciences, and engineering sciences.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Design/development of
                        solutions: Design solutions for complex engineering
                        problems and design system components or processes that
                        meet the specified needs with appropriate consideration
                        for the public health and safety, and the cultural,
                        societal, and environmental considerations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Conduct investigations
                        of complex problems: Use research-based knowledge and
                        research methods including design of experiments,
                        analysis and interpretation of data, and synthesis of
                        the information to provide valid conclusions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Modern tool usage:
                        Create, select, and apply appropriate techniques,
                        resources, and modern engineering and IT tools including
                        prediction and modelling to complex engineering
                        activities with an understanding of the limitations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> The engineer and
                        society: Apply reasoning informed by the contextual
                        knowledge to assess societal, health, safety, legal and
                        cultural issues and the consequent responsibilities
                        relevant to the professional engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Environment and
                        sustainability: Understand the impact of the
                        professional engineering solutions in societal and
                        environmental contexts, and demonstrate the knowledge
                        of, and need for sustainable development.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Ethics: Apply ethical
                        principles and commit to professional ethics and
                        responsibilities and norms of the engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Individual and team
                        work: Function effectively as an individual, and as a
                        member or leader in diverse teams, and in
                        multidisciplinary settings.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Communication:
                        Communicate effectively on complex engineering
                        activities with the engineering community and with
                        society at large, such as, being able to comprehend and
                        write effective reports and design documentation, make
                        effective presentations, and give and receive clear
                        instructions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Project management and
                        finance: Demonstrate knowledge and understanding of the
                        engineering and management principle and apply these to
                        one’s own work, as a member and leader in a team, to
                        manage projects and in multidisciplinary environments.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Lifelong learning:
                        Recognize the need for, and have the preparation and
                        ability to engage in independent and life-long learning
                        in the broadest context of technological change.
                      </li>
                      <h4>Program Specific Outcomes</h4>
                      <li>
                        <i className="fa fa-check"></i>Graduate will be able to
                        demonstrate an ability to analyze, design and provide an
                        engineering solution in the areas related to Electric
                        Drives/ Control and Power systems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Graduate will
                        demonstrate an ability to design, simulate and develop
                        electrical and electronic Products using Electronic
                        Design Automation (EDA) tools
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                    <object data="http://islec.edus.in/DATA/CO/hns.pdf" type="application/pdf" width={900} height={900}>
                    <p>View Course Outcome here  <a href="http://islec.edu.in/DATA/CO/hns.pdf">View PDF!</a></p>
                  </object> 
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
                      <Syllabus />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <p>Publications</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                    <Table className='striped bordered hover'>

    <tr>
        <th>S.No</th>
        <th>Name </th>
        <th>Designation</th>
        <th>Date of Joinijg</th>
        <th>Qualification</th>
        <th>Nature of Association</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr.Md.Ibraheem Altaf</td>
        <td>ASSOCIATE PROFESSOR</td>
        <td>1/5/18</td>
        <td>M.Sc.andPhD</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mr. Rama Lingeshwar Rao</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>18/03/2015</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mr.Aziz Ehtesham</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>13/12/2021</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Dr.MinhajAhmed</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>20/02/2017</td>
        <td>M.Sc.andPhD</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Dr.Zareena Sultana</td>
        <td>ASSOCIATE PROFESSOR</td>
        <td>8/8/16</td>
        <td>M.AandPh.D</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Dr.Sohel Ahmed</td>
        <td>ASSOCIATE PROFESSOR</td>
        <td>24/07/2015</td>
        <td>MBA&amp;Ph.D</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>7</td>
        <td>SAMEER MAJEED</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>5/10/23</td>
        <td>MA</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Mr Smk Amjad Ali Khan</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>9/5/16</td>
        <td>MA</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MRS NUZHATH. SULTANA</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>13/10/2023</td>
        <td>MA</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Dr.Mabusab</td>
        <td>ASSOCIATE PROFESSOR</td>
        <td>22/07/2021</td>
        <td>M.Sc.andPhD</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Mrs.Bushra Riyaz</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>2/1/17</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>12</td>
        <td>MS.BLESSY BHAGYASREE</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>24/08/2016</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Mrs.ArshiyaAnjum</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>10/10/17</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Mr.Vazeer Khan</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>20/07/2017</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>15</td>
        <td>MS AFIFA NAAZ</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>7/11/22</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Mr.RiyazQureshi</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>16/11/2020</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Mr. Md. Kareemuddin</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>15/5/2020</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Dr. Nawazoddin USman Patel </td>
        <td>ASSOCIATE PROFESSOR</td>
        <td>22/1/2024</td>
        <td>Ph.D.</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Mr.AVINASH PULIMAMIDI</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>21/12/2020</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Mrs.Imreena Ali</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>12/10/17</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>21</td>
        <td>MOHD AMER</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>2/1/24</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>22</td>
        <td>SYED MOHAMMED FURQAN ISHAQUI</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>4/1/24</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>23</td>
        <td>Mrs Miriyala Gayatri</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>25/05/2019</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>24</td>
        <td>MRS. ASRA SULTHANA</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>1/7/09</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>25</td>
        <td>MR.MAZHAR UL HAQ</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>14/09/2020</td>
        <td>M.Sc</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Mr.Rajesh Sagar</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>10/6/19</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>27</td>
        <td>SK KHADAR BASHA</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>31/03/2022</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>28</td>
        <td>MRS. K. NANCHARI</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>25/08/2015</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>29</td>
        <td>MOHD AZHERUDDIN</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>14/09/2020</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>30</td>
        <td>SALAHUDDIN SHAKEEB S M</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>16/09/2020</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>31</td>
        <td>M.A.RABBANI</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>6/13/12</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>32</td>
        <td>MD BAHAUDDIN</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>9/23/20</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>33</td>
        <td>Mr.Mohammad Jameel</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>23/09/2020</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>34</td>
        <td>MR. KHAJA AWAIS AHMED</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>18/11/2019</td>
        <td>M.E/M.Tech</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>35</td>
        <td>MR.MOHD ABDUL MUHEEB</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>15/03/2021</td>
        <td>LLM</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>36</td>
        <td>MRS AMTULTAHMEENA</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>22/10/2021</td>
        <td>LLB</td>
        <td>Reg</td>
    </tr>
    <tr>
        <td>37</td>
        <td>Mr.ALEEMJAFRIMA</td>
        <td>ASSISTANT PROFESSOR</td>
        <td>8/7/20</td>
        <td>LLB</td>
        <td>Reg</td>
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

export default hns
