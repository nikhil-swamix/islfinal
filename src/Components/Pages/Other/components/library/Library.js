import React from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Sidebar from "../../../Academic/Sidebar";

const Library = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Library</title>
        <meta name="description" content="Library - ISL Engineering College" />

        <link rel="canonical" href="http://islec.edu.in/library" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Library</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Library
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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Volumes</td>
                    <td> 20,000+</td>
                  </tr>
                  <tr>
                    <td>Titles</td>
                    <td>1725</td>
                  </tr>
                  <tr>
                    <td>National Journals </td>
                    <td>60+</td>
                  </tr>
                  <tr>
                    <td>International Journals </td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>E-Journals </td>
                    <td>Multiple</td>
                  </tr>
                  <tr>
                    <td>Reading Room Capacity </td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Desktop Computers</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Library;
