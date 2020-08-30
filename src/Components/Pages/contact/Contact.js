import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Contact</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="https://islengg.ac.in">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact_area pt-60 pb-50">
        <div className="services_shape_1"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact_form">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="section_title">
                      <h3 className="main_title">Get in touch</h3>
                    </div>
                  </div>
                </div>

                <form action="/" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_form">
                        <input type="text" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_form">
                        <input type="email" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_form">
                        <textarea placeholder="Message" required></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_form">
                        <button className="main-btn">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_info pt-20">
                <ul>
                  <li>
                    <div className="single_info d-flex align-items-center mt-30">
                      <div className="info_icon">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="info_content media-body">
                        <p>
                          International Airport Road, Bandlaguda, <br />{" "}
                          Hyderabad - 500005, Telangana, India
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single_info d-flex align-items-center mt-30">
                      <div className="info_icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="info_content media-body">
                        <p>040 - 29880083</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single_info d-flex align-items-center mt-30">
                      <div className="info_icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="info_content media-body">
                        <p>info@islec.edu.in</p>
                        <p>meetislwcollege@gmail.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="contact_map mt-50">
                <div className="gmap_canvas"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
