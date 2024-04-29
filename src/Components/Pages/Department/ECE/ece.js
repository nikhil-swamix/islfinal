import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../ECE/components/Sidebar';
import Sidepost from '../ECE/components/Sidepost';
import Syllabus from '../ECE/components/Syllabus';
import Slide from '../ECE/components/Slide';
import TableP from './components/Table';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CSVTable from '../../../Common/FacultyTablify.jsx';
import csvData from '../../../../data/department-faculties/ECE.csv';
import Papa from 'papaparse';
const Ece = () => {
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
                <title>Electronics & Communicate Engineering</title>
                <meta name="description" content="ISLEC is Approved by AICTE and Affiliated to Osmania University" />

                <link rel="canonical" href="http://islec.edu.in" />
            </Helmet>

            <section className="breadcrumb_details bg_cover">
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <div className="breadcrumb_details_content">
                                <h4 className="title">Electronics & Communication Engineering</h4>
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
                                                Electronics & Communication Engineering
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="d-flex flex-wrap">
                                    <div className="breadcrumb_media d-flex align-items-center mt-30">
                                        <div className="media_content media-body">
                                            <h6 className="title">Dr. Abdul Mateen Ahmed</h6>
                                            <p>Head of the Department</p>
                                            <p className="edu">M.Tech, Ph.D(IITH)</p>
                                        </div>
                                    </div>
                                    <div className="breadcrumb_media d-flex align-items-center mt-30">
                                        <div className="media_image">
                                            <img className="bookmark" src="https://i.ibb.co/z7NLwF0/mail.png" alt="mail" />
                                        </div>
                                        <div className="media_content media-body">
                                            <h6 className="title mt-2">
                                                <a href="mailto:ece.hod@islec.edu.in">ece.hod@islec.edu.in</a>
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
                                        <a href="https://islec.edu.in/docs/paqic/ece.pdf">
                                            <Tab>*PAQIC</Tab>
                                        </a>
                                    </TabList>

                                    <TabPanel className="tab-content tab-content-info text-justify ">
                                        <div className="">
                                            <h4>Course Description</h4>
                                            <p>
                                                Electronics engineering, or Electronic & Communication Engineering, is an Electrical Engineering discipline which utilizes nonlinear
                                                and active electrical components (such as semiconductor devices, especially transistors, diodes and integrated circuits) to design
                                                electronic circuits, devices, microprocessors, microcontrollers and other systems. The discipline typically also designs passive
                                                electrical components, usually based on printed circuit boards.
                                            </p>
                                            <h4>Vision</h4>
                                            <p>
                                                To establish the department of Electronics & Communication Engineering as a centre of excellence in research and training; to
                                                produce Electronics and Communication Engineers with enhanced capabilities through Industry and Academia collaboration to meet the
                                                global demand.
                                            </p>

                                            <h4>Mission</h4>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-check"></i> MD 1: To inculcate a spirit of scientific temper and analytical thinking, and to solve
                                                    technological problems in real time.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i> MD 2: To impart practical knowledge through state of the art labs.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i> MD 3: To motivate, inculcate a habit of lifelong learning adhering to professional and ethical
                                                    practices.
                                                </li>
                                            </ul>
                                            <h4>Program Educational Objectives (PEOs)</h4>
                                            <p>
                                                Within the four to five years, our graduates passing out of the department of Electronics & Communication Engineering are expected
                                                to achieve:
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-check"></i>
                                                    PEO 1 : Core competence: Graduates will develop strong concepts in domain to solve for challenging problems in electronics and
                                                    multidisciplinary disciplines such as IoT, Robotics and Mechatronics etc.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i>PEO 2 : Career building: Graduates will have strong subject knowledge by synchronizing beneficial
                                                    topics with state of the art labs, emerging technologies and effective teaching learning methods to fulfil professional and
                                                    social responsibilities around the globe.
                                                </li>
                                                <li>
                                                    <i className="fa fa-check"></i>PEO 3 : Technical proficiency: Graduates will be able to practice analytical, innovative skills
                                                    in his/her chosen area to develop entrepreneurial skills for the welfare of society
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
                                                <i className="fa fa-check"></i>PSO 1 : Design and Develop relevant solutions using domain knowledge with respect to Design,
                                                Analysis, and Implementation in the area of Communications and IOT based AI Systems
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>PSO 2 : : Identify and apply domain-specific tools for design, analysis, synthesis, and validation of
                                                Integrated Electronic Devices and Systems and also to develop a product for commercialization.
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <object data="http://islec.edus.in/DATA/CO/ece.pdf" type="application/pdf" width={900} height={900}>
                                            <p>
                                                View Course Outcome here <a href="http://islec.edu.in/DATA/CO/ece.pdf">View PDF!</a>
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
                                        <h4 className="mt-50">Work in progress</h4>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="syll text-center">
                                            <h4>Student Clubs</h4>
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
                                                    <td>Katam Pravidik Reddy </td>
                                                    <td>160519735006</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mohammed Nazeer</td>
                                                    <td>160519735013</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Khudeja Rafiya </td>
                                                    <td>160519735003</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Mir Azam Ali</td>
                                                    <td>160519735019</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Hafsa Fatima </td>
                                                    <td>160519735024</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Kazi Anwarullah Siddiqui</td>
                                                    <td>160519735027</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Md. Javeed Ahmed</td>
                                                    <td>160519735029</td>
                                                    <td>3.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Lubna Maheen</td>
                                                    <td>160519735313</td>
                                                    <td>3.10 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Mohammed Abdullah Ali</td>
                                                    <td>160519735306</td>
                                                    <td>3.10 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Mohammed Imtiyaz </td>
                                                    <td>160519735047</td>
                                                    <td>3.10 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>Mohd Waseem Ali Siddique</td>
                                                    <td>160519735309</td>
                                                    <td>3.10 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>Syed Ghouse Ahmed</td>
                                                    <td>160519735311</td>
                                                    <td>3.10 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>Summya Samreen</td>
                                                    <td>160519735305</td>
                                                    <td>3.10 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>Bajrai Salam</td>
                                                    <td>160519735009</td>
                                                    <td>4.15 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>Zaki Ahmed Siddiqui </td>
                                                    <td>160519735017</td>
                                                    <td>4.15 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>Shabnam Fathima </td>
                                                    <td>160519735014</td>
                                                    <td>4.15 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>Mohammed Tajdaar</td>
                                                    <td>160519735025</td>
                                                    <td>4.15 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>Shaik Jaffer Faiyaz</td>
                                                    <td>160519735031</td>
                                                    <td>4.15 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>Syed Maroof Ali</td>
                                                    <td>160519735036</td>
                                                    <td>3.6 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>Mohammed Shareeq Uddin</td>
                                                    <td>160519735037</td>
                                                    <td>3.6 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>Shaik Sahil Riyaz</td>
                                                    <td>160519735042</td>
                                                    <td>3.6 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>Syed Ikram Uddin</td>
                                                    <td>160519735303</td>
                                                    <td>3.6 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td>Syed Ameenul Hassan</td>
                                                    <td>160519735304</td>
                                                    <td>3.6 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td>Mir Ahmed Ali Khan</td>
                                                    <td>160519735316</td>
                                                    <td>3.6 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>Syed Ashraf Ahmed</td>
                                                    <td>160519735312</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>Shaik Arbaz</td>
                                                    <td>160519735310</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>Mohammed Ghouse Uddin</td>
                                                    <td>160519735308</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
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
                                                    <td>Mohd Rasheed</td>
                                                    <td>160518735306</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mohd Viquar Uddin</td>
                                                    <td>160518735075</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Syed Shahab</td>
                                                    <td>160518735001</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Shayesta Naaz</td>
                                                    <td>160518735002</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Sumaiya Sulthana</td>
                                                    <td>160518735004</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Mohammed Muzzamil Khan</td>
                                                    <td>160518735005</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td> S. Dinesh Choudhary</td>
                                                    <td>160518735011</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Mohammed Azizuddin</td>
                                                    <td>160518735012</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Mohammed Khaleel</td>
                                                    <td>160518735015</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>     10</td>
                                                    <td> Ali Hussain</td>
                                                    <td>160518735017</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>Mohammed Abdul Sattar</td>
                                                    <td>160518735020</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>Mohd Shamsuddin</td>
                                                    <td>160518735021</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>Mohammed Abdul Azam</td>
                                                    <td>160518735022</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>Mohammed Anas Ahmed</td>
                                                    <td>160518735023</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td> Sana Sultana</td>
                                                    <td>160518735024</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>Syed Fahad Uddin</td>
                                                    <td>160518735025</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>Shaik Mohammed Junaid</td>
                                                    <td>160518735033</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>Mariya Tasneem</td>
                                                    <td>160518735034</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>     19</td>
                                                    <td>Nudiya Anjum</td>
                                                    <td>160518735037</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>Mohammed Eshaan Ali</td>
                                                    <td>160518735039</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>MohdAfroz</td>
                                                    <td>160518735043</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>Jaber Bin Omer</td>
                                                    <td>160518735045</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td> Mohammed Muzzammil Uddin Arham</td>
                                                    <td>160518735046</td>
                                                    <td>4.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td> Syed Abdul Majeed Ahmed</td>
                                                    <td>160518735047</td>
                                                    <td>4.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>Mohammed Musharaf Uddin </td>
                                                    <td>160518735049</td>
                                                    <td>4.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>Mohd Ismail Ahmed</td>
                                                    <td>160518735054</td>
                                                    <td>3.36 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>Safiullah Sayeed</td>
                                                    <td>160518735059</td>
                                                    <td> 3.36 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>28</td>
                                                    <td>Mirza Arbaz Ali Baig</td>
                                                    <td>160518735061</td>
                                                    <td>3.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>Shaik Ahmed Hussain</td>
                                                    <td>160518735063</td>
                                                    <td> 3.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>30</td>
                                                    <td>Mohammad Rumman Haseeb</td>
                                                    <td>160518735064</td>
                                                    <td>3.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>31</td>
                                                    <td> Mohammed Shoaib</td>
                                                    <td>160518735074</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>32</td>
                                                    <td>Mohd Faraz</td>
                                                    <td>160518735301</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>33</td>
                                                    <td>Syed Hanoof Ishaqi</td>
                                                    <td>160518735303</td>
                                                    <td>3.75 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>34</td>
                                                    <td>Hussain Quraishi</td>
                                                    <td>160518735304</td>
                                                    <td>3.75 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>35</td>
                                                    <td>Mohd Anwar Ullah</td>
                                                    <td>160518735305</td>
                                                    <td>3.75 LPA</td>
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
                                                    <td>Mohd Rasheed</td>
                                                    <td>160518735306</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mohd Viquar Uddin</td>
                                                    <td>160518735075</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Syed Shahab</td>
                                                    <td>160518735001</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Shayesta Naaz</td>
                                                    <td>160518735002</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Sumaiya Sulthana</td>
                                                    <td>160518735004</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Mohammed Muzzamil Khan</td>
                                                    <td>160518735005</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td> S. Dinesh Choudhary</td>
                                                    <td>160518735011</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Mohammed Azizuddin</td>
                                                    <td>160518735012</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Mohammed Khaleel</td>
                                                    <td>160518735015</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>     10</td>
                                                    <td> Ali Hussain</td>
                                                    <td>160518735017</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>Mohammed Abdul Sattar</td>
                                                    <td>160518735020</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>Mohd Shamsuddin</td>
                                                    <td>160518735021</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>Mohammed Abdul Azam</td>
                                                    <td>160518735022</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>Mohammed Anas Ahmed</td>
                                                    <td>160518735023</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td> Sana Sultana</td>
                                                    <td>160518735024</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>Syed Fahad Uddin</td>
                                                    <td>160518735025</td>
                                                    <td>4.6 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>Shaik Mohammed Junaid</td>
                                                    <td>160518735033</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>Mariya Tasneem</td>
                                                    <td>160518735034</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>     19</td>
                                                    <td>Nudiya Anjum</td>
                                                    <td>160518735037</td>
                                                    <td>6.5 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>Mohammed Eshaan Ali</td>
                                                    <td>160518735039</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>MohdAfroz</td>
                                                    <td>160518735043</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>Jaber Bin Omer</td>
                                                    <td>160518735045</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td> Mohammed Muzzammil Uddin Arham</td>
                                                    <td>160518735046</td>
                                                    <td>4.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td> Syed Abdul Majeed Ahmed</td>
                                                    <td>160518735047</td>
                                                    <td>4.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>Mohammed Musharaf Uddin </td>
                                                    <td>160518735049</td>
                                                    <td>4.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>Mohd Ismail Ahmed</td>
                                                    <td>160518735054</td>
                                                    <td>3.36 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>Safiullah Sayeed</td>
                                                    <td>160518735059</td>
                                                    <td> 3.36 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>28</td>
                                                    <td>Mirza Arbaz Ali Baig</td>
                                                    <td>160518735061</td>
                                                    <td>3.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>Shaik Ahmed Hussain</td>
                                                    <td>160518735063</td>
                                                    <td> 3.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>30</td>
                                                    <td>Mohammad Rumman Haseeb</td>
                                                    <td>160518735064</td>
                                                    <td>3.4 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>31</td>
                                                    <td> Mohammed Shoaib</td>
                                                    <td>160518735074</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>32</td>
                                                    <td>Mohd Faraz</td>
                                                    <td>160518735301</td>
                                                    <td>3.0 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>33</td>
                                                    <td>Syed Hanoof Ishaqi</td>
                                                    <td>160518735303</td>
                                                    <td>3.75 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>34</td>
                                                    <td>Hussain Quraishi</td>
                                                    <td>160518735304</td>
                                                    <td>3.75 LPA</td>
                                                    <td>ON CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>35</td>
                                                    <td>Mohd Anwar Ullah</td>
                                                    <td>160518735305</td>
                                                    <td>3.75 LPA</td>
                                                    <td>ON CAMPUS</td>
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
                                                    <td>Ruheena Begum</td>
                                                    <td>160516735012</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mohd Khaja Saif Ullah K</td>
                                                    <td>160516735017</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Rizwan Ahmed</td>
                                                    <td>160516735018</td>
                                                    <td>4.13 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Md Faizan Khan</td>
                                                    <td>160516735026</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Mohammed Mubassir</td>
                                                    <td>160516735046</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Mohd Asad Uddin</td>
                                                    <td>160516735053</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Mohammed Osman</td>
                                                    <td>160516735057</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Mohd Imran</td>
                                                    <td>160516735065</td>
                                                    <td>3.0 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Mohd Altaf</td>
                                                    <td>160516735068</td>
                                                    <td>2.8 LPA</td>
                                                    <td>OFF CAMPUS</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Azeem Uddin</td>
                                                    <td>160516735044</td>
                                                    <td>2.8 LPA</td>
                                                    <td>OFF CAMPUS</td>
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

export default Ece;
