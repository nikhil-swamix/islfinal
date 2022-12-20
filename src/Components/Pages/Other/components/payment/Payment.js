import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const Payment = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Online Fee Payment</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Online Fee Payment
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section class="courses_details_area pt-40 pb-30">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 order-lg-last mt-50">
                    <div class="courses_details_sidebar">
                        <div class="courses_sidebar_image">
                            <img src="https://image.freepik.com/free-vector/payment-information-concept-illustration_114360-2296.jpg" alt="courses details"/>

                            <div class="courses_btn text-center mt-10">
                                <a class="pay-btn" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=945312">Pay Now</a>
                            </div>
                        </div>
                        <div class="courses_sidebar_title">
                            {/* <h4 class="title">Miscellaneous Fee</h4> */}
                            <h4 class="title">Miscellaneous & OU Exam Fee</h4>
                        </div>
                        <div class="courses_sidebar_list">
                            <ul class="list">
                                <li> Last Date: 28-12-2022</li>
                                <li><a href="https://drive.google.com/file/d/15kRu5fi0k_W120LYjJG8egg_6Y16b1Lx/view?usp=sharing"><i class="fa fa-eye"></i> View Notification </a></li>
                            </ul>
                            <ul class="list">
                                <li> View Payment History</li>
                                <li><a href="https://drive.google.com/file/d/18TmOW1e9lNM1Ds8nPGnBCAo93sARhIkc/view?usp=sharing"><i class="fa fa-angle-double-right"></i> Procedure </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 order-lg-first">
                    <div class="courses_details_content">
                        {/* <div class="single_courses_details  mt-40">
                            <h4 class="courses_details_title">Overview</h4>
                            <p>What do you think is better to receive after each lesson: a lovely looking badge or important skills you can immediately put into practice? We thought you might choose the latter. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div> */}
                        <div class="single_courses_details  mt-40">
                            <h4 class="courses_details_title">Guidlines</h4>
                            <ul>
                                {/* <li><i class="fa fa-check"></i> <b>SEM I Regular Students & SEM III Regular Lateral Entry Students has to Pay Rs. 300/- .</b></li> */}
                                {/* <li><i class="fa fa-check"></i> <b>As Per University, All the B.E AICTE Regular Students has to pay an addidtional amount of Rs. 100/- extra along with their Main exam fee for OU Aadhar Based Biometric Attendance System (ABAS) and SMS Invoice Charges.</b></li> */}
                                <li><i class="fa fa-check"></i> <b>Students are advised to use their personal or parent's debit card/Credit card for payment, In the event of transaction failure amount will be credited back into your account after 2 to 4 working days.</b></li>
                                <li><i class="fa fa-check"></i> Clear your dues (Management Fee, Convenor Fee, Bus Fee and Misc Fee etc..) along with your exam fee. Otherwise, your exam application forms will not be accepted.</li>
                                <li><i class="fa fa-check"></i> It's recommended to use a laptop or desktop for online transaction.</li>
                                <li><i class="fa fa-check"></i> Before making online payments, make sure to check College Name and Pay your Total Exam Fee in a single transaction through the given link and generate e-receipt.</li>
                                <li><i class="fa fa-check"></i> Student should submit their details carefully and will be Responsible for any Mistake in E-Reciept of payment.</li>
                                <li><i class="fa fa-check"></i> Please make a note of Reference / Transaction details in case of NetBanking or card payment.</li>
                            </ul>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default Payment
