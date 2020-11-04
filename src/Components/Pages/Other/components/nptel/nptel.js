import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Iframe from 'react-iframe'


const nptel = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SWAYAM - NPTEL Local Chapter</title>
        <meta name="description" content="LSWAYAM - NPTEL Local Chapter" />

        <link rel="canonical" href="http://islec.edu.in/nptel" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
            <div className="breadcrumb_details_content">
                <h4 className="title"> SWAYAM - NPTEL Local Chapter</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        NPTEL
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="authorExam"
                        src="https://nptel.ac.in/content/college_assets/SPOC_images/4185_SPOC.jpeg"
                        alt="author"
                      />
                    </div>
                    <div className="media_content media-body">
                      <p>SPOC</p>
                      <h6 className="title">Shaik Abdul Saleem</h6>
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
                          spoc@islec.edu.in
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
      <section className="mt-60 mb-60 allnews">
        <Container>
          <Row>
            <Col md={12}>
            <h4>Local Chapter ID (LC ID): 4185</h4>

            <Iframe url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQqeQAYTWjIi_XD3NTfpxF3py4lrm92wk8gGha4NsXViaIhh6V1oL_h86DNWI6tgOwUCntxD7ggmM1W/pubhtml"
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default nptel;
