import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Header'
import Table from './Table'
import Sidebar from '../../Sidebar'
import { Helmet } from 'react-helmet'

const Publication = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Research & Desvelopment</title>
        <meta name="description" content="" />

        <link rel="canonical" href="http://islec.edu.in/research" />
      </Helmet>

      <Header />
      <section className="mt-60">

      <Container>

        <div className="tab-content tab-content-info text-justify ">

           <div className="">
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
          </div>
          <Row>
            <Col lg={8} className="syllabus">
              <Table />
            </Col>
            <Col lg={4} md={4} className="sidebar academic">
              <aside>
                <Sidebar />
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Publication
