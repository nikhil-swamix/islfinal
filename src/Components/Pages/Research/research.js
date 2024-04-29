import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './RnDComponent.css';

const Research = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Research & Development</title>
                <meta name="description" content="Exam Timetable & Notifications" />

                <link rel="canonical" href="http://islec.edu.in/exambranch" />
            </Helmet>

            <section className="">
                <div className="video-background py-5">
                    <video autoPlay loop muted>
                        <source src="/RnD-Video.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <Container>
                        <Row className="align-items-center ">
                            <Col lg={3} md={4} sm={12}>
                                <div className="breadcrumb_media d-flex align-items-center">
                                    <div className="">
                                        <img className="bookmark rounded shadow" src="/RnD-HoD.jpg" alt="Professor" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={9} md={8} sm={12}>
                                <div className="breadcrumb_details_content bg-opacity-50 bg-black p-3 rounded shadow ">
                                    <h4 className="title">Research & Development</h4>
                                    <div className="breadcrumb_content">
                                        <ul className="breadcrumb justify-content">
                                            <li>
                                                <Link to="/">
                                                    <i className="fa fa-home" aria-hidden="true"></i> Home
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="active" href="#active">
                                                    Research & Development
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="media_content media-body " style={{ fontSize: '18px' }}>
                                            <h6 className="title">Dr. Chandrashekar</h6>
                                            <span className="text-white"> M.Tech. , (IISc), Ph.D. (Embedded Systems & SoC)</span>
                                            <div className="text-white fw-bold" style={{ fontSize: '20px' }}>
                                                Dean R&D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex  ">
                                        <div className="breadcrumb_media d-flex align-items-center mt-3">
                                            <i className="fa fa-envelope fa-2x" style={{ color: '#fcc741' }} aria-hidden="true"></i>
                                            <div className="media_content media-body">
                                                <h6 className="title mt-2">
                                                    <a href="mailto:research@islec.edu.in">research@islec.edu.in</a>
                                                </h6>
                                            </div>

                                            <i className="fa fa-phone fa-2x ms-5" style={{ color: '#fcc741' }} aria-hidden="true"></i>
                                            <div className="media_content media-body">
                                                <h6 className="title mt-2">
                                                    <a href="tel:+919247476003">+919247476003</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="mt-60 mb-60 placement">
                <Container>
                    <Row>
                        <Col md={4} className="sidebar academic">
                            <Sidebar />
                        </Col>

                        <Col md={8}>
                            <div className="title">
                                <h4>Research & Development</h4>
                            </div>

                            <section className="dept-tabs mt-30">
                                <Tabs className="dept-tab">
                                    <TabList>
                                        <Tab>About</Tab>
                                        <Tab>Team</Tab>
                                        <Tab>Functions</Tab>
                                        <Tab>Objective</Tab>
                                        <Tab>MOU</Tab>
                                    </TabList>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <div className="tab-content tab-content-info text-justify justify">
                                            <p>
                                                <b>ISL Engineering College (ISLEC)</b> has established a Research and Development (R&D) cell to promote meaningful scientific
                                                industrial research activities. The vision and mission of the institution prioritize research in frontier technologies and various
                                                engineering disciplines.
                                            </p>
                                            <p>
                                                Recognizing the dynamic nature of knowledge, especially in technical education, ISLEC acknowledges that a 'teaching-only' model is
                                                inadequate for ensuring quality education. To address this, faculty members are encouraged to engage in active research, thereby
                                                staying abreast of current developments in their respective fields. The R&D cell serves as a platform to foster research and
                                                innovative skills among both faculty and students.
                                            </p>
                                            <p>
                                                To support research endeavors, ISLEC provides SEED funding for basic common research infrastructure, facilitating collaborative
                                                work. The R&D cell, comprising professors from various engineering programs, is responsible for overseeing research activities and
                                                ensuring efficient coordination within the institute
                                            </p>
                                            <p>
                                                The organizational structure includes an Advisor, Principal, Dean, and Coordinators to facilitate the smooth functioning of the cell
                                                and promote overall growth.
                                            </p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>NAME</th>
                                                    <th>DESIGNATION</th>
                                                    <th>DEPARTMENT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dr.M.Chandrashekar</td>
                                                    <td>Director R&amp;D </td>
                                                    <td>ECE</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.M.Safi Uddin</td>
                                                    <td>Advisor EDC &amp; IPR</td>
                                                    <td>CIVIL</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Abdul Mateen</td>
                                                    <td>Asst Director R&amp;D</td>
                                                    <td>ECE</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Jameel Mateen</td>
                                                    <td>Asst Director R&amp;D</td>
                                                    <td>CSE</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Surya Mukhi</td>
                                                    <td>Coordinator</td>
                                                    <td>IT</td>
                                                </tr>
                                                <tr>
                                                    <td>Mohd. Furkhan</td>
                                                    <td>Coordinator</td>
                                                    <td>CIVIL</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Srinivasulu</td>
                                                    <td>Coordinator</td>
                                                    <td>MECH</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Padmavati</td>
                                                    <td>Coordinator</td>
                                                    <td>MBA</td>
                                                </tr>
                                                <tr>
                                                    <td>Ms Ayesha sultana</td>
                                                    <td>Coordinator</td>
                                                    <td>ECE</td>
                                                </tr>
                                                <tr>
                                                    <td>Ms Zubeda Begum</td>
                                                    <td>Coordinator</td>
                                                    <td>ECE</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </TabPanel>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <p>The R&D cell at ISL Engineering College facilitates various functions</p>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i>Assisting faculty, research scholars, and students in drafting research proposals for grants from
                                                funding agencies such as DST, AICTE, MHRD, etc.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Allocating funds for in-house R&D projects conducted by faculty, research scholars, and students.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Ensuring smooth functioning and effective management of R&D activities within the institution.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Providing a focal point within the institution to coordinate R&D activities across departments,
                                                faculty members, and research students
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Identifying potential projects and funding sources and communicating them to government and private
                                                funding agencies.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Identifying potential projects and funding sources and communicating them to government and private
                                                funding agencies.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Establishing collaborations with other universities, research centers, and industries, and informing
                                                government and private funding agencies about research and development projects.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Liaising with public and private sectors to identify R&D projects, including consultancy services,
                                                which could be undertaken at the institution on a payment basis.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Implementing, following up, and monitoring the progress of ongoing projects.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Assisting in matters related to collaborative research with other agencies.
                                            </li>
                                        </ul>
                                    </TabPanel>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <p>The objectives of the R&D cell at ISL Engineering College include</p>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i>Fostering scientific temper among faculty and students.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Generating innovative ideas to address academic and societal problems.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Encouraging, coordinating, and implementing research and development programs, including workshops,
                                                seminars, and trainings.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Creating awareness about evolving technologies and industrial standards for products
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Providing opportunities for faculty and students to engage in consultancy projects focused on the
                                                latest evolving technologies and industry standards.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Identifying and informing researchers about research opportunities announced by academic, research,
                                                industry, or government organizations.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Encouraging and facilitating the publication of research work/projects in reputed academic journals
                                                and conferences
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Developing and implementing a research quality assurance mechanism to ensure that all research
                                                activities conform to standard quality specifications.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Establishing rules and regulations to ensure compliance with the research quality assurance framework
                                                and research code.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Encouraging core competence and consultancy work among faculty and students.
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>Creating awareness about filing patents and intellectual property rights (IPR).
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <ul>
                                            <li className="">
                                                <a href="https://apollo-micro.com/board-of-directors/#:~:text=Chandrasekar" target="_blank">
                                                    Apollo Microsystems limited
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://magni5.in/about-magni5.html#:~:text=Chandrasekar" target="_blank">
                                                    Magni5 Technology Solutions Pvt. Ltd
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.amptronics.com/" target="_blank">
                                                    Amptronics Systems Pvt. Ltd.
                                                </a>
                                            </li>
                                        </ul>
                                    </TabPanel>
                                </Tabs>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Research;
