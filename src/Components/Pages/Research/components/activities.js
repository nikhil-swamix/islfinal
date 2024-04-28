import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const Ractivities = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Research & Development</title>
        <meta name="description" content="Exam Timetable & Notifications" />

        <link rel="canonical" href="http://islec.edu.in/exambranch" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Research & Development</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                      Research & Development /  Activities  
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      {/* <img
                        className="authorExam"
                        src="https://i.ibb.co/RC8C8jx/raghavender-removebg-preview-1.jpg"
                        alt="author"
                      /> */}
                    </div>
                    <div className="media_content media-body">
                    <h6 className="title">Dr. Chndra Sekhar</h6>
                      <p>Dean R&D</p>
                      <p>M.TECH & PhD</p>
                    </div>
                  </div>
                  <div className="breadcrumb_media d-flex align-items-center mt-3">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/z7NLwF0/mail.png"
                        alt="mail"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="mailto:tpo@islec.edu.in">
                          research@islec.edu.in
                        </a>
                      </h6>
                    </div>
                  </div>

                  <div className="breadcrumb_media d-flex align-items-center">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/jVpCRqM/mobile.png"
                        alt="mobile"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="/#">
                          +919247476003
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

      <section className="mt-60 mb-60 placement">
        <Container>
          <Row>

          <Col md={4} className="sidebar academic">
              <Sidebar />
            </Col>


          <Col md={8}>
            <div className="title">
              <h4>RESEARCH & DEVELOPMENT CELL ACTIVITIES/ EVENTS  A.Y.2023-2024</h4>
              <h5>List of events conducted in C.A.Y. 2023-24</h5>
            </div>

            <section className="dept-tabs mt-30">

            <Table className='striped bordered hover'>

            <table>
    <tr>
        <td>S.No.</td>
        <td>NAME OF THE PROGRAMME</td>
        <td>MONTH &amp; YEAR</td>
    </tr>
    <tr>
        <td>1</td>
        <td>SKILL BUILD PROGRAMME WAS CONDUCTED IN ISLEC AS A PART OF INSTITUITION INNOVATION COUNCIL(IIC SELF DRIVEN ACTIVITY) BY IBM EMPLOYEE.</td>
        <td>Feb-24</td>
    </tr>

    <tr>
        <td>2</td>
        <td>SEMINAR WAS CONDUCTED  AS A PART OF INSTITUITION INNOVATION COUNCIL ACTIVITY ON INNOVATION AND DISRUPTIVE  EMERGING TECHNOLOGY BY MOHD ATEEQ AND OSAID SHAREEF</td>
        <td>Feb-24</td>
    </tr>
   
    <tr>
        <td>3</td>
        <td>WORKSHOP WAS CONDUCTED AS A PART OF INSTITUITION INNOVATION COUNCIL  ACTIVITY  ON DESIGN THINKING, CRITICAL THINKING AND INNOVATION DESIGN. THE SPEAKER WAS SHIVDEEP,FACILITATOR AND CORPORATE TRAINER- FOUNDER OF RGB DESIGN COMPANY.</td>
        <td>Feb-24</td>
    </tr>
   
    <tr>
        <td>4</td>
        <td>AN EXPERT TALK WAS CONDUCTED ON PROCESS OF INNOVATION DEVELOPMENT AND TECHNOLOGY READINESS LEVEL BY DR. UMAKANTA CHOUDHURY, PROFESSOR AND DIRECTOR, INCUBATION AND INNOVATION AT CBIT</td>
        <td>Feb-24</td>
    </tr>
   
    <tr>
        <td>5</td>
        <td>A SURVEY  TO IDENTIFY PROBLEMS OF VILLAGE CHILDREN WAS ORGANISED AS  PART OF UNNAT BHARAT ABHYAN BY ISLEC</td>
        <td>Dec-23</td>
    </tr>
   
    <tr>
        <td>6</td>
        <td>FACULTY AND STUDENTS OF ISLEC TAKEN PART IN IIC REGIONAL MEET AT INSTITUTE OF AERONAUTICAL ENGINEERING  </td>
        <td>Dec-23</td>
    </tr>
    
    <tr>
        <td>7</td>
        <td>A SEMINAR WAS CONDUCTED ON NATIONALENTREPRENEURSHIP DAY IN ISLEC BY FATIMA KHADAR AND SYED MOHAMMED SIRAJULHAQ FROM BIZRAH HEALTH AND LIFESTYLE PVT LTD</td>
        <td>Nov-23</td>
    </tr>
    
    <tr>
        <td>8</td>
        <td>SEMINAR TITLED “RESEARCH EMPOWERMENT INITIATIVES” WAS CONDUCTED AT ISLEC BY DR.L.NIRMALA DEVI (PROFESSOR- ECE – OU &amp; MEMBER BOARD OF GOVERNOR - ISLEC)</td>
        <td>Oct-23</td>
    </tr>
   
    <tr>
        <td>9</td>
        <td>AWARENESS PROGRAM ON “ENTREPRENEURSHIP &amp; INNOVTAION AS CARER OPPORTUNITY” WAS CONDUCTED AT ISLEC BY DR.MD.MASOOD (PRINCIPAL- ISLEC)&amp; MR.MD.FURKHAN</td>
        <td>Sep-23</td>
    </tr>
   
    <tr>
        <td>10</td>
        <td>AN INFO SESSION TITLED “WORLD  ENTREPRENEUR DAY” WAS CONDUCTED AT ISLEC BY DR. UMAKANTA CHOUDHURY, PROFESSOR  AND DIRECTOR , INCUBATION AND INNOVATION AT CBIT</td>
        <td>Aug-23</td>
    </tr>
   
</table>

                          
            
            </Table>

            <h4 className='mt-30' >CENTRE FOR INNOVATION, INCUBATION & ENTREPRENEURSHIP</h4>
                <h5>List of events participated in C.A.Y. 2023-24</h5>

            <Table className='striped bordered hover'>

            <table>
    <tr>
        <td>S.No.</td>
        <td>NAME OF THE PROGRAMME</td>
        <td>MONTH &amp; YEAR</td>
    </tr>
    <tr>
        <td>1</td>
        <td>STUDENTS AND FACULTY OF ISLEC  ATTENDED EVENT AT IIT HYDERABAD AND INTERACTED WITH INNOVATORS FROM VARIOUS HIGHER EDUCATION INSTITUITIONS(IITS,NITS,IIITS,IISERS,IISC AND TOP 50 NIRF RANKED INSTITUTES)</td>
        <td>Jan-24</td>
    </tr>
    <tr>
        <td>2</td>
        <td>MRS.ZUBEDA BEGUM ATTENDED TELANGANA INCUBATORS & ACCELERATORS MEET HOSTED BY OTBI, OSMANIA UNIVERSITY</td>
        <td>Dec-23</td>
    </tr>
    <tr>
        <td>3</td>
        <td>DR. ABDUL MATEEN &  MOHD FURKHAN  GIVEN GUEST LECTURE AT MASTER MINDS HIGH SCHOOL AND TECHFIELDS HIGH SCHOOL</td>
        <td>Nov-23</td>
    </tr>
    <tr>
        <td>4</td>
        <td>DR. ABDUL MATEEN &  MOHD FURKHAN  CONDUCTED AN INFORMATIVE PROGRAM ON INTELLECTUAL PROPERTY RIGHTS (IPR) CELL AT DECCAN COLLEGE OF ENGINEERING</td>
        <td>Sep-23</td>
    </tr>
    <tr>
        <td>5</td>
        <td>CBIT COLLEGE WAS MADE AS MENTOR AND ISL ENGINEERING COLLEGE AS MENTEE.
DR.U.K. CHOWDHARY IS THE DIRECTOR
</td>
        <td>Aug-23</td>
    </tr>
    <tr>
        <td>6</td>
        <td>DR. ABDUL MATEEN &  MOHD FURKHAN  CONDUCTED AN INSIGHTFUL PROGRAM ON IPR GRANT AT ISLEC</td>
        <td>Aug-23</td>
    </tr>
    <tr>
        <td>7</td>
        <td>FEMALE STUDENTS AND STAFF OF ISL ENGINEERING COLLEGE VISITED WE-HUB  AS PART OF SERVING SOCIETY WITH SOLVING PROBLEM RELATED TO WOMEN ENTREPRENEURSHIP.</td>
        <td>Aug-23</td>
    </tr>
    <tr>
        <td>8</td>
        <td>INNOVATION AND ENTREPRENEURSHIP OUTREACH PROGRAM WAS CONDUCTED IN ISLAMIA PUBLIC SCHOOL BY MBA DEPARTMENT</td>
        <td>JUNE-23</td>
    </tr>
</table>
  
            </Table>
            </section>


            <h6 className='mt-35 mb-15'>1. Faculty and Students of ISLEC  attended event at IIT Hyderabad and interacted with innovators from various higher education instituitions(IITs,NITs,IIITs,IISERs,IISC and top 50 NIRF ranked Institutes)</h6>

            <Row>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/rac1.png" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Figure 9.6.36 Banner of IInvenTiv-2024 from IIT Hyderabad</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/rac2.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Figure 9.6.36 Banner of IInvenTiv-2024 from IIT Hyderabad</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/rac3.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Figure 9.6.37 Students and Faculty of ISLEC  attended event at IIT Hyderabad</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/rac4.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Figure 9.6.39 Faculty of  ISLEC  attended event at IIT Hyderabad and interacted with innovators from various higher education instituitions</p>
                     </div>
                </div>
                </Col>
            </Row>

            <h6 className='mt-35 mb-15'>2. Students of ISLEC participated in Idea Pitching Competition in OU TBI. The project of the students was displayed and appreciated. Ms. Zubeda Begum, Assistant professor  of ECE Department was their project guide.</h6>

            <Row>
            <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/rac5.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Figure 9.6.40 Students of ISLEC participating in Idea Pitching Competition in OU TBI</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/rac6.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Figure 9.6.41 Students of ISLEC displaying their project at OUTBI</p>
                     </div>
                </div>
                </Col>

            </Row>


            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Ractivities
