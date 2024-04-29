import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../IT/components/Sidebar';
import Sidepost from '../IT/components/Sidepost';
import Syllabus from '../IT/components/Syllabus';
import Slide from '../IT/components/Slide';
import TableP from './components/Table';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CSVTable from '../../../Common/FacultyTablify.jsx';
import csvData from '../../../../data/department-faculties/IT.csv';
import Papa from 'papaparse';
const It = () => {
    const [parsedData, setParsedData] = useState([]);
    useEffect(() => {
        const parseCSV = async () => {
            const response = await fetch(csvData);
            const csvText = await response.text();
            const { data } = Papa.parse(csvText, { header: true });
            console.log(data);
            setParsedData(data);
        };

        parseCSV();
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Information Technology</title>
                <meta name="description" content="ISLEC is Approved by AICTE and Affiliated to Osmania University" />

                <link rel="canonical" href="http://islec.edu.in" />
            </Helmet>

            <section className="breadcrumb_details bg_cover">
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <div className="breadcrumb_details_content">
                                <h4 className="title">Information Technology</h4>
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
                                                Information Technology
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="d-flex flex-wrap">
                                    <div className="breadcrumb_media d-flex align-items-center mt-30">
                                        <div className="media_image">
                                            <img className="author" src="https://www.islec.edu.in/docs/cse/ithod.jpeg" alt="author" />
                                        </div>

                                        <div className="media_content media-body">
                                            <h6 className="title">Dr. Abdul Ahad Afroz</h6>
                                            <p>Head of Department</p>
                                            <p className="edu">B.Tech, M.Tech., Ph.D.</p>
                                        </div>
                                    </div>
                                    <div className="breadcrumb_media d-flex align-items-center mt-30">
                                        <div className="media_image">
                                            <img className="bookmark" src="https://i.ibb.co/z7NLwF0/mail.png" alt="mail" />
                                        </div>
                                        <div className="media_content media-body">
                                            <h6 className="title mt-2">
                                                <a href="mailto:it.hod@islec.edu.in">it.hod@islec.edu.in</a>
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
                                        <Tab>Placement</Tab>
                                        <a href="https://islec.edu.in/docs/paqic/it.pdf">
                                            <Tab>*PAQIC</Tab>
                                        </a>
                                    </TabList>

                                    <TabPanel className="tab-content tab-content-info text-justify ">
                                        <div className="">
                                            <h4>Course Description</h4>
                                            <p>
                                                Information technology (IT) is the application of computers to store, study, retrieve, transmit, and manipulate data,or information,
                                                often in the context of a business or other enterprise. IT is considered a subset of information and communications technology
                                                (ICT).
                                            </p>
                                            <p>
                                                It also encompasses other information distribution technologies such as television and telephones. Several industries are associated
                                                with information technology, including computer hardware, software, electronics, semiconductors, internet, telecom equipment, and
                                                e-commerce.
                                            </p>
                                            <h4>ABOUT THE HOD</h4>
                                            <p>
                                                Dr.Abdul Ahad Afroz, is an Associate Professor and HOD in the Department of Information Technology. He has completed Ph.D. from
                                                Jagdish prasad Jhabarmal Tibrevala University JJTU.
                                            </p>
                                            <p>He has:</p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-check"></i>Bachelors of Technology (B. Tech) Information Technology from JNTUH Affiliated College in 2008
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i>Masters of Technology (M. Tech) from JNTUH Affiliated College in 2012
                                                </li>
                                            </ul>
                                            <p>He is certified in CCNA & CCNP (SWITCHING):</p>
                                            <ul>
                                                <li>
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-check"></i>Cisco Certified Network Associate in December 2009
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i>Cisco Certified Network Professional in December 2012
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <p>
                                                He has more than 11 years of academic experience in various reputed institutions in Hyderabad.He also worked more than 3 years as an
                                                IT specialist at Infidocs Technologies Pvt.LTD Pune.
                                            </p>
                                            <p>His areas of interests include:</p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-check"></i>Computer Networks
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i>Data Base
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i>Theory of Computation
                                                </li>
                                            </ul>
                                            <p>
                                                He has published more than 11 research papers in reputed journals and conferences. During his tenure, he has organized many
                                                International and National Conferences and Technical Workshops.
                                            </p>

                                            <h4>Vision</h4>
                                            <ul>
                                                <li>
                                                    To establish the department which helps the IT Engineers to excel the concept in research, problem solving, innovation, and
                                                    entrepreneurship to meet the global demands through industry and academia collaboration.
                                                </li>
                                            </ul>
                                            <h4>Mission</h4>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-check"></i> MD 1 : Enable the students to understand concept by adopting effective teaching learning process
                                                    for solving complex problems
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i> MD2: To impart knowledge through implementing and adapting to emerging technology.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i> MD 3: To inculcate the urge for lifelong learning along with professional and ethical practices.
                                                </li>
                                            </ul>
                                            <h4>Program Educational Objectives (PEOs)</h4>
                                            <p>After 3 to 4 years of graduation, graduates of the Information Technology program will:</p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-check"></i>PEO 1 : To develop strong computational capabilities to provide innovative programming solutions.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i>PEO 2 : To make Students employable through efficient training for programming experts worldwide.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i> Exhibit commitment to ethical practices societal contribution and lifelong learning.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <p>At the end of the program the students (Engineering Graduates) will be able to:</p>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i>PO 1 : Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals,
                                                and an engineering specialization to the solution of complex engineering problems.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 2 : Problem analysis: Identify, formulate, review research literature, and analyse complex
                                                engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering
                                                sciences.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 3 : Design/development of solutions: Design solutions for complex engineering problems and design
                                                system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and
                                                the cultural, societal, and environmental considerations.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 4 : Conduct investigations of complex problems: Use research-based knowledge and research methods
                                                including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 5 : Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern
                                                engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the
                                                limitations.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 6 : The engineer and society: Apply reasoning informed by the contextual knowledge to assess
                                                societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering
                                                practice.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 7 : Environment and sustainability: Understand the impact of the professional engineering
                                                solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 8 : Ethics: Apply ethical principles and commit to professional ethics and responsibilities and
                                                norms of the engineering practice.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 9 : Individual and team work: Function effectively as an individual, and as a member or leader in
                                                diverse teams, and in multidisciplinary settings.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 10 : Communication: Communicate effectively on complex engineering activities with the engineering
                                                community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make
                                                effective presentations, and give and receive clear instructions.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 11 : Project management and finance: Demonstrate knowledge and understanding of the engineering
                                                and management principle and apply these to one’s own work, as a member and leader in a team, to manage projects and in
                                                multidisciplinary environments.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PO 12 : Lifelong learning: Recognize the need for, and have the preparation and ability to engage in
                                                independent and life-long learning in the broadest context of technological change.
                                            </li>
                                            <h4>Program Specific Outcomes</h4>
                                            <li>
                                                <i className="fa fa-check"></i>PSO 1 : Hardware design: An ability to analyze, design, simulate and implement computer hardware /
                                                software and use basic analog/digital circuits, VLSI design for various computing and communication system applications.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PSO 2 : Software design: An ability to analyze a problem, design algorithm, identify and define the
                                                computing requirements appropriate to its solution and implement the same.
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <object data="http://islec.edus.in/DATA/CO/it.pdf" type="application/pdf" width={900} height={900}>
                                            <p>
                                                View Course Outcome here <a href="http://islec.edu.in/DATA/CO/it.pdf">View PDF!</a>
                                            </p>
                                        </object>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <Syllabus />
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <TableP />
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <CSVTable parsedData={parsedData} />
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <p>Infrastructure</p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <p>Department Events</p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-content tab-content-info text-justify ">
                                        <div className="">
                                            <h4>Student Resources</h4>
                                            <ul className="mt-30">
                                                <li>
                                                    <i className="fa fa-angle-double-right"></i>
                                                    <a href="/#"> Academic Email usage Policy </a>
                                                </li>
                                                <li>
                                                    <i className="fa fa-angle-double-right"></i>
                                                    <a href="https://internship.aicte-india.org/"> AICTE Internships </a>
                                                </li>
                                                <li>
                                                    <i className="fa fa-angle-double-right"></i>
                                                    <a href="https://nptel.ac.in/domains"> NPTEL Domain Certificate </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <h6 className="mt-50">Work in progress</h6>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <p>Student Clubs</p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <h4 className="mt-15 mb-15">Year of Passing , A.Y.- 2022-2023</h4>

                                            <Table className="striped bordered hover">
                                                <tr>
                                                    <th>Sl.No</th>
                                                    <th>Name Of The Student</th>
                                                    <th>Roll.No</th>
                                                    <th>Salary Per Annum</th>
                                                    <th>On/Off Campus</th>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>MOHAMMED MUKKARRAM</td>
                                                    <td>160519737001</td>
                                                    <td>4.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>UMME HANEY</td>
                                                    <td>160519737009</td>
                                                    <td>4.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>MIR KAMAL UDDIN</td>
                                                    <td>160519737013</td>
                                                    <td>4.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>SYED WALI MOHIUDDIN</td>
                                                    <td>160519737015</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>MD. MUSTAFA UDDIN</td>
                                                    <td>160519737019</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>MOHAMMED SAQIB AGHAI</td>
                                                    <td>160519737035</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>ARIF ALI</td>
                                                    <td>160519737039</td>
                                                    <td>6.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>MOHAMMED ATHAR UDDIN</td>
                                                    <td>160519737026</td>
                                                    <td>4.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>MURTUZA AHMED KHAN</td>
                                                    <td>160519737042</td>
                                                    <td>4.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>ZAID ALI KHAN</td>
                                                    <td>160519737047</td>
                                                    <td>4.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>MIR MAHMOOD ALI OMER</td>
                                                    <td>160519737058</td>
                                                    <td>6.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>ABDUL BARI SARFARAZ</td>
                                                    <td>160519737060</td>
                                                    <td>6.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>SYED ABDUL RUB</td>
                                                    <td>160519737016</td>
                                                    <td>6.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>MOHAMMED ZAKI UDDIN</td>
                                                    <td>160519737055</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>ABDUR RAHMAN ADIL</td>
                                                    <td>160519737007</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>SYED ABDUL WASEY</td>
                                                    <td>160519737008</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>ANAM SHANZAY</td>
                                                    <td>160519737010</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>AHMED ASAD ULLAH</td>
                                                    <td>160519737028</td>
                                                    <td>3.175 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>MOHAMMED AREEB SHAFEEQ</td>
                                                    <td>160519737005</td>
                                                    <td>3.175 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>SYED HABEEB AHMED</td>
                                                    <td>160519737027</td>
                                                    <td>3.175 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>MD SHOAIB ULLAH KHAN</td>
                                                    <td>160519737029</td>
                                                    <td>3.175 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>ZUBIA BUTOOL</td>
                                                    <td>160519737002</td>
                                                    <td>3.175 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td>MOHAMMED ABDUL UMAIR UDDIN</td>
                                                    <td>160519737022</td>
                                                    <td>7.8 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td>MOHAMMED FEROZ</td>
                                                    <td>160519737031</td>
                                                    <td>7.8 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>MOHD ALEEM</td>
                                                    <td>160519737004</td>
                                                    <td>3.175 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>MOHAMMAD SHABBIR MUKARRAM</td>
                                                    <td>160519737006</td>
                                                    <td>6.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>ASHRAF MEHDI KHAN</td>
                                                    <td>160519737018</td>
                                                    <td>6.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>28</td>
                                                    <td>MOHAMMED AMER</td>
                                                    <td>160519737020</td>
                                                    <td>6.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>MOHD ISHAQ</td>
                                                    <td>160519737044</td>
                                                    <td>6.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                            </Table>

                                            <h4 className="mt-35 mb-15">Year of Passing , A.Y.- 2021-2022</h4>

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
                                                    <td>MOHAMMED ABUBAKAR SIDDIQ</td>
                                                    <td>160518737023</td>
                                                    <td>1.175 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>MOHD IRFAN AHMED</td>
                                                    <td>160518737031</td>
                                                    <td>1.175 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>MOHAMMED MUMTAZ TAHER KHAN</td>
                                                    <td>160518737032</td>
                                                    <td>1.175 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>MOHAMMED RIYAZ KHAN</td>
                                                    <td>160518737050</td>
                                                    <td>1.175 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>ABDUL MUNAF</td>
                                                    <td>160518737001</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>MOHAMMED</td>
                                                    <td>160518737054</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>MOHAMMED SOHAIL</td>
                                                    <td>160518737301</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>KAMARAJUGADDA SHANKER SRINIVAS</td>
                                                    <td>160518737302</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>AIJAZ AFZAL</td>
                                                    <td>160518737002</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>MOHAMMED ABDULLAH</td>
                                                    <td>160518737005</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>MOHAMMED ABDUL MUQEET</td>
                                                    <td>160518737006</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>NUSRAT MOHAMMED KALEEM</td>
                                                    <td>160518737007</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>SYED ADNAN AHMED</td>
                                                    <td>160518737008</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>SYED SARFARAZ MUJTABA</td>
                                                    <td>160518737009</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>ABDUL HABEEB</td>
                                                    <td>160518737010</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>SYED RASHED ALI HASHMI</td>
                                                    <td>160518737011</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>NISHAT FATHIMA</td>
                                                    <td>160518737012</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>MD ASRAR</td>
                                                    <td>160518737020</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>FAIZ UNNISA</td>
                                                    <td>160518737022</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>SYED HABEEB UL HASAN</td>
                                                    <td>160518737025</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>MOHD ABDUL SAMAD</td>
                                                    <td>160518737033</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>MOHD MAHMOOD HUSSAIN</td>
                                                    <td>160518737035</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td>SARAH</td>
                                                    <td>160518737036</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td>KARIM LAKHANI</td>
                                                    <td>160518737037</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>MUZAFFAR MOINUDDIN</td>
                                                    <td>160518737039</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>SYED HABEEB UDDIN</td>
                                                    <td>160518737040</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>AHMED KHAN</td>
                                                    <td>160518737042</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>28</td>
                                                    <td>MOHAMMED SARTAJ UDDIN</td>
                                                    <td>160518737043</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>SYED DANISH ALI</td>
                                                    <td>160518737044</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>30</td>
                                                    <td>KHAJA NIZAMUDDIN</td>
                                                    <td>160518737051</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>31</td>
                                                    <td>BUSHRA MOHIUDDIN</td>
                                                    <td>160518737052</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>32</td>
                                                    <td>SUMIYA QURESHI</td>
                                                    <td>160518737057</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>33</td>
                                                    <td>TALHA</td>
                                                    <td>160518737058</td>
                                                    <td>2.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>34</td>
                                                    <td>SYEDA SADIA ATHER</td>
                                                    <td>160518737059</td>
                                                    <td>2.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                            </Table>

                                            <h4 className="mt-35 mb-15">Year of Passing , A.Y.- 2020-2021</h4>

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
                                                    <td>SALMAN KHAN</td>
                                                    <td>160517737040</td>
                                                    <td>4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>MOHAMMED SAIFULLAH SHARIEF</td>
                                                    <td>160517737052</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>MOHAMMAD EHZAAM</td>
                                                    <td>160517737036</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>MOHAMMED OSMAN SHAKEEL FAROOQI</td>
                                                    <td>160517737021</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>ABDUL MUBEEN</td>
                                                    <td>160517737030</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>MOHAMMED SAIF UDDIN</td>
                                                    <td>160517737053</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>SANIA FAREED</td>
                                                    <td>160517737031</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>HASEEB UR RAHMAN</td>
                                                    <td>160517737007</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>MOHAMMED SHANAWAZUDDIN</td>
                                                    <td>160517737023</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>MOHD MAZHARUDDIN</td>
                                                    <td>160517737024</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>MOHAMMED ABDUL SALMAN</td>
                                                    <td>160517737050</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>MOHD ASIM ARZAN</td>
                                                    <td>160517737041</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>MOHD ETHESHAM KHAN</td>
                                                    <td>160517737017</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>TAHURA NIKHATH</td>
                                                    <td>160517737027</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>SUMERA SULTANA</td>
                                                    <td>160517737010</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>UMAIMA ZAREEN</td>
                                                    <td>160517737013</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>MOHAMMADI FATIMA</td>
                                                    <td>160517737014</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>KOUNEN FATHIMA</td>
                                                    <td>160517737033</td>
                                                    <td>2.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>UMAIMA QADER MOHIUDDIN</td>
                                                    <td>160517737034</td>
                                                    <td>2.75 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>NEHA TABASSUM</td>
                                                    <td>160517737044</td>
                                                    <td>2.75 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>MAIMUNA BEGUM</td>
                                                    <td>160517737048</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>SADAF NAAZ FAROOQUI</td>
                                                    <td>160517737004</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td>MD IMRAN KHAN</td>
                                                    <td>160517737001</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td>MOHD SAFI UDDIN</td>
                                                    <td>160517737009</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>MOHAMMED SAFI UDDIN</td>
                                                    <td>160517737022</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>MOHD JAWWAD QAVI</td>
                                                    <td>160517737029</td>
                                                    <td>2.4 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>MOHAMMED ANAS UDDIN</td>
                                                    <td>160517737028</td>
                                                    <td>2.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>28</td>
                                                    <td>MOHD FAISAL JAMAL</td>
                                                    <td>160517737016</td>
                                                    <td>2.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>SYED RAYYANULLAH HUSSAINI</td>
                                                    <td>160517737046</td>
                                                    <td>2.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>30</td>
                                                    <td>MOHD ASGHAR</td>
                                                    <td>160517737037</td>
                                                    <td>2.5 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                            </Table>

                                            <h4 className="mt-35 mb-15">Year of Passing , A.Y.- 2019-2020</h4>
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
                                                    <td>MOHD HUSSAIN AHMED</td>
                                                    <td>160516737002</td>
                                                    <td>2.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>HUSNA MAZHAR</td>
                                                    <td>160516737003</td>
                                                    <td>2.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>SAMREEN SULTANA</td>
                                                    <td>160516737005</td>
                                                    <td>2.2 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>MUSAB RASHID MAHMOOD</td>
                                                    <td>160516737007</td>
                                                    <td>2.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>AFNAN AHMED</td>
                                                    <td>160516737011</td>
                                                    <td>2.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>SYED NADEEM AHMED</td>
                                                    <td>160516737015</td>
                                                    <td>2.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>SAFURA SANA</td>
                                                    <td>160516737018</td>
                                                    <td>2.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>SYED ASIF ALI</td>
                                                    <td>160516737020</td>
                                                    <td>2.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>SHAIK KHAJA PASHA</td>
                                                    <td>160516737029</td>
                                                    <td>2.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>SYEDA SADIYA SULTANA</td>
                                                    <td>160516737030</td>
                                                    <td>2.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>MD.AAMIR KHAN</td>
                                                    <td>160516737032</td>
                                                    <td>2.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>MIRZA ZEESHAN UDDIN</td>
                                                    <td>160516737034</td>
                                                    <td>2.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>SYED ADNAN AHMED</td>
                                                    <td>160516737037</td>
                                                    <td>2.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>MOHD DANISH SIDDIQUI</td>
                                                    <td>160516737052</td>
                                                    <td>2.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>MOHD YAHIYA AHMED</td>
                                                    <td>160516737053</td>
                                                    <td>2.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>SYED CHAND PASHA</td>
                                                    <td>160516737054</td>
                                                    <td>2.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>SYED FASIAL MAJEED</td>
                                                    <td>160516737055</td>
                                                    <td>2.8 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </TabPanel>

                                    <TabPanel></TabPanel>
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
                                        More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </aside>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default It;
