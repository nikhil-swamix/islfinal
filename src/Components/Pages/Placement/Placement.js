import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Table from './Table';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from './components/Sidebar';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Placement = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Training & Placement</title>
                <meta name="description" content="Training & Placement" />

                <link rel="canonical" href="http://islec.edu.in/placement" />
            </Helmet>

            <section className="breadcrumb_details bg_cover">
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <div className="breadcrumb_details_content">
                                <h4 className="title"> Training & Placement</h4>
                                <div className="breadcrumb_content">
                                    <ul className="breadcrumb justify-content">
                                        <li>
                                            <Link href="#home" as={Link} to="/">
                                                <i className="fa fa-home" aria-hidden="true"></i> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="active" href="#active">
                                                Training & Placement
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
                                        <div className="media_content media-body">
                                            <h6 className="title">Buelah Sharon</h6>
                                            <p>Training & Placement Officer</p>
                                        </div>
                                    </div>
                                    <div className="breadcrumb_media d-flex align-items-center mt-3">
                                        <div className="media_image">
                                            <img className="bookmark" src="https://i.ibb.co/z7NLwF0/mail.png" alt="mail" />
                                        </div>
                                        <div className="media_content media-body">
                                            <h6 className="title mt-2">
                                                <a href="mailto:tpo@islec.edu.in">tpo@islec.edu.in</a>
                                            </h6>
                                        </div>
                                    </div>

                                    <div className="breadcrumb_media d-flex align-items-center">
                                        <div className="media_image">
                                            <img className="bookmark" src="https://i.ibb.co/jVpCRqM/mobile.png" alt="mobile" />
                                        </div>
                                        <div className="media_content media-body">
                                            <h6 className="title mt-2">
                                                <a href="/#">+919182221317 / +919676544151</a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-60 mb-60 placement">
                <Container>
                    <Row>
                        <Col md={4} className="sidebar academic">
                            <Sidebar />
                        </Col>

                        <Col md={8}>
                            <div className="title">
                                <h4>Training & Placement</h4>
                            </div>

                            <section className="dept-tabs mt-30">
                                <Tabs className="dept-tab">
                                    <TabList>
                                        <Tab>About</Tab>
                                        <Tab>Training</Tab>
                                        <Tab>Functions</Tab>
                                        <Tab>CAMPUS PLACEMENT </Tab>
                                    </TabList>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <div className="tab-content tab-content-info text-justify justify">
                                            <p>
                                                <b>A Training and Placement Cell</b> is a crucial department within educational institutions, particularly colleges and universities
                                                that plays a pivotal role in bridging the gap between academia and the professional world. The primary objective of a Training and
                                                Placement Cell is to facilitate and support students in their quest for successful careers and to assist organizations in recruiting
                                                the right talent.
                                            </p>
                                            <p>
                                                A well-functioning Training and Placement Cell is a win-win for students. Students receive the support they need to embark on a
                                                successful career path, while organizations gain access to a pool of talented and well-prepared individuals. It fosters a strong
                                                link between academia and industry, contributing to the overall growth and development of students and the organizations they serve.
                                            </p>
                                        </div>

                                        <h4>Vision</h4>
                                        <p>
                                            To enhance the skills of students through rigorous training in all spheres aimed at making them employable and placed through campus
                                            recruitment.
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

                                        <h6 className="mt-35 mb-15">Photo Gallery</h6>

                                        <Row>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps1.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2020-2024</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps2.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2020-2024</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps3.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2020-2024</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps4.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2020-2024</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps5.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2020-2024</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps6.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2020-2024</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps7.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2019-2023</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="card mb-10">
                                                    <img className="card-img-top" src="https://islec.edu.in/allimages/placement/ps8.jpg" alt="CardImage " />
                                                    <div className="card-body">
                                                        <p className="card-text">Placed Sudents 2019-2023</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPanel>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <div>
                                            <img src="/training_placement/image001.jpg" alt="Training" width="690" height="206" />
                                            <p>
                                                Training is pivotal for bridging the gap between campus and corporate realms, catering to the diverse needs of organizations across
                                                software, core industries, management, and more. Regular visits from corporate giants, laden with enticing recruitment offers,
                                                underscore the significance of this preparatory phase. Thanks to our tailored training interventions, our students consistently meet
                                                and exceed the expectations of visiting organizations.
                                            </p>
                                            <p>
                                                Building on our extensive recruitment expertise, our training program kicks off as early as the second year of student enrollment.
                                                We've forged strategic alliances with industry trailblazers to impart training in technical prowess, communication finesse, and
                                                verbal acuity. Our modular approach ensures a systematic enhancement of students' interview-readiness, equipping them to confidently
                                                navigate the demands of the professional landscape.
                                            </p>
                                            <p>
                                                Through this proactive stance, we empower our students to seamlessly transition into the corporate arena, armed with the requisite
                                                skills demanded by today's competitive market. Our unwavering commitment to excellence ensures that each student not only meets but
                                                surpasses the expectations of prospective employers.
                                            </p>
                                            <img src="/training_placement/image002.jpg" alt="Training Infographics" width="690" height="901" />
                                            <p>
                                                Fourth year Students of ISLEC took CRT Training from Anantha Santhosh Kumar a expert of Global Apptitude Trainee at ISL Engineerig
                                                College.
                                            </p>
                                            <img src="/training_placement/image003.jpg" alt="CRT Training" width="625" height="468" />
                                            <img src="/training_placement/image004.jpg" alt="CRT Training" width="625" height="468" />
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <h5>Functions of Training And Placements Cell</h5>
                                        <p>
                                            The Training and Placements Cell (T&P Cell) at educational institutions, such as colleges and universities, plays a crucial role in
                                            bridging the gap between academia and industry. It is responsible for organizing various events and activities to facilitate the
                                            placement and skill development of students.{' '}
                                        </p>
                                        <h6>Here, we will discuss the essential functions of T&P Cell events:</h6>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i> Campus Recruitment Drives
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Internship and Training Programs
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Skill Development Workshops
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Career Guidance and Counseling
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Resume Building and Mock Interviews
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Networking Opportunities
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Industry Interaction Programs
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Placement Preparation
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> Company Presentations
                                            </li>
                                        </ul>
                                    </TabPanel>

                                    <TabPanel className="tab-content tab-content-info text-justify">
                                        <Container>
                                            <Row>
                                                <Col md={6}>
                                                    <ul>
                                                        <h6>CAMPUS PLACEMENT (ACADEMIC YEAR 2023-2024)</h6>
                                                        <li>
                                                            <i className="fa fa-check"></i> NCL INDUSTRIES LIMITED
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Hwaseung material india pvt Ltd
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> TVS Sundram fasteners limited
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Kay jay forging pvt limited
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> NSK Bearing india private limited
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Technook
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> STREEBO
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Academor
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Corizo
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Revolut
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col md={6}>
                                                    {' '}
                                                    <ul>
                                                        <h6>CAMPUS PLACEMENT (ACADEMIC YEAR 2022-2023)</h6>
                                                        <li>
                                                            <i className="fa fa-check"></i> Allient Group
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Trinamax
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Hexaware
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Alle technologies
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Brane Enterprises
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Iesof
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Digituala Lab Enterprise Llp
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> ECONSTRUCT
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> BYJU'S
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Planet Spark
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> IDC Technologies
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> XCRINO
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Afford
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> COMMERCE CX
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> WINIT Software
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> FACEPREP
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Deltax
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> CUR8
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Delloitte
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Precise Tech Solutions
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Lekha Wireless
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Brigade Enterprises
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Quess Corp
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col md={6}>
                                                    {' '}
                                                    <ul>
                                                        <h6>CAMPUS PLACEMENT (ACADEMIC YEAR 2021-2022)</h6>
                                                        <li>
                                                            <i className="fa fa-check"></i> Deltax
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Techouts Pvt Ltd
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Digituala Lab
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Csb Bank
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Amazon
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Streebo
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Digituala Lab Enterprise Llp
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Capgemini
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Sb Engineering
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Piston Screws
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Millennium Tech
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Kevin Page
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Itc Academy
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Grease
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Boltscrosera
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Dogicraft
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Piston Screws
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> FACEPREP
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> CUR8
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Delloitte
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Precise Tech Solutions
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Brigade Enterprises
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Enterprises
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Lekha Wireless
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Quess Corp
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Hexaware
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Alletechnologies
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Brane Enterprises
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col md={6}>
                                                    {' '}
                                                    <ul>
                                                        <h6>CAMPUS PLACEMENT (ACADEMIC YEAR 2020-2021)</h6>
                                                        <li>
                                                            <i className="fa fa-check"></i> Csb Bank
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Amazon
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Streebo
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Unistring Tech Solutions
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Capgemini
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Sb Engineering
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Piston Screws
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Millennium Tech
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Kevin Page
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Itc Academy
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Millennium Tech
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Kevin Page
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Grease BoltsCrosera
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Dogicraft
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Piston Screws
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> FACEPREP
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Deltax
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> CUR8
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Delloitte
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Precise Tech Solutions
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Brigade Enterprises
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Enterprises
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Lekha Wireless
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Quess Corp
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Hexaware
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Alletechnologies
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-check"></i> Brane Enterprises
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Container>
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

export default Placement;
