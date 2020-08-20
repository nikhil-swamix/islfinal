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
      <section className="container mt-60 mb-60">
        <div>
          <h4>Guidlines for Online Payment</h4>
          <button type="button" class="btn btn-primary btn-lg">
            View Exam Notification
          </button>
        </div>
        <ul>
          <li>
            It's recommended to use a laptop or desktop for online transactions.
          </li>
          <li>
            Clear your dues (Management fee, Convenor Fee, Bus Fee and Misc Fee
            etc.) along with your exam fee. Otherwise, your exam application
            forms will not be accepted.
          </li>
          <li>
            Before making payments online, make sure to check College Name and
            Pay your Total Exam Fee in a single transaction through the given
            link and generate e- receipt.
          </li>
          <li>
            Student should submit their details carefully and will be
            Responsible for any Mistake in E-Reciept of payment.
          </li>
          <li>
            Please make a note of Reference/ Transaction details in case of
            NetBanking or card payment.
          </li>
        </ul>
      </section>
    </>
  )
}

export default Payment
