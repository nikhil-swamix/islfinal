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
                <h4 className="title">Principal</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Principal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="chairman_section mt-60 mb-60">
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={8} className="text-justify">
              <p>
                <strong>Dr. Mohammed Masood</strong> a renowned scholar and
                educationist and a prolific principal has got 24 years of
                teaching experience in engineering colleges.
              </p>

              <p>
                {" "}
                He started his career as a lecturer in MJCET before taking up an
                inspection engineer in SWCC-KSA.
              </p>

              <p>
                {" "}
                After serving SWCC for 4 yrs he returned back to India and
                joined as an Asst.Professor in the Dept. of Mechanical
                Engineering in the year 2005.
              </p>

              <p>
                {" "}
                Eventually he joined LIET as a principal and continued to work
                at Lords as a professor and Director Research and Development.
              </p>

              <p>
                {" "}
                Under his able guidance 20 Ph.D scholars from 9 Universities
                have carried out their research work using advanced research
                facility.
              </p>

              <p>
                {" "}
                He published around 40 research papers in International and
                National Journals and conferences.
              </p>

              <p>
                {" "}
                Ha has a lot of achievements to his credit. He developed, guided
                and presented the MJIET successfully for NBA accreditation in
                2011 and 2017 and got accreditation for 4 branches. NAAC with
                grade A for 5 yesrs. ISO certification.
              </p>

              <p>
                {" "}
                He established systems, procedures,standards(Academic and
                Administration). Internal research and development cell with
                seed funding. Advance R&D centre in the area of Advanced
                internal combustion of CFD analysis with AICTE funds.
              </p>

              <p>
                {" "}
                Entrepreneurship development cell. Faculty incubation center for
                in house faculty training and development. Initiated many
                student centric activities like orators club knowledge club and
                finishing school for final year students. Organized many
                seminars, guest lectures, industrial visits, model exhibition
                and FDP programs.
              </p>

              <p>
                {" "}
                His memberships include fellow of Institution of Engineers,
                FIE-India Member of society of automative engineers, USA. Member
                of combustion Institute-Indian Chapter Member of Indian Society
                for Tech Education,MISTE.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Principal;
