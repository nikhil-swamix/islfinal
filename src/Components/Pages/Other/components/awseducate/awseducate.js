import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const awseducate = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Educate - CPOC</title>
        <meta name="description" content="" />

        <link rel="canonical" href="http://islec.edu.in/nptel" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
            <div className="breadcrumb_details_content">
                <h4 className="title"> AWS Educate</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        AWS Educate
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="authorExam"
                        src="https://i.ibb.co/c81jgr6/abdulbari.jpg"
                        alt="author"
                      />
                    </div>
                    <div className="media_content media-body">
                      <p>CPOC : AWS Educate</p>
                      <h6 className="title">Associate Professor : Dr. Mohammed Abdul Bari</h6>
                      <p>Deprtment : Computer Science & Engineering</p>
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
                          Email: cpoc@islec.edu.in
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
      <div className="chairman_section mt-60 mb-60">
        <Container>
          <Row>
            <Col lg={8} className="text-justify">
              <p>
                 <strong>Dr. Mohammed Abdul Bari</strong>{' '}is an active <strong>Educator</strong>, Academician and Researcher in the field of Computer Science and Information Technology. More than 14 years of teaching experience in reputed Engineering Colleges in India, Europe and Gulf University. Solid understanding of Data warehousing, Good knowledge of SQL. Strong knowledge in relational databases (RDBMS), Data Modeling, SAP, Software Engineering, Manet, Cloud Computing. Given seminars on Cloud Computing, Hold Cisco Certificate, Co-Author of 2(two) book published in Germany and USA. Having Two (2) Patents. Received I20R National Eminent Research Award of 2020.Having papers published in more than 15 international Journal which include Springer. He did B.E in Computer Science & Engineering from Bangalore University, Double Masters, M.Tech from Jawaharlal Nehru Technological University, Hyderabad and MS from London South Bank University, UK; Ph.D. from Kalinga University, Raipur. Ph.D. Supervisor, Kalinga University, Raipur, Amity University, Member of ACM, British Computer Society Currently he is the head of the Department of Computer Science Engineering and Associate Professor in <strong>ISL Engineering College</strong>, Hyderabad, India.
              </p>
            </Col>
          </Row>
        </Container>
      </div>     
    </>
  );
};

export default awseducate;
