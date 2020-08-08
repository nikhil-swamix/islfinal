import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Chairman = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Chairman</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Chairman
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
                <b>Mr. Salman Ahmed</b> is carrying forward the pioneering
                legacy of his visionary father, Mr. Khaja Hassan. All the
                assignments or pursuits he shoulders are punctuated with
                distinctions. This multi-faceted personality and a thought
                provoking orator is quite enthusiastic in bringing laurels to
                the ISLAMIA group in its continuing saga of success.
              </p>
              <p>
                He is redefining the etiquette of the quality education with an
                indomitable team spirit. In treading the path of his father, he
                is blazing the way, with a trail of achievements and
                accomplished goals. For students, he is a sustainable source of
                inspiration with hallmarked practice of teaching and learning
                process. His innovative thoughts encompass worthy practices,
                with a league of measures, to cope new challenges, in bringing
                forth potential professionals.
              </p>
              <p>
                Mr. Salman Ahmed is a qualified HR professional and a certified
                corporate trainer. He is a Doctoral Research Scholar in Human
                Resource Management. He specializes in Behavioural Sciences and
                has many publications to his name.
              </p>
              <p>
                ISL Engineering College is the flagship programme of AMES.
                Established in 2008, the college has grown leaps and bonds.
                Under the Chairmanship of Mr. Salman Ahmed, ISL is well on its
                way to achieve excellence in imparting education at professional
                level and making ready worthy engineers of application and
                thought.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Chairman;
