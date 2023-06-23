import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';


const Dvv = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    history.push('/');
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DVV</title>
        <meta
          name="description"
          content="DVV"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">DVV</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                          DVV-Clarifications
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
                {/* <Button onClick={handleLogout} variant="danger">Logout</Button>{' '} */}
              </div>

             <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Extended Profile</Tab>
                    <Tab>Criterion 1</Tab>
                    <Tab>Criterion 2</Tab>
                    <Tab>Criterion 3</Tab>
                    <Tab>Criterion 4</Tab>
                    <Tab>Criterion 5</Tab>
                    <Tab>Criterion 6</Tab>
                    <Tab>Criterion 7</Tab>
                  </TabList>

                  
                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Extended Profile</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td>1.1  Number of students year wise during the last five years:</td>
                              <td><a href='https://islec.edu.in/dvv/1.1-EP.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.1 Number of teaching staff / full time teachers during the last five years (Without repeat count):</td>
                              <td><a href='https://islec.edu.in/dvv/2.1-EP.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.2  Number of teaching staff / full time teachers year wise during the last five years</td>
                              <td><a href='https://islec.edu.in/dvv/2.2-EP.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>3.1  Expenditure excluding salary component year wise during the last five years (INR in lakhs)</td>
                              <td><a href='https://islec.edu.in/dvv/3.1-EP.pdf'>View Clarification</a></td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 1</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td><b>1.2.1 Number of Add on /Certificate/Value added programs offered during the last five years</b></td>
                              <td><a href='https://islec.edu.in/dvv/1.2.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td><b>1.2.2 Percentage of students enrolled in Certificate/ Add-on/Value added programs as against the total number of students during the last five years</b></td>
                              <td  rowspan="2"><a href='https://islec.edu.in/dvv/1.2.2-DVV.pdf'>View Clarification</a></td>
                             </tr>
                            <tr>
                              <td>1.2.2.1. Number of students enrolled in subject related Certificate/ Add-on/Value added programs year wise during last five years</td>
                            </tr>
                            <tr>
                              <td><b>1.3.2 Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)</b></td>
                              <td rowSpan={2} ><a href='https://islec.edu.in/dvv/1.3.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>1.3.2.1. Number of students undertaking project work/field work / internships</td>
                            </tr>
                            <tr>
                              <td><b>1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website (Yes or No)</b></td>
                              <td><a href='https://islec.edu.in/dvv/1.4.1-DVV.pdf'>View Clarification</a></td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 2</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>

                              <td><b>2.1.1 Enrolment percentage</b></td>
                              <td rowSpan={3}><a href='https://islec.edu.in/dvv/2.1.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.1.1.1. Number of students admitted year wise during last five years</td>
                            </tr>
                            <tr>
                              <td>2.1.1.2. Number of sanctioned seats year wise during last five years</td>
                            </tr>


                            <tr>
                              <td><b>2.1.2 Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy) during the last five years (Exclusive of supernumerary seats)</b></td>
                              <td rowSpan={3}><a href='https://islec.edu.in/dvv/2.1.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.1.2.1. Number of actual students admitted from the reserved categories year - wise during the last five years </td>
                            </tr>
                            <tr>
                              <td>2.1.2.2. Number of seats earmarked for reserved category as per GOI/ State Govt rule year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>2.2.1  Student – Full time Teacher Ratio (Data for the latest completed academic year)</b></td>
                              <td><a href='https://islec.edu.in/dvv/2.2.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td><b>2.4.1  Percentage of full-time teachers against sanctioned posts during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/2.4.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.4.1.1. Number of Sanctioned posts / required positions for teaching staff/ full time teachers year wise during the last five years:</td>
                            </tr>
                            <tr>
                              <td><b>2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D. / D.M. / M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. during the last five years (consider only highest degree for count)</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/2.4.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.4.2.1. Number of full time teachers with NET/SET/SLET/Ph. D. / D.M. / M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>2.6.2  Pass percentage of Students during last five years</b></td>
                              <td rowSpan={3}><a href='https://islec.edu.in/dvv/2.6.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>2.6.2.1. Number of final year students who passed the university examination year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td>2.6.2.2. Number of final year students who appeared for the university examination year-wise during the last five years</td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 3</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td><b>3.1.1 Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/3.1.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>3.1.1.1 Total Grants from Government and non-governmental agencies for research projects , endowments, Chairs in the institution during the last five years (INR in Lakhs)</td>
                            </tr>
                            <tr>
                              <td><b>3.2.2 Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/3.2.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>3.2.2.1. Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years</td>
                            </tr>
                            <tr>
                              <td><b>3.3.1 Number of research papers published per teacher in the Journals notified on UGC care list during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/3.3.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>3.3.1.1. Number of research papers in the Journals notified on UGC CARE list year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>3.3.2  Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/3.3.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>3.3.2.1. Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during last five years</td>
                            </tr>
                            <tr>
                              <td><b>3.4.3. Number of extension and outreach programs conducted by the institution through NSS/NCC/Red cross/YRC etc., (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. and/or those organised in collaboration with industry, community and NGOs) during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/3.4.3-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>3.4.3.1. Number of extension and outreach Programs conducted in collaboration with industry, community, and Non- Government Organizations through NSS/ NCC/ Red Cross/ YRC etc., year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>3.5.1 Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years.</b></td>
                              <td><a href='https://islec.edu.in/dvv/3.5.1-DVV.pdf'>View Clarification</a></td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 4</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td><b>4.1.2 Percentage of expenditure, excluding salary for infrastructure augmentation during last five years (INR in Lakhs)</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/4.1.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>4.1.2.1. Expenditure for infrastructure augmentation, excluding salary during the last five years (INR in lakhs)  </td>
                            </tr>
                            <tr>
                              <td><b>4.3.2 Student – Computer ratio (Data for the latest completed academic year)</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/4.3.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>4.3.2.1. Number of computers available for students usage during the latest completed academic year:</td>
                            </tr>
                            <tr>
                              <td><b>4.4.1 Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the last five years (INR in Lakhs)</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/4.4.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>4.4.1.1. Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)</td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 5</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td><b>5.1.1 Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies during last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/5.1.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>5.1.1.1. Number of students benefited by scholarships and freeships provided by the Government and Non-Government agencies year wise during last five years</td>
                            </tr>
                            <tr>
                              <td><b>5.1.2  Capacity building and skills enhancement initiatives taken by the institution include the following
1.	Soft skills
2.	Language and communication skills
3.	Life skills (Yoga, physical fitness, health and hygiene)
4.	ICT/computing skills
</b></td>
                              <td><a href='https://islec.edu.in/dvv/5.1.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td><b>5.1.3 Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/5.1.3-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>5.1.3.1. Number of students benefitted by guidance for competitive examinations and career counselling offered by the institution  year wise during last five years</td>
                            </tr>
                            <tr>
                              <td><b>5.1.4  The Institution has a transparent mechanism for timely redressal of student grievances including sexual harassment and ragging cases
1.	Implementation of guidelines of statutory/regulatory bodies
2.	Organisation wide awareness and undertakings on policies with zero tolerance
3.	Mechanisms for submission of online/offline students’ grievances
4.	Timely redressal of the grievances through appropriate committees
</b></td>
                              <td><a href='https://islec.edu.in/dvv/5.1.4-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td><b>5.2.1 Percentage of placement of outgoing students and students progressing to higher education during the last five years</b></td>
                              <td rowSpan={3}><a href='https://islec.edu.in/dvv/5.2.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>5.2.1.1. Number of outgoing students placed and / or progressed to higher education year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td>5.2.1.2. Number of outgoing students year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>5.2.2 Percentage of students qualifying in state/national/ international level examinations during the last five years (eg: JAM/CLAT/GATE/ GMAT/ CAT/ GRE/ TOEFL/ Civil Services/State government examinations)</b></td>
                              <td rowSpan={3}><a href='https://islec.edu.in/dvv/5.2.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>5.2.2.1. Number of students qualifying in state/ national/ international level examinations (eg: JAM/CLAT/NET/ SLET/ GATE/ GMAT/CAT/GRE/ TOEFL/ Civil Services/ Judicial Services/Public Prosecution services/All India Bar Exams/State government examinations) year wise during last five years</td>
                            </tr>
                            <tr>
                              <td>5.2.2.2. Number of students appearing in state/ national/ international level examinations (eg: JAM/CLAT/NET/ SLET/ GATE/ GMAT/CAT,GRE/ TOFEL/ Civil Services/ State government examinations) year wise during last five years</td>
                            </tr>
                            <tr>
                              <td><b>5.3.1 Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/5.3.1-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>5.3.1.1. Number of awards/medals for outstanding performance in sports/cultural activities at  national/international level (award for a team event should be counted as one) year wise during the last five years </td>
                            </tr>
                            <tr>
                              <td><b>5.3.2  Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions)</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/5.3.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>5.3.2.1. Number of sports and cultural programs in which students of the Institution participated year wise during last five years</td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 6</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td><b>6.2.2  Implementation of e-governance in areas of operation
1.	Administration
2.	Finance and Accounts
3.	Student Admission and Support
4.	Examination
</b></td>
                              <td><a href='https://islec.edu.in/dvv/6.2.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td><b>6.3.2 Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years</b></td>
                              <td rowSpan={2}><a href='https://islec.edu.in/dvv/6.3.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>6.3.2.1. Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>6.3.3  Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development /administrative training programs during the last five years</b></td>
                              <td rowSpan={3}><a href='https://islec.edu.in/dvv/6.3.3-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td>6.3.3.1. Total number of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development /administrative training programs during the last five years</td>
                            </tr>
                            <tr>
                              <td>6.3.3.2. Number of non-teaching staff year wise during the last five years</td>
                            </tr>
                            <tr>
                              <td><b>6.5.2 Quality assurance initiatives of the institution include:
1.	Regular meeting of Internal Quality Assurance Cell (IQAC); Feedback collected, analysed and used for improvements
2.	Collaborative quality initiatives with other institution(s)/ membership of international networks
3.	Participation in NIRF
4.	any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA, ISO Certification etc
</b></td>
                              <td><a href='https://islec.edu.in/dvv/6.5.2-DVV.pdf'>View Clarification</a></td>
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
                      <h5 className='mt-3 mb-3 text-center'>Criteria 7</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                      </tr>
                      <tr>
                        <p>
                          <table className='nactable'>
                            <tr>
                              <td><b>7.1.2  The Institution has facilities and initiatives for
1.	Alternate sources of energy and energy conservation measures
2.	Management of the various types of degradable and nondegradable waste
3.	Water conservation
4.	Green campus initiatives
5.	Disabled-friendly, barrier free environment
</b></td>
                              <td><a href='https://islec.edu.in/dvv/7.1.2-DVV.pdf'>View Clarification</a></td>
                            </tr>
                            <tr>
                              <td><b>7.1.3  Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following
1.	Green audit / Environment audit
2.	Energy audit
3.	Clean and green campus initiatives
4.	Beyond the campus environmental promotion activities
</b></td>
                              <td><a href='https://islec.edu.in/dvv/7.1.3-DVV.pdf'>View Clarification</a></td>
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
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dvv