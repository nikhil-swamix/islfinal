import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';


const Naac = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    history.push('/');
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NAAC</title>
        <meta
          name="description"
          content="NAAC"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">NAAC</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        NAAC
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                    <h6 className="title">K.Nanchari </h6>
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
                    <div className="media_content media-body mt-2">
                      <h6 className="title">
                        <a href="mailto:ce.hod@islec.edu.in">
                          ce.hod@islec.edu.in
                        </a>{' '}
                      </h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="course-details-area dept  pb-60">
        <Container>
          <Row>

            <Col lg={12} md={12}>
              <div className='mt-5 text-right'>
                <Button onClick={handleLogout} variant="danger">Logout</Button>{' '}
              </div>

             <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Self Declaration</Tab>
                    <Tab>Undertaking</Tab><br></br>
                    <Tab>Criterion 1</Tab>
                    <Tab>Criterion 2</Tab>
                    <Tab>Criterion 3</Tab>
                    <Tab>Criterion 4</Tab>
                    <Tab>Criterion 5</Tab>
                    <Tab>Criterion 6</Tab>
                    <Tab>Criterion 7</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Self Declaration</h4>
                      <ul>
                        <li>
                          <i className="fa fa-angle-double-right"></i> <a href='https://islec.edu.in/NAAC/SelfDeclaration.pdf'>
                           View Self Declaration 
                            </a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Undertaking</h4>
                      <ul>
                        <li>
                          <i className="fa fa-angle-double-right"></i> <a href='https://islec.edu.in/NAAC/Undertaking.pdf'>
                           View Undertaking 
                            </a>
                        </li>
                      </ul>
                    </div>

                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 1 – Curricular Aspects</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                          <th>1.1 Curricular Planning and Implementation</th>
                            <tr>
                              <td>1.1.1: The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.1.1/1.1.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                          </table>
                          </p>
                      
                        
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>1.2 Academic Flexibility</th>

                            </tr>
                            <tr>
                              <td>1.2.1: Number of Add on /Certificate/Value added programs offered during the last five years</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.2.1/1.2.1AdditionalInformation.pdf'>View Additional information</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.2.1/1.2.1Template.xlsx'>View Data Template</a></td>
                            </tr>
                            <tr>
                              <td>1.2.2: Percentage of students enrolled in Certificate/ Add-on/Value added programs as against the total number of students during the last five years</td>
                            </tr>
                            <tr>
                              <td>1.2.2.1: Number of students enrolled in subject related Certificate/ Add-on/Value added programs year wise during last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.2.2/1.2.2SupportingDoc.pdf'>View Supporting Document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.2.2/1.2.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>

                        
                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>1.3 Curriculum Enrichment</th>

                            </tr>
                            <tr>
                              <td>1.3.1: Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability into the Curriculum</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.3.1/1.3.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>1.3.2: Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)</td>
                            </tr>
                            <tr>
                              <td>1.3.2.1: Number of students undertaking project work/field work / internships</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.3.2/1.3.2SupportingDoc.pdf'>View Supporting Document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.3.2/1.3.2Template.xlsx'>View Data Template</a></td>
                          </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>1.4 Feedback System</th>

                            </tr>
                            <tr>
                              <td>1.4.1: Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website (Yes or No)</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/1/1.4.1/1.4.1SupportingDoc.pdf'>View Supporting document</a></td>
                            </tr>
                          </table>
                          </p>

                       </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criteria 2- Teaching- Learning and Evaluation</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>2.1: Student Enrolment and Profile</th>
                            </tr>
                            <tr>
                              <td>2.1.1: Enrolment percentage</td>
                            </tr>
                            <tr>
                              <td>2.1.1.1: Number of students admitted year wise during last five years</td>
                            </tr>
                            <tr>
                              <td>2.1.1.2: Number of sanctioned seats year wise during last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.1.1/2.1.1SupportingDoc.pdf'>View Supporting Document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.1.1/2.1.1Template.xlsx'>View Data Template</a></td>
                            </tr>
                            
                            <br/>
                            <tr>
                              <td>2.1.2: Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy) during the last five years (Exclusive of supernumerary seats)</td>
                            </tr>
                            <tr>
                              <td>2.1.2.1: Number of actual students admitted from the reserved categories year - wise during the last five years</td>
                            </tr>
                            <tr>
                              <td>2.1.2.2: Number of seats earmarked for reserved category as per GOI/ State Govt rule year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.1.2/2.1.2SupportingDoc.pdf'>View Supporting Document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.1.2/2.1.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>
                          
                        
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>2.2. Student Teacher Ratio</th>
                            </tr>
                            <tr>
                              <td>2.2.1: Student – Full time Teacher Ratio</td>
                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>2.3. Teaching- Learning Process</th>

                            </tr>
                            <tr>
                              <td>2.3.1: Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences using ICT tools</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.3.1/2.3.1AdditionalDoc.pdf'>View Additional Infomation</a></td>
                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                            <th>2.4 Teacher Profile and Quality</th>

                            </tr>
                            <tr>
                              <td>2.4.1: Percentage of full-time teachers against sanctioned posts during the last five years</td>
                            </tr>
                            <tr>
                              <td>2.4.1.1: Number of Sanctioned posts / required positions for teaching staff/ full time teachers year wise during the last five years:</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.4.1/2.4.1SupportingDoc.pdf'>View Supporting document</a></td>

                            </tr>
                            <tr>
                              <td>2.4.2: Percentage of full time teachers with NET/SET/SLET/ Ph. D. / D.M. / M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. during the last five years (consider only highest degree for count)</td>
                            </tr>
                            <tr>
                              <td>2.4.2.1: Number of full time teachers with NET/SET/SLET/Ph. D. / D.M. / M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.4.2/2.4.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.4.2/2.4.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                            <th>2.5. Evaluation Process and Reforms</th>

                            </tr>
                            <tr>
                              <td>2.5.1: Mechanism of internal/ external assessment is transparent and the grievance redressal system is time- bound and efficient</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.5.1/2.5.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                            <th>2.6 Student Performance and Learning Outcome</th>

                            </tr>
                            <tr>
                              <td>2.6.1: Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website and attainment of POs and COs are evaluated</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.6.1/2.6.1AdditionalInformationDoc.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>2.6.2: Pass percentage of Students during last five years</td>
                            </tr>
                            <tr>
                              <td>2.6.2.1: Number of final year students who passed the university examination year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td>2.6.2.2: Number of final year students who appeared for the university examination year-wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.6.2/2.6.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.6.2/2.6.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>2.7 Student Satisfaction Survey</th>

                            </tr>
                            <tr>
                              <td>2.7.1: Online student satisfaction survey regarding teaching learning process </td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/2/2.7.1/2.7.1Template.xlsx'>View Data Template</a></td>
                            </tr>
                          </table>
                          </p>
                       </tr>

  
                    </Table>
                    </div>
                  </TabPanel>


                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criteria 3- Research, Innovations and Extension</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>3.1 Resource Mobilization for Research</th>
                            </tr>
                            <tr>
                              <td>3.1.1: Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs) </td>
                            </tr>
                            <tr>
                              <td>3.1.1.1: Total Grants from Government and non-governmental agencies for research projects , endowments, Chairs in the institution during the last five years (INR in Lakhs) </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.1.1/3.1.1SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.1.1/3.1.1Template.xlsx'>Viw Data Template</a></td>

                            </tr>
                          </table>
                          </p>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>3.2 Innovation Ecosystem</th>

                            </tr>
                            <tr>
                              <td>3.2.1: Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge </td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.2.1/3.2.1AdditionalDoc.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>3.2.2: Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years</td>
                            </tr>
                            <tr>
                              <td>3.2.2.1: Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.2.2/3.2.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.2.2/3.2.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>3.3 Research Publication and Award</th>
                            </tr>
                            <tr>
                              <td>3.3.1: Number of research papers published per teacher in the Journals notified on UGC care list during the last five years </td>
                            </tr>
                            <tr>
                              <td>3.3.1.1: Number of research papers in the Journals notified on UGC CARE list year wise during the last five years </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.3.1/3.3.1SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.3.1/3.3.1Template.xlsx'>View Data Template</a></td>

                            </tr>

                            <tr>
                              <td>3.3.2: Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years </td>
                            </tr>
                            <tr>
                              <td>3.3.2.1: Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during last five years </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.3.2/3.3.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.3.2/3.3.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>
                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>3.4: Extension Activities</th>

                            </tr>
                            <tr>
                              <td>3.4.1: Extension activities are carried out in the neighborhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the last five years. </td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.4.1/3.4.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>3.4.2: Awards and recognitions received for extension activities from government / government recognised bodies</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.4.2/3.4.2AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>3.4.3: Number of extension and outreach programs conducted by the institution through NSS/NCC/Red cross/YRC etc., (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. and/or those organised in collaboration with industry, community and NGOs) during the last five years</td>
                            </tr>
                            <tr>
                              <td>3.4.3.1: Number of extension and outreach Programs conducted in collaboration with industry, community, and Non- Government Organizations through NSS/ NCC/ Red Cross/ YRC etc., year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.4.3/3.4.3SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.4.3/3.4.3Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                          </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>3.5  Collaboration</th>

                            </tr>
                            <tr>
                              <td>3.5.1: Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years.</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.5.1/3.5.1SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/3/3.5.1/3.5.1Template.xlsx'>View Data Template</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 4 - Infrastructure and Learning Resources</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>4.1 Physical Facilities</th>

                            </tr>
                            <tr>
                              <td>4.1.1: Availability of adequate infrastructure and physical facilities viz., classrooms, laboratories, ICT facilities, cultural activities, gymnasium, yoga centre etc. in the institution </td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.1.1/4.1.1AdditionalInformation.pdf'>View Additional Information</a></td>
                            </tr>
                            <tr>
                              <td>4.1.2: Percentage of expenditure, excluding salary for infrastructure augmentation during last five years (INR in Lakhs) </td>
                            </tr>
                            <tr>
                              <td>4.1.2.1: Expenditure for infrastructure augmentation, excluding salary during the last five years (INR in lakhs)  </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.1.2/4.1.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.1.2/4.1.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                        </p>

                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>4.2 Library as a learning Resource</th>

                            </tr>
                            <tr>
                              <td>4.2.1: Library is automated using Integrated Library Management System (ILMS), subscription to e-resources, amount spent on purchase of books, journals and per day usage of library</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.2.1/4.2.1AdditionalDoc.pdf'>View Additional information</a></td>
                            </tr>
                          </table>
                        </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>4.3 IT Infrastructure</th>

                            </tr>
                            <tr>
                              <td>4.3.1: Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.3.1/4.3.1AdditionalInformation.pdf'>View Additional Information</a></td>
                            </tr>
                            <tr>
                              <td>4.3.2: Student – Computer ratio (Data for the latest completed academic year)</td>
                            </tr>
                            <tr>
                              <td>4.3.2.1: Number of computers available for students usage during the latest completed academic year:</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.3.2/4.3.2SupportingDoc.pdf'>View Supporting document</a></td>

                            </tr>
                          </table>
                        </p>

                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>4.4 Maintenance of Campus Infrastructure</th>

                            </tr>
                            <tr>
                              <td>4.4.1: Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the last five years (INR in Lakhs)</td>
                            </tr>
                            <tr>
                              <td>4.4.1.1: Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.4.1/4.4.1.SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/4/4.4.1/4.4.1Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                        </p>

                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 5- Student Support and Progression</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>5.1 Student Support</th>

                            </tr>
                            <tr>
                              <td>5.1.1: Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies during last five years</td>
                            </tr>
                            <tr>
                              <td>5.1.1.1: Number of students benefited by scholarships and freeships provided by the Government and Non-Government agencies year wise during last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.1/5.1.1SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.1/5.1.1Template.xlsx'>View Data Template</a></td>

                            </tr>
                            <tr>
                              <td>5.1.2: Capacity building and skills enhancement initiatives taken by the institution include the following</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.2/5.1.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.2/5.1.2Template.xlsx'>View Data Template</a></td>
                            </tr>
                            <tr>
                              <td>5.1.3: Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years</td>
                            </tr>
                            <tr>
                              <td>5.1.3.1: Number of students benefitted by guidance for competitive examinations and career counselling offered by the institution  year wise during last five years </td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.3/5.1.3SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.3/5.1.3Template.xlsx'>View Data Template</a></td>
                            </tr>
                            <tr>
                              <td>5.1.4: The Institution has a transparent mechanism for timely redressal of student grievances including sexual harassment and ragging cases</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.1.4/5.1.4SupportingDoc.pdf'>View Supporting document</a></td>
                            </tr>
                          </table>
                        </p>

                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>5.2 Student Progression</th>

                            </tr>
                            <tr>
                              <td>5.2.1: Percentage of placement of outgoing students and students progressing to higher education during the last five years</td>
                            </tr>
                            <tr>
                              <td>5.2.1.1: Number of outgoing students placed and / or progressed to higher education year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td>5.2.1.2: Number of outgoing students year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.2.1/5.2.1SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.2.1/5.2.1Template.xlsx'>View Data Template</a></td>

                            </tr>
                            <tr>
                              <td>5.2.2: Percentage of students qualifying in state/national/ international level examinations during the last five years (eg: JAM/CLAT/GATE/ GMAT/ CAT/ GRE/ TOEFL/ Civil Services/State government examinations)</td>
                            </tr>
                            <tr>
                              <td>5.2.2.1: Number of students qualifying in state/ national/ international level examinations (eg: JAM/CLAT/NET/ SLET/ GATE/ GMAT/CAT/GRE/ TOEFL/ Civil Services/ Judicial Services/Public Prosecution services/All India Bar Exams/State government examinations) year wise during last five years</td>
                            </tr>
                            <tr>
                              <td>5.2.2.2: Number of students appearing in state/ national/ international level examinations (eg: JAM/CLAT/NET/ SLET/ GATE/ GMAT/CAT,GRE/ TOFEL/ Civil Services/ State government examinations) year wise during last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.2.2/5.2.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.2.2/5.2.2Template.xlsx'>View Data Templaten</a></td>

                            </tr>
                          </table>
                        </p>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>5.3 Student Participation and Activities</th>

                            </tr>
                            <tr>
                              <td>5.3.1: Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years</td>
                            </tr>
                            <tr>
                              <td>5.3.1.1: Number of awards/medals for outstanding performance in sports/cultural activities at  national/international level (award for a team event should be counted as one) year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.3.1/5.3.1SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.3.1/5.3.1Template.xlsx'>View Data Template</a></td>

                            </tr>
                            <tr>
                              <td>5.3.2: Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions)</td>
                            </tr>
                            <tr>
                              <td>5.3.2.1: Number of sports and cultural programs in which students of the Institution participated year wise during last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.3.2/5.3.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.3.2/5.3.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                          </table>
                        </p>
                       </tr>

                      <tr>
                        <p>
                        <table className='nactable'>
                            <tr>
                              <th>5.4 Student Participation and Activities</th>
                            </tr>
                            <tr>
                              <td>5.4.1: There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/5/5.4.1/5.4.1AdditionalInformation.pdf'>View Additional Information</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>
 
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 6- Governance, Leadership and Management</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>6.1 Institutional Vision and Leadership</th>

                            </tr>
                            <tr>
                              <td>6.1.1: The governance and leadership is in accordance with vision and mission of the institution and it is visible in various institutional practices such as decentralization and participation in the institutional governance</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.1.1/6.1.1AdditionalInformationDoc.pdf'>View Additional Infomation</a></td>

                            </tr>
                          </table>
                        </p>

                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>6.2 Strategy Development and Deployment</th>

                            </tr>
                            <tr>
                              <td>6.2.1: The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, deployment of institutional Strategic/ perspective/development plan etc</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.2.1/6.2.1AdditionalInformationDoc.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>6.2.2: Implementation of e-governance in areas of operation</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.2.2/6.2.2SuppportingDoc.pdf'>View Additional information</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>6.3 Faculty Empowerment Strategies</th>

                            </tr>
                            <tr>
                              <td>6.3.1: The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.3.1/6.3.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>6.3.2: Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years</td>
                            </tr>
                            <tr>
                              <td>6.3.2.1: Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.3.2/6.3.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.3.2/6.3.2Template.xlsx'>View Data Template</a></td>

                            </tr>
                            <tr>
                              <td>6.3.3: Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development /administrative training programs during the last five years</td>
                            </tr>
                            <tr>
                              <td>6.3.3.1: Total number of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development /administrative training programs during the last five years</td>
                            </tr>
                            <tr>
                              <td>6.3.3.2: Number of non-teaching staff year wise during the last five years</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.3.3/6.3.3SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.3.3/6.3.3Template.xlsx'>View Data Template</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>


                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>6.4 Financial Management and Resource Mobilization</th>

                            </tr>
                            <tr>
                              <td>6.4.1: Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/ nongovernment organizations) and it conducts financial audits regularly (internal and external)</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.4.1/6.4.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>6.5 Internal Quality Assurance System</th>

                            </tr>
                            <tr>
                              <td>6.5.1: Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.5.1/6.5.1AdditionalInformation.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>6.5.2: Quality assurance initiatives of the institution include:</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.5.2/6.5.2SupportingDoc.pdf'>View Supporting document</a></td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/6/6.5.2/6.5.2Template.xlsx'>View Data Template</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>
 
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 7-Institutional Values and Best Practices</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                       </tr>

                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>7.1 Institutional Values and Social Responsibilities</th>

                            </tr>
                            <tr>
                              <td>7.1.1: Measures initiated by the Institution for the promotion of gender equity and Institutional initiatives to celebrate / organize national and international commemorative days, events and festivals during the last five years</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/7/7.1.1/7.1.1AdditionalDoc.pdf'>View Additional information</a></td>
                            </tr>
                            <tr>
                              <td>7.1.2: The Institution has facilities and initiatives</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/7/7.1.2/7.1.2SupportingDoc.pdf'>View Supporting document</a></td>
                            </tr>
                            <tr>
                              <td>7.1.3: Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/7/7.1.3/7.1.3SupportingDoc.pdf'>View Supporting document</a></td>
                            </tr>
                            <tr>
                              <td>7.1.4: Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic diversity and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens (Within 500 words) </td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/7/7.1.4/7.1.4AdditionalInformationDoc.pdf'>View Additional information</a></td>
                            </tr>
                          </table>
                        </p>
                       </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>7.2 Best Practices</th>

                            </tr>
                            <tr>
                              <td>7.2.1: Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/7/7.2.1/7.2.1.Best_Practices.pdf'>View Relevant Information</a></td>
                            </tr>
                          </table>
                        </p>

                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <th>7.3 Institutional Distinctiveness</th>

                            </tr>
                            <tr>
                              <td>7.3.1: Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words</td>
                              <td><a href='https://islec.edu.in/DATA/NAAC/7/7.3.1/7.3.1Distinctiveness.pdf'>View Relevant Information</a></td>
                            </tr>
                          </table>
                        </p>

                      </tr>

                    </Table>
                    </div>
                  </TabPanel>

                </Tabs>
              </section>
            </Col>
            {/* <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
..                  </div>
                </div>

..                <div className="text-right">
                  <a href="/events" className="pt-10 ">
                    More{' '}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </aside>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Naac