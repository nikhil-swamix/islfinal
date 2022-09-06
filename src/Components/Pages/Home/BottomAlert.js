import React from 'react'
import { Col, Row } from 'react-bootstrap'
class BottomAlert extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isActive: true,
    }
  }
  hideAlert() {
    this.setState({
      isActive: false,
    })
  }

  render() {
    const { isActive } = this.state

    return (
      <React.Fragment>
        {isActive ? (
          <div
            className="alert alert-dark alert-dismissible "
            style={{
              backgroundColor: '#192f59',
              color: 'white',
            }}
            role="alert"
          >
            <p className="alertContent">

              <Row>
                <Col md={6} className='pull-right'>
                  <a
                    href="https://drive.google.com/file/d/1bcv_OWhLzU8MCdj9xiIrwJyzHXg7IfsV/view?usp=sharing"
                    class="btn btn-primary btn-md active float-right"
                    role="button"
                    aria-pressed="true"
                  >
                    Newsletter 2022 <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                </Col>

                <Col md={6}>
                  <a
                    href="https://drive.google.com/file/d/1p1w3mmRlmWiwy0aOat0kYek4FRA2cHmu/view?usp=sharing"
                    class="btn btn-primary btn-md active float-left"
                    role="button"
                    aria-pressed="true"
                  >
                    Sports Brochure <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                </Col>

              </Row>

              
            </p>

            
          </div>
        ) : (
          ''
        )}
      </React.Fragment>
    )
  }
}
export default BottomAlert
