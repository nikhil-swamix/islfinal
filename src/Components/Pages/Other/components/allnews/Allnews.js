import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Table from "./Table";
import { Helmet } from "react-helmet";

import Sidebar from "../../../Academic/Sidebar";

const Allnews = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>News & Updates </title>
        <meta
          name="description"
          content="News & Updates - ISL Engineering College"
        />

        <link rel="canonical" href="http://islec.edu.in/news" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> News & Updates</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        News & Updates
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-60 mb-60 allnews">
        <Container>
          <Row>
            <Col md={3} className="sidebar academic">
              <Sidebar />
            </Col>

            <Col md={9}>
              <Table />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Allnews;
