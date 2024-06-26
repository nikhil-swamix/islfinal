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
        <title>Approvals</title>
        <meta name="description" content="Library - ISL Engineering College" />

        <link rel="canonical" href="http://islec.edu.in/approval" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Approvals</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Approvals
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
                    <th>Download/View</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>AICTE Approvals</td>
                    <td>
                      <a href="https://islec.edu.in/docs/Approvals/AICTE.pdf">Click here </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Osmania University Approvals</td>
                    <td>
                      <a href="https://islec.edu.in/docs/Approvals/OU_Affiliation.pdf">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td>MBA Affiliation</td>
                    <td>
                      <a href="https://islec.edu.in/docs/Approvals/MBA_Affiliation.pdf">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td>AISHE</td>
                    <td>
                      <a href="https://islec.edu.in/docs/Approvals/AISHE.pdf">Click here</a>
                    </td>
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
