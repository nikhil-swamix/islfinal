import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../MBA/components/Sidebar'
import Sidepost from '../MBA/components/Sidepost'
import Syllabus from '../MBA/components/Syllabus'
import Slide from '../MBA/components/Slide'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const mba = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Master of Business Administration</title>
        <meta
          name="description"
          content="ISLEC is Approved by AICTE and Affiliated to Osmania University"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Master of Business Administration</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a href="#/">Department</a>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        Master of Business Administration
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="author"
                        src="https://www.islec.edu.in/allimages/faculty/mbahodnov22.jpeg"
                        alt="author"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title">Dr. K. Padmaja</h6>
                      <p className="edu">M.Com, MBA, PGCCA, M.Phil, PhD</p>
                      <p>Head of Department</p>
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
                        <a href="mailto:mba.hod@islec.edu.in">
                          mba@islec.edu.in
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

      <section className="course-details-area dept pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <Slide />
              <section className="dept-tabs mt-20">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Syllabus</Tab>
                    <Tab>Faculty</Tab>
                    <Tab>Departmental Events</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        An MBA, or Master of Business Administration, is a post graduate-level degree program that typically takes two years to complete. The course curriculum is designed to provide students with a broad understanding of business principles and practices, as well as the skills and knowledge necessary to manage and lead organizations in a variety of industries.
                      </p>
                      <p>Some common subjects covered in MBA course include:</p>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> Accounting and Financial Management: This course covers the basics of accounting and financial management, including financial statement analysis, budgeting, and forecasting.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Marketing Management: This course focuses on developing marketing strategies to promote products and services, including market research, product development, pricing strategies, and advertising.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Operations Management: Here , the design, management, and improvement of production and service systems, including supply chain management, quality control, and process improvement are taught.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Organizational Behavior: This subject focuses on understanding individual and group behavior within organizations, including leadership, motivation, communication, and team dynamics.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Strategic Management: The students are taught development and implementation of business strategies, including analyzing competitive environments, identifying opportunities and threats, and formulating and executing strategic plans as part of this   subject.
                        </li>
                        <p>In addition to these core courses, MBA programs often offer elective courses that allow students to tailor their education to their specific career goals and interests. MBA programs may also require students to complete a capstone project or internship, providing hands-on experience in applying the concepts and skills learned in the classroom to real-world business challenges.</p>
                      </ul>

                      <h4>Vision</h4>
                      <p>To establish the department as a leading center of excellence in management education.</p>



                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To enhance the critical thinking and analytical skills of students through value added courses to the curriculum.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To nurture the students’ employability through enhanced skills, awareness about the needs of the industry around the globe.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To motivate, and inculcate the urge for lifelong learning along with professional and critical practices.
                        </li>


                      </ul>




                      <h4>MBA Best practices at ISLEC</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> Experienced and Qualified Faculty: The best MBA colleges have highly experienced and qualified faculty members who are subject matter experts and provide students with in-depth knowledge and insights.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Continuous Industry Interaction: Best MBA colleges foster a continuous interaction with industry experts, entrepreneurs, and business leaders, in order to offer students practical insights into the business world.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Updated Course Curriculum: The best MBA colleges regularly update their course curriculum to keep up with the latest industry trends and to equip students with up-to-date knowledge and skills.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Entrepreneurial Support: Many MBA colleges provide students with an entrepreneurial support system through programs, incubators, accelerators and mentorship programs.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> International Exposure: The best MBA colleges offer students international exposure through study tours, exchange programs, and international internships.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Placement Support: Best MBA colleges provide students with strong placement support through campus interviews, job fairs, mentorship programs, and career counseling services.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Research and Analysis: Best MBA colleges encourage students to participate in research and analysis projects, case studies, and business simulations to develop a deeper understanding of business operations.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Collaborative Learning Environment: Collaborative learning environment is an important aspect in the MBA programs. Best MBA colleges create an environment of open communication, teamwork, and group projects to encourage active participation and learning.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Cutting-edge Infrastructure: Best MBA colleges have cutting-edge infrastructure with state-of-the-art technology and well-equipped classrooms, libraries, and labs.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Holistic Learning Experience: Best MBA colleges provide a holistic learning experience that goes beyond just academics, and offers students opportunities to develop soft skills like communication, leadership, and problem-solving through extracurricular activities, sports, and cultural events.
                        </li>
                      </ul>

                    <h4>Chairman’s message</h4>
                    <p>It is my pleasure to welcome you to our esteemed institution's MBA program. As the Chairman of this college, I am proud to say that we have a long-standing tradition of providing quality education that prepares our students for success in the business world.</p>
                    <p>Our MBA program is designed to equip you with the knowledge and skills necessary to excel in your careers. You will have the opportunity to learn from experienced faculty members who are experts in their respective fields and have extensive industry experience.</p>
                    <p>In addition to classroom learning, we also provide opportunities for practical experience through internships, case studies, and industry visits. These experiences will help you gain a better understanding of the business world and prepare you for the challenges that lie ahead.</p>
                    <p>We believe that our MBA program will not only prepare you for a successful career but also help you become a responsible and ethical leader. We encourage our students to be innovative, creative, and socially responsible, as we believe that these qualities are essential for success in today's business environment.</p>
                    <p>I wish you all the best in your academic journey and look forward to seeing you succeed in your careers.</p>
                    <h6>Salman Ahmed</h6>

                    <h4 className='mt-50'>Principal’s message</h4>

                    <p>As the Principal of this college, I am thrilled to welcome you to our MBA program. Our program is designed to provide you with a comprehensive understanding of business principles and practices, as well as the skills and knowledge necessary to succeed in today’s dynamic business environment.</p>
                    <p>Our faculty members are highly qualified and experienced in their respective fields, and they are dedicated to providing you with a challenging and stimulating learning environment. They will inspire you to think critically, solve complex problems, and develop innovative solutions that will help you succeed in your future careers.</p>
                    <p>In addition to classroom learning, we also provide opportunities for hands-on experience through internships, case studies, and industry visits. These experiences will help you gain a better understanding of the business world and prepare you for the challenges that lie ahead.</p>
                    <p>At our college, we believe in developing well-rounded individuals who are not only successful in their careers but also contribute positively to society. We encourage our students to be socially responsible and ethical leaders who make a positive impact on their communities and the world.</p>
                    <p>I am confident that our MBA program will provide you with the knowledge, skills, and experience you need to achieve your goals and reach new heights in your career. I wish you all the best as you embark on this exciting journey.</p>
                    <h6>Dr. Mohammed Masood</h6>

                    </div>
                  </TabPanel>




                  <TabPanel>
                    <div className="syll text-center">
                      <Syllabus />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <Table className='striped bordered hover'>
    <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Designation</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr.K.Padmaja</td>
        <td>Associate. Prof</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dr.Md.Irfan Uddin</td>
        <td>AssociateProf</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mr.Salman Ahmed</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Ms.Asma Khatoon</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mrs.Ishrathjabbeen</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mrs.Saba Tarannum</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Mr.Syed Abdul Razak Quadri</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Mr.Rameshbabu</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Mr.Naimatullah Hussaini</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Mr.Azam Khan</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Ms.Rakia Begum</td>
        <td>Asst Prof</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Ms.Afifa Naaz</td>
        <td>Asst. prof</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Mr.Rahamanessa Aalamudi</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Mr.Venkata Sai Prasad</td>
        <td>Asst.prof</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Ms.Kubra Fatima</td>
        <td>AsstProf</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Mr.Mohammed Khanith</td>
        <td>Asst Prof</td>
    </tr>
                      </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <p>sas</p>
                    <Row>
                      <Col md={4}>
                      <div className="card mb-10">
                        <img className="card-img-top" src="https://islec.edu.in" alt="CardImage " />
                        <div className="card-body">
                          <h6 className="card-title">Orientation Day</h6>
                          <p className="card-text"></p>

                        </div>
                      </div>

                      </Col>
                    </Row>

                  </TabPanel>


                </Tabs>
              </section>
            </Col>
            <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
                    <Sidebar />
                  </div>
                </div>

                <Sidepost />
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default mba
