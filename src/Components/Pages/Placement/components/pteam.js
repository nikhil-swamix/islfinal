import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from './Sidebar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const pteam = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Training & Placement</title>
        <meta name="description" content="Exam Timetable & Notifications" />

        <link rel="canonical" href="http://islec.edu.in/exambranch" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Training & Placement</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Training & Placement
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
                    <h6 className="title">Buelah Sharon</h6>
                      <p>Training & Placement Officer</p>
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
                          tpo@islec.edu.in
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
                          +919182221317 / +919676544151
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
              <h4>Training & Placement Cell Team</h4>
            </div>

            <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Commitee Members</Tab>
                    <Tab>Roles and Responsibilities</Tab>
                    
                  </TabList>


                  <TabPanel className="tab-content tab-content-info text-justify">

                  <Table className="tab-content tab-content-info text-justify text-center">
    <tr>
        <td>Sl.No.</td>
        <td>Name of the Faculty/Student</td>
        <td>Designation</td>
        <td>Department</td>
        <td>Position Held</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Mrs.Beulah Sharon</td>
        <td>Assistant Professor</td>
        <td>HEAD</td>
        <td>TPO</td>
    </tr>
    <tr>
        <td>2</td>
        <td>MR.S.Md.Mazhar ul haq</td>
        <td>Assistant Professor</td>
        <td>EEE</td>
        <td>Coordinator</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Dr.B.Srinivasulu</td>
        <td>Assistant Professor</td>
        <td>MECH</td>
        <td>Coordinator</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Mrs.Zubeda Begum</td>
        <td>Assistant Professor</td>
        <td>ECE</td>
        <td>Member</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mr.Bahauddin</td>
        <td>Assistant Professor</td>
        <td>MECH</td>
        <td>Member</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mrs.T.Anita</td>
        <td>Assistant Professor</td>
        <td>CSE</td>
        <td>Member</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Mr.Syed Shoeb</td>
        <td>Assistant Professor</td>
        <td>CIVIL</td>
        <td>Member</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Mrs.Asra Sultana</td>
        <td>Assistant Professor</td>
        <td>EEE</td>
        <td>Member</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Mr.Arshad Hussain</td>
        <td>Assistant Professor</td>
        <td>IT</td>
        <td>Member</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Mr.Venkata Sai Prasad</td>
        <td>Assistant Professor</td>
        <td>MBA</td>
        <td>Member</td>
    </tr>
</Table>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <h5 className='mt-15 mb-15'>Roles And Responsibilities Of The Cell Members</h5>

                    <h5>1.	Roles And Responsibilities of TPO Head</h5>

                    <p>The Role of a Training and Placement Officer (TPO) is crucial in educational institutions, particularly in colleges and universities, where their primary responsibility is to bridge the gap between students and prospective employers. TPOs play a pivotal role in ensuring that students are well-prepared for the job market and that they have opportunities to secure employment that aligns with their skills and aspirations. </p>

                    <h6>Here are the key roles and responsibilities of a TPO:</h6>
                    <ul>
                      <li>
                       <i className="fa fa-check"></i> Industry Interaction: TPOs should establish and maintain strong relationships with various industries and organizations. They need to understand industry trends, job requirements, and hiring processes. Regular interactions with industry representatives, attending seminars, and networking are crucial for this.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Student Guidance: TPOs are responsible for guiding students in their career development. This includes providing advice on resume building, interview preparation, and career counseling. TPOs should also help students identify their strengths, weaknesses, and interests to match them with suitable job opportunities.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Placement Drives: TPOs are in charge of organizing placement drives and job fairs on campus. They need to coordinate with companies to schedule recruitment activities, including written tests, group discussions, and interviews. Ensuring a smooth and efficient placement process is a key part of their role.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Skill Enhancement: TPOs should identify the skills and competencies in demand in the job market and work with faculty to integrate these into the curriculum. They may also arrange for skill development workshops and training programs to prepare students for employment.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Resume Building: TPOs assist students in creating effective resumes that highlight their qualifications, experiences, and achievements. They may also help students draft cover letters and teach them how to present themselves professionally.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Interview Preparation: TPOs should conduct mock interviews to help students practice and improve their interview skills. Feedback on performance and guidance on how to answer common interview questions are part of this responsibility.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Placement Records: Keeping accurate records of student placements is essential. TPOs maintain a database of successful placements and update this information regularly. This data can be used for accreditation purposes and to showcase the institution's placement track record to prospective students and employers.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Employer Engagement: TPOs work to identify potential employers, create partnerships with companies, and promote the institution to the corporate world. They are responsible for convincing organizations to participate in campus placements.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Alumni Network: TPOs often maintain a strong connection with alumni who can serve as valuable resources for current students. They can help facilitate mentorship programs and alumni interactions to provide insight into the industry.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Compliance: TPOs should ensure that the placement process complies with all legal and ethical standards. They should be aware of and follow the rules and regulations set by both the institution and relevant government bodies.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Feedback Collection: Collecting feedback from both students and employers about the placement process is crucial. This feedback helps in improving the quality of placements and the services provided.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Data Analysis: TPOs may analyze placement data to identify trends and areas of improvement. This information can help in making informed decisions about curriculum changes, training programs, and industry engagement strategies.
                      </li>

                    </ul>



                    <h5>2. Roles And Responsibilities of Coordinator and Faculty Members</h5>

                    <p>In an educational institution, the Training and Placement (T&P) department plays a crucial role in bridging the gap between students and potential employers. Within this department, there are distinct roles and responsibilities for both the T&P Coordinator and the Faculty Members. These roles are instrumental in helping students secure job placements and gain relevant industry experience and into the specific responsibilities of each role: </p>

                    <h6>1. Training and Placement Coordinator:</h6>
                    <ul>
                        <li>a. Strategic Planning</li>
                        <li>b. Industry Relations</li>
                        <li>c. Student Counseling</li>
                        <li>d. Placement Drives</li>
                        <li>e. Data Management</li>
                        <li>f. Training Programs</li>
                    </ul>

                    <h6>2. Faculty Members:</h6>
                    <p>Faculty members are essential in preparing students academically and professionally for the job market. Their responsibilities in the T&P process include</p>
                    <ul>
                        <li>a. Curriculum Enhancement</li>
                        <li>b. Mentorship</li>
                        <li>c. Industry Connections</li>
                        <li>d. Assessing and Recommending</li>
                        <li>e. Soft Skills Development</li>
                    </ul>

                    <h6>Roles And Responsibilities</h6>
                    <h6>Roles And Responsibilities Of Department Coordinator</h6>
                    <p>The Department Coordinator for a Training and Placement (T&P) cell plays a crucial role in facilitating the career development and placement opportunities for students. This role varies somewhat depending on the educational institution, but there are several key responsibilities and roles that are generally associated with this position:</p>
                    <ul>
                       <li>
                           <i className="fa fa-check"></i> Student Counseling and Guidance: The Department Coordinator is often the first point of contact for students seeking career advice. They provide guidance on career options, help students identify their strengths and weaknesses, and assist in setting career goals. They may also offer resources for skills development and improvement and also provide CRT Training programs.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Liaison with Industry: Building and maintaining relationships with  industry professionals is a significant responsibility. This involves organizing industry visits, internships, and guest lectures. The coordinator should keep abreast of industry trends and job market demands to align the department's curriculum and training programs accordingly.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Placement Drives: Coordinating placement drives, job fairs, and campus interviews is a vital part of the role. This includes scheduling these events, inviting companies, and ensuring that students are well-prepared for interviews and assessments.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Resume and Interview Coaching: Helping students prepare effective resumes and improve their interview skills is crucial. The coordinator might organize workshops, mock interviews, and one-on-one coaching sessions to enhance the employability of students.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Soft Skills Training: Beyond technical skills, the Department Coordinator may organize workshops and training sessions to improve students' soft skills such as communication, teamwork, and problem-solving, which are highly valued by employers.
                        </li>

                    </ul>


                    <h5>3.Roles & Responsibilities of Student Coordinator</h5>
                    <p>A Student Coordinator for the Training and Placement (T&P) Cell plays a pivotal role in ensuring that the placement process at an educational institution runs smoothly. This position requires a high level of responsibility, professionalism, and effective communication skills. The roles and responsibilities of a student coordinator for the T&P Cell typically include:</p>

                    <ul>
                        <li>
                           <i className="fa fa-check"></i> Liaison between Students and T&P Cell: The student coordinator acts as a bridge between the students and the T&P cell. They relay important information, updates, and requirements from the T&P cell to the students and vice versa.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Student Database Management: Maintaining accurate and up-to-date records of all students, including their academic achievements, skills, and preferences. This data is crucial for facilitating the placement process.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Resume Building Workshops: Assisting students in creating professional resumes and cover letters, offering guidance on how to effectively showcase their skills and experiences.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Mock Interviews and Group Discussions: Organizing mock interview sessions and group discussions to help students develop strong communication and interview skills, improving their confidence and employability.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Company Interaction: Interacting with potential employers and organizing recruitment drives, interviews, and other placement-related activities on campus.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Job Notifications: Sharing information about job openings and internships with the student body promptly and efficiently.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Student Feedback: Gathering feedback from students about their placement experiences, which can be used to improve the T&P cell's services.
                        </li>
                        <li>
                           <i className="fa fa-check"></i> Career Counseling: Providing guidance to students on career paths, job market trends, and additional skill development opportunities
                        </li>
                    </ul>





                    <h5>Here are the key roles and responsibilities of a TPO:</h5>
                    <ul>
                      <li>
                       <i className="fa fa-check"></i> Industry Interaction: TPOs should establish and maintain strong relationships with various industries and organizations. They need to understand industry trends, job requirements, and hiring processes. Regular interactions with industry representatives, attending seminars, and networking are crucial for this.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Student Guidance: TPOs are responsible for guiding students in their career development. This includes providing advice on resume building, interview preparation, and career counseling. TPOs should also help students identify their strengths, weaknesses, and interests to match them with suitable job opportunities.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Placement Drives: TPOs are in charge of organizing placement drives and job fairs on campus. They need to coordinate with companies to schedule recruitment activities, including written tests, group discussions, and interviews. Ensuring a smooth and efficient placement process is a key part of their role.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Skill Enhancement: TPOs should identify the skills and competencies in demand in the job market and work with faculty to integrate these into the curriculum. They may also arrange for skill development workshops and training programs to prepare students for employment.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Resume Building: TPOs assist students in creating effective resumes that highlight their qualifications, experiences, and achievements. They may also help students draft cover letters and teach them how to present themselves professionally.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Interview Preparation: TPOs should conduct mock interviews to help students practice and improve their interview skills. Feedback on performance and guidance on how to answer common interview questions are part of this responsibility.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Placement Records: Keeping accurate records of student placements is essential. TPOs maintain a database of successful placements and update this information regularly. This data can be used for accreditation purposes and to showcase the institution's placement track record to prospective students and employers.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Employer Engagement: TPOs work to identify potential employers, create partnerships with companies, and promote the institution to the corporate world. They are responsible for convincing organizations to participate in campus placements.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Alumni Network: TPOs often maintain a strong connection with alumni who can serve as valuable resources for current students. They can help facilitate mentorship programs and alumni interactions to provide insight into the industry.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Compliance: TPOs should ensure that the placement process complies with all legal and ethical standards. They should be aware of and follow the rules and regulations set by both the institution and relevant government bodies.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Feedback Collection: Collecting feedback from both students and employers about the placement process is crucial. This feedback helps in improving the quality of placements and the services provided.
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Data Analysis: TPOs may analyze placement data to identify trends and areas of improvement. This information can help in making informed decisions about curriculum changes, training programs, and industry engagement strategies.
                      </li>

                    </ul>

                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <ul>
                      <h6>CAMPUS PLACEMENT (ACADEMIC YEAR 2023-2024)</h6>
                      <li>
                       <i className="fa fa-check"></i>  NCL INDUSTRIES LIMITED 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Hwaseung material india pvt Ltd 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  TVS Sundram fasteners limited 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Kay jay forging pvt limited
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  NSK Bearing india private limited 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Technook
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  STREEBO 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Academor
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Corizo
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Revolut
                      </li>

                    </ul>


                    <ul>
                      <h6>CAMPUS PLACEMENT (ACADEMIC YEAR 2022-2023)</h6>
                      <li>
                       <i className="fa fa-check"></i>  Allient Group 
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Trinamax 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Hexaware 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Alle technologies
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Brane Enterprises 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Iesof
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Digituala Lab Enterprise Llp 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  ECONSTRUCT
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  BYJU'S
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Planet Spark
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  IDC Technologies
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  XCRINO
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Afford
                      </li>
                      <li>
                       <i className="fa fa-check"></i> COMMERCE CX
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  WINIT Software
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  FACEPREP
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Deltax
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  CUR8
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Delloitte
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Precise Tech Solutions
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Lekha Wireless
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Brigade Enterprises
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Quess Corp
                      </li>

                    </ul>


                    <ul>
                      <h6>CAMPUS PLACEMENT (ACADEMIC YEAR  2021-2022)</h6>
                      <li>
                       <i className="fa fa-check"></i>  Deltax 
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Techouts Pvt Ltd 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Digituala Lab  
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Csb Bank
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Amazon 
                      </li> 
                      <li>
                       <i className="fa fa-check"></i>  Streebo
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Digituala Lab Enterprise Llp 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Capgemini 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Sb Engineering
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Piston Screws
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Millennium Tech
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Kevin Page
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Itc Academy
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Grease
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Boltscrosera
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Dogicraft
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Piston Screws
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  FACEPREP
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  CUR8
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Delloitte
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Precise Tech Solutions
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Brigade Enterprises
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Enterprises
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Lekha Wireless
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Quess Corp
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Hexaware
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Alletechnologies
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Brane Enterprises
                      </li>

                    </ul>


                    <ul>
                      <h6>CAMPUS PLACEMENT (ACADEMIC YEAR  2020-2021)</h6>
                      <li>
                       <i className="fa fa-check"></i>  Csb Bank 
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Amazon 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Streebo  
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Unistring Tech Solutions
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Capgemini 
                      </li> 
                      <li>
                       <i className="fa fa-check"></i>  Sb Engineering
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Piston Screws 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Millennium Tech 
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Kevin Page
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Itc Academy
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Millennium Tech
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Kevin Page
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Grease BoltsCrosera
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Dogicraft
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Piston Screws
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  FACEPREP
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Deltax
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  CUR8
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Delloitte
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Precise Tech Solutions
                      </li>
                      <li>
                       <i className="fa fa-check"></i>  Brigade Enterprises
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Enterprises
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Lekha Wireless
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Quess Corp
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Hexaware
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Alletechnologies
                      </li>
                      <li>
                       <i className="fa fa-check"></i> Brane Enterprises
                      </li>

                    </ul>                    
                  </TabPanel>


                </Tabs>
              </section>
            </Col>


          </Row>
        </Container>
      </section>
    </>
  )
}

export default pteam
