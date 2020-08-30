import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

const Almanac = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Almanac</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a href="#academics">Academics</a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Almanac
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={4} md={4} className="sidebar">
              <aside>
                <Sidebar />
              </aside>
            </Col>{" "}
            <Col lg={8}>
              <section className="course-details-info">
                <Tabs className="myClass">
                  <TabList></TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="">
                      <h4>
                        B.E I - Semester{" "}
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Particulars</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Commencement of Classes</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>CIE (Internal Test) - I</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>CIE (Internal Test) - II</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Last date of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Preparation and Practical Examinations</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Commencement of Theory Exminations </td>
                            <td>22-6-2020</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="">
                      <h4>
                        B.E II - Semester{" "}
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Particulars</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Commencement of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>CIE (Internal Test) - I</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>CIE (Internal Test) - II</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Last date of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              Preparation Holidays and Practical Examinations
                            </td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Commencement of Theory Exminations </td>
                            <td>22-6-2020</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </TabPanel>
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="">
                      <h4>
                        B.E III, V, VII - Semester{" "}
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Particulars</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Commencement of Classes</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>CIE (Internal Test) - I</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>CIE (Internal Test) - II</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Last date of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Preparation and Practical Examinations</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Commencement of Theory Exminations </td>
                            <td>22-6-2020</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="">
                      <h4>
                        B.E IV, VI, VIII - Semester{" "}
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Particulars</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Commencement of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>CIE (Internal Test) - I</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>CIE (Internal Test) - II</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Last date of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              Preparation Holidays and Practical Examinations
                            </td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Commencement of Theory Exminations </td>
                            <td>22-6-2020</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </TabPanel>
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="">
                      <h4>
                        MBA I & III - Semester{" "}
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Particulars</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Commencement of Classes</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>I Internal Assestment Test</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>II Internal Assestment Test</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Last date of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Commencement of Theory Exminations </td>
                            <td>22-6-2020</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="">
                      <h4>
                        MBA II & IV - Semester{" "}
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Particulars</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Commencement of Classes</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>I Internal Assestment Test</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>II Internal Assestment Test</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Last date of Instructions</td>
                            <td>22-6-2020</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Commencement of Theory Exminations </td>
                            <td>22-6-2020</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </TabPanel>
                </Tabs>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Almanac;
