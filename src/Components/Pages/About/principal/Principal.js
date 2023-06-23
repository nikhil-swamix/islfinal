import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Principal = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                      <p>Principal</p>
                      <h6 className="title">Dr. Mohammed Masood</h6>
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
                        <a href="mailto:principal@islec.edu.in">
                          principal@islec.edu.in
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
            <Col lg={4}>
            <img src="https://islec.edu.in/images/principal.jpeg"
                 className="img-fluid d-block"
                 width={250}
                 height={350}
                 alt="Principal "
             />
            </Col>
            <Col lg={8} className="text-justify">
              <p>
                <strong>Dr. Mohammed Masood</strong> obtained his Bachelor’s degree in Mechanical engineering from Muffakham Jah College of Engineering & Technology affiliated to Osmania University Hyderabad, in the year 1989, M.Tech. & PhD from Jawaharlal Nehru Technology University Hyderabad in the years 1998 & 2007 respectively.
              </p>

              <p>
                {" "}
                Over all He is having 32 years of academic, Industry and research experience.
              </p>

              <p>
                {" "}
                Prior to Joining ISL Engineering College as Professor and Principal, he has held various designations in reputed organizations as Principal, Dean R & D, Dean Academics & Planning etc.</p>

              <p>
                {" "}
                He has worked as Principal Investigator and Co-PI for various research projects funded by AICTE, and other Governmental agencies.
              </p>

              <p>
                {" "}
                He has guided more than 22 PhD candidates, supervised many M.Tech and B.Tech projects.
              </p>

              <p>
                {" "}
                He is an accomplished administrator, academician and researcher. He has published more than 100 papers in international and nation journals & conferences, along with more than a dozen patents to his credit. He was instrumental in establishing advance computational combustion laboratory which has served as a research centre to the research scholars from many universities and colleges. 
              </p>

              <p>
                {" "}
                As an administrator has reformed the intuitions where worked by establishing systems, procedures, getting NAAC & NBA accreditations with very good grades.
              </p>

              <p>
                {" "}
                He was awarded as Best faculty award, Best project award, Excellence in teaching award, etc by many Institutions and semi governmental organizations.  
              </p>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Principal;
