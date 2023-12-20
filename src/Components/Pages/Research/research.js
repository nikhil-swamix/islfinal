import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

// import PTable from './components/Table'
// import Sidebar from './components/Sidebar'
import { Helmet } from 'react-helmet'

const research = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Research & Desvelopment</title>
        <meta name="description" content="" />

        <link rel="canonical" href="http://islec.edu.in/research" />
      </Helmet>

      <section className="course-details-area dept  pb-60">
        <Container>
          <Row>
            <div className='text-center'>
              <h2 className='mt-50'>Research & Development</h2>
            </div>
            <Col lg={12} md={12}>

             <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Incubation</Tab>
                    <Tab>Vision & Mission</Tab>
                    <Tab>RE team</Tab>
                    <Tab>Research infrastructure</Tab>
                    <Tab>Research policy</Tab>
                    <Tab>Funded projects</Tab>
                    <Tab>MOUs</Tab>
                  </TabList>

                  
                  <TabPanel>

                  <Container className='mt-50'>
                    
                  <Tabs className="dept-tab">
                  <TabList>
                    <Tab>MSME</Tab>
                    <Tab>IIC</Tab>
                    <Tab>IPFC </Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">

                  <h2 className='mt-50 mb-30 text-center'>Ministry of Micro, Small and Medium Enterprises </h2>

                    <ul>
                        <li><a href='https://islec.edu.in/NAAC/MSME.pdf'><h6>
                           View MSME Document <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                    </ul>

                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                  <h2 className='mt-50 mb-30 text-center'>Institution's Innovation Council </h2>

                    <ul>
                    <li><a href='https://islec.edu.in/NAAC/IIC.pdf'><h6>
                        View IIC Document <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                    </ul>
                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <h2 className='mt-50 mb-30 text-center'>ISLEC PATENT FACILITAION CENTRE  (IPFC ) POLICY </h2>

                    <p>The specific policies and guidelines of a Patent Facilitation Centre can cover a wide range of areas as per Indian Patent Right highlighted practice as follows </p>

                    <h6>Patent application procedures: </h6>
                    <p>ISLEC provides  detailed instructions on how to prepare and file a patent application, including the necessary documentation, forms, and fees.</p>

                    <h6>Prior art search:</h6>
                    <p>ISLEC Provides information on conducting a comprehensive search to identify prior art (existing knowledge or inventions) relevant to the invention being patented. This step is crucial to determine the novelty and inventiveness of the invention.</p>


                    <h6>Patent examination process: </h6>
                    <p>ISLEC provides  detailed instructions on how to prepare and file a patent application, including the necessary documentation, forms, and fees.</p>


                    <h6>Patent prosecution: </h6>
                    <p>This refers to the interaction between the applicant and the patent office during the examination process. ISLEC outlines the timeline, procedures, and requirements for responding to office actions, amendments, and other communication with the patent office.</p>

                    <h6>Intellectual property rights education: </h6>
                    <p>ISLEC  Patent Facilitation Centres often provide training and workshops to enhance the understanding of intellectual property rights, including patents, copyrights, trademarks, and trade secrets. These educational programs can help individuals and businesses make informed decisions regarding their intellectual property.</p>


                    <h6>Collaboration and networking: </h6>
                    <p>ISLEC Patent Facilitation Centre may promote collaboration between inventors, businesses, and research institutions, fostering an environment that encourages innovation and knowledge-sharing</p>

                  </TabPanel>



                  </Tabs>


                  </Container>

                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">

                  <div className="tab-content tab-content-info text-justify ">

                    <h4>vision</h4>

                    <ul>
                      <li>
                          To establish ISLEC Engineering College as an institute of
                           excellence in research and development, committed to fostering
                           innovation, advancing knowledge through industry and
                           academia collaboration that positively solve societal problems.
                      </li>
                    </ul>


                    <h4>Mission</h4>

                    <ul>
                      <li>
                       <i className="fa fa-check"></i> M1. To create a dynamic and supportive environment for
                     research and development, wherein students, faculty, and
                     industry professionals collaborate to address complex problems
                     and develop sustainable solutions.
                      </li>
                      <li>
                         <i className="fa fa-check"></i> M2. Foster a culture of research and innovation by creating an
                           ecosystem to disseminate the knowledge; inculcate passion
                           leading to validation of ideas and prototyping.
                      </li>

                      <li>
                        <i className="fa fa-check"></i> M3. To collaborate with research organizations, institutions to
                         aimed at grants to undertake real time research to solve societal
                         problems.
                      </li>
                    </ul>
                  </div>

                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify text-center">

                    <Table className='striped bordered hover'>
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                      </tr>
                  
                      <tr>
                        <td>1</td>
                        <td>Dr. M. Chandrashekar</td>
                        <td>Director R&D and Innovation </td>
                        <td>ECE</td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Dr. M. Safi Uddin</td>
                        <td>Advisor EDC & IPR </td>
                        <td>CIVIL</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Dr. Abdul Bari</td>
                        <td>Coordinator </td>
                        <td>CSE</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Dr. Abdul Mateen</td>
                        <td>Asst Director  R&D/ CEO (Innovation) </td>
                        <td>ECE</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dr. Surya Mukhi</td>
                        <td>Co-ordinator </td>
                        <td>IT</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Mohd Furkhan</td>
                        <td>Co-ordinator/ Manager (Innovation) </td>
                        <td>CIVIL</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Dr. Srinivasulu </td>
                        <td>Co-ordinator  </td>
                        <td>MECH</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Dr. Padmavati </td>
                        <td>Co-ordinator  </td>
                        <td>MBA</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Ms. Ayesha sultana </td>
                        <td>Co-ordinator  </td>
                        <td>ECE</td>
                      </tr>


                      </Table>

                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify ">
                  <h2 className='mt-50 mb-30 text-center'>Research Infrastructure</h2>

                    <Container>
                      <Row className='mt-30'>
                        <Col md={4}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/images/re1.jpeg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="card mb-10">
                        <img className="card-img-top" src="https://islec.edu.in/images/re2.jpeg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-10">
                        <img className="card-img-top" src="https://islec.edu.in/images/re3.jpeg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                  
                      </Row>
                      </Container>
                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <h2 className='mt-50 mb-30 text-center'>Research Policy</h2>

                    <ul>
                        <li><a href='https://islec.edu.in/docs/policies/internal.docx'><h6>
                        Internal Consultancy Research Policy <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/policies/external.docx'><h6>
                        External Sponsorship Policy for Projects <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                        <li><a href='https://islec.edu.in/docs/policies/ethics.docx'><h6>
                        THE ETHICS OF ACADEMIC RESEARCH POLICY <i class="fa fa-external-link" aria-hidden="true"></i></h6></a>
                        </li>
                    </ul>


                  </TabPanel>



                  <TabPanel className="tab-content tab-content-info text-justify">
                    <h2 className='mt-50 mb-30 text-center'>Funded Projects</h2>


                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <h2 className='mt-50 mb-30 text-center'>MoU - Memorandum of understanding</h2>
                    <h6>Number of MoUs, collaborations / linkages for Faculty exchange, Student exchange, internship, field trip, on-the-job training, research and other academic activities during the last five years					</h6>


                    <Table className='text-center'>

    <tr>
        <td>Sl. No.</td>
        <td>Name of the MoU / Collaboration / linkage</td>
        <td>Name of the collaborating agency / institution / industry / corporate house with whom the MoU / collaboration / linkage is made, with contact details</td>
        <td>Year of signing MoU / collaboration / linkage</td>
        <td>Duration of MoU / collaboration / linkage</td>
        <td>List the  actual  activities under each MOU  and web -links year-wise</td>
    </tr>
    <tr>
        <td>1</td>
        <td>MOU</td>
        <td>Appolo Microsystem Limited</td>
        <td>2022</td>
        <td>3 Years</td>
        <td>Major Projects</td>
    </tr>
    <tr>
        <td>2</td>
        <td>MOU</td>
        <td>Magni5 Technology Solution, Pvt. Ltd.</td>
        <td>2022</td>
        <td>3 Years</td>
        <td>Research Works and labouratories </td>
    </tr>
    <tr>
        <td>3</td>
        <td>MOU</td>
        <td>Edifypath Services Pvt, Ltd.</td>
        <td>2022</td>
        <td>5 Years</td>
        <td>Internships and Jobs</td>
    </tr>
    <tr>
        <td>4</td>
        <td>MOU</td>
        <td>EdVennture Incubation Foundation</td>
        <td>2022</td>
        <td>3 Years</td>
        <td>Startup Incubator</td>
    </tr>
    <tr>
        <td>5</td>
        <td>MOU</td>
        <td>T-Hub Foundation</td>
        <td>2022</td>
        <td>1 Year</td>
        <td>Internship and recuritment</td>
    </tr>
    <tr>
        <td>6</td>
        <td>MOU</td>
        <td>OTBI</td>
        <td>2022</td>
        <td>1 Year</td>
        <td>Support Entrepreneurs</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Collaboration</td>
        <td>Osmania University ECE</td>
        <td>2022</td>
        <td>1 Year</td>
        <td>Seminar</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Collaboration</td>
        <td>Osmania University Bio Medical</td>
        <td>2022</td>
        <td>1 Year</td>
        <td>Seminar</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Collaboration</td>
        <td>TKR Engineering College</td>
        <td>2022</td>
        <td>1 Year</td>
        <td>Seminar</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MOU</td>
        <td>Imarat Consulting Services</td>
        <td>2021</td>
        <td>3 Years</td>
        <td>Training students</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MOU</td>
        <td>JS IT Tech Solution</td>
        <td>2021</td>
        <td>3 Years</td>
        <td>Training students on Civil Softwares</td>
    </tr>
    <tr>
        <td>12</td>
        <td>MOU</td>
        <td>Fast Edu Tech</td>
        <td>2021</td>
        <td>3 Years</td>
        <td>Placements</td>
    </tr>
    <tr>
        <td>13</td>
        <td>MOU</td>
        <td>Digitoze consulting services, LLP</td>
        <td>2021</td>
        <td>2 Years</td>
        <td>Short and Long Term courses</td>
    </tr>
    <tr>
        <td>14</td>
        <td>MOU</td>
        <td>Careertuner</td>
        <td>2021</td>
        <td>5 Years</td>
        <td>Skill based and Virtual training</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Collaboration</td>
        <td>Kasiv Reddy Narayan Reddy College of Engineering and Research</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Research Works and labouratories </td>
    </tr>
    <tr>
        <td>16</td>
        <td>MOU</td>
        <td>Crosera</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>17</td>
        <td>MOU</td>
        <td>Dogi Craft</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>18</td>
        <td>MOU</td>
        <td>Dream Media Technologies</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>19</td>
        <td>MOU</td>
        <td>Duf 6 Technologies</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>20</td>
        <td>MOU</td>
        <td>Grease Bolts</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>21</td>
        <td>MOU</td>
        <td>ITC</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>22</td>
        <td>MOU</td>
        <td>Kevin Page</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>23</td>
        <td>MOU</td>
        <td>Millineum Tech</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>24</td>
        <td>MOU</td>
        <td>Piston Screws</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>25</td>
        <td>MOU</td>
        <td>SB Engineering</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>26</td>
        <td>MOU</td>
        <td>TRP</td>
        <td>2021</td>
        <td>5 Year</td>
        <td>Internships </td>
    </tr>
    <tr>
        <td>27</td>
        <td>MOU</td>
        <td>Edu Skills</td>
        <td>2020</td>
        <td>1 year</td>
        <td>Soft Computing </td>
    </tr>
    <tr>
        <td>28</td>
        <td>Collaboration</td>
        <td>Visvesvarayay College of Engineering and Technology</td>
        <td>2020</td>
        <td>3 Year</td>
        <td>Seminar</td>
    </tr>
    <tr>
        <td>29</td>
        <td>Collaboration</td>
        <td>Brilliant Grammar School Educational Society Group of  Institutions(Faculty of Engineering and Faculty of Pharmacy)</td>
        <td>2019</td>
        <td>5 Year</td>
        <td>Seminar</td>
    </tr>
    <tr>
        <td>30</td>
        <td>Collaboration</td>
        <td>Brilliant Institute of Engineering and Tech</td>
        <td>2018</td>
        <td>5 Year</td>
        <td>Seminar</td>
    </tr>
</Table>
                      


                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                  <h2 className='mt-50 mb-30 text-center'>MSME - Ministry of Micro, Small & Medium Enterprises</h2>

                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <h2 className='mt-50 mb-30 text-center'>MSME - Ministry of Micro, Small & Medium Enterprises</h2>

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

export default research
