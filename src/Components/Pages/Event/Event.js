import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import All from "./components/All";
import Seminar from "./components/Seminar";
import Inbound from "./components/Inbound";
import Outbound from "./components/Outbound";
import Sports from "./components/Sports";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events</title>
        <meta
          name="description"
          content="Seminar & Workshops, In-Bounds, out-Bounds,  Sports, Industrial Visits"
        />

        <link rel="canonical" href="http://islec.edu.in/events" />
      </Helmet>
      <section className="breadcrumb_details bg_cover">
        <Container fluid>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Infrastructure & Events</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Infrastructure & Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid>
        <section className="blog pt-60 pb-50">
          <Tab.Container id="left-tabs-example" defaultActiveKey="all">
            <Row>
              <Col lg={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="all">
                    <All />
                  </Tab.Pane>
                  <Tab.Pane eventKey="seminar">
                    <Seminar />
                  </Tab.Pane>
                  <Tab.Pane eventKey="inbound">
                    <Inbound />
                  </Tab.Pane>
                  <Tab.Pane eventKey="outbound">
                    <Outbound />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sports">
                    <Sports />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col lg={4} className="sidebar">
                <div className="title">
                  <h4>Tags</h4>
                </div>

                <Nav variant="pills" className="pt-20 pb-20">
                  <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seminar">Seminar & Workshops</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="inbound">In-Bounds Events</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="outbound">Out-Bound / Industrial Visits</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sports">Sports & Physical Activity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="">Classrooms & Labs</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div>
                  <Sidebar />
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </section>
      </Container>
    </>
  );
};

export default Event;
