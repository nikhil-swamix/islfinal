import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "./Table";
import Sidebar from "../Sidebar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Syllabus = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Syllabus</title>
        <meta
          name="description"
          content="Latest Syllabus issued by Dean Faculty of Engineering Osmania University, Hyderabad"
        />

        <link rel="canonical" href="http://islec.edu.in/syllabus" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Syllabus</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a href="#/">Almanac</a>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        Syllabus
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-60 academic">
        <Container>
          <Row>
            <Col lg={4} md={4} className="sidebar academic ac1">
              <aside>
                <Sidebar />
              </aside>
            </Col>{" "}
            <Col lg={8} className="academic_table">
              <Table />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Syllabus;
