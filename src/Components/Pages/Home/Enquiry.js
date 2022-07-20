import React, { Component } from 'react'
import { Form, Col, Modal, Button } from 'react-bootstrap'



class Enquiry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        name: '',
        mobile: '',
        dept: '',
        mark: '',
        cat: '',
      },
      isSubmitting: false,
      isError: false,

      show: true,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  submitForm = async (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({ isSubmitting: true })

    const res = await fetch('https://mern1ayaz.herokuapp.com/api/admissions', {
      method: 'POST',
      body: JSON.stringify(this.state.values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    !data.hasOwnProperty('error')
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true })

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: '',
          values: { name: '', mobile: '', dept: '', mark: '', cat: '', typ: '' },
        }),
      9000,
    )
  }

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    })

  render() {
    return (
      <div className="admission">
        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <h5 className="mt-5 text-center">
            For Management Quota Admission <br/>
             call : 9985958422, 8686300801, 9989405490
          </h5>

          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Admissions 2022 - Enquiry Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={this.submitForm}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      value={this.state.values.name}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>



                  <Form.Group as={Col}>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="number"
                      required
                      name="mobile"
                      value={this.state.values.mobile}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Admission Type</Form.Label>

                    <Form>
                      {['radio'].map((type) =>(    
                        <div key={`inline-${type}`} className="mb-3">
                      
                          <Form.Check
                            inline
                            label="ECET"
                            name="typ"
                            value="ECET"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />



                          <Form.Check
                            inline
                            label="EAMCET"
                            name="typ"
                            value="EAMCET"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />


                          <Form.Check
                            inline
                            label="ICET"
                            name="typ"
                            value="ICET"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            inline
                            label="PGCET"
                            name="typ"
                            value="PGCET"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />



                        </div>
                      ))}
                    </Form>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>  
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>10+2  or Diploma or B.E/BTech or Degree Percentage</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="mark"
                      value={this.state.values.mark}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>




                    {/* <Form.Control
                      required
                      as="select"
                      defaultValue="Select..."
                      name="typ"
                      value={this.state.values.typ}
                      onChange={this.handleInputChange}
                    >
                      <option>Select...</option>
                      <option value="ecet">ECET</option>
                      <option value="eamcet">EAMCET</option>
                      <option value="icet">ICET</option>
                      <option value="pgcet">PGCET</option>
                    </Form.Control> */}



                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Department</Form.Label>

                    <Form>
                      {['radio'].map((type) =>(    
                        <div key={`inline-${type}`} className="mb-3">
                      
                          <Form.Check
                            inline
                            label="CSE"
                            name="dept"
                            value="CSE"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            inline
                            label="ECE"
                            name="dept"
                            value="ECE"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="AI & DS"
                            name="dept"
                            value="AI & DS"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="CIVIL"
                            name="dept"
                            value="CIVIL"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="IT"
                            name="dept"
                            value="IT"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="MECH"
                            name="dept"
                            value="MECH"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />


                          <Form.Check
                            inline
                            label="M.Tech CSE"
                            name="dept"
                            value="M.Tech CSE"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            inline
                            label="MBA"
                            name="dept"
                            value="MBA"
                            onChange={this.handleInputChange}
                            type={type}
                            id={`inline-${type}-1`}
                          />


                        </div>
                      ))}
                    </Form>
                    </Form.Group>

                  {/* <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      defaultValue="Select..."
                      name="cat"
                      value={this.state.values.cat}
                      onChange={this.handleInputChange}
                    >
                      <option>Select...</option>
                      <option value="general">General</option>
                      <option value="bc">BC</option>
                    </Form.Control>
                  </Form.Group> */}
                </Form.Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>

            <div className={`message ${this.state.isError && 'error'}`}>
              {this.state.isSubmitting ? (
                <div className="alert alert-danger" role="alert">
                  Thank you ! We will Get Back to You Soon..
                </div>
              ) : (
                this.state.message
              )}
            </div>
          </Modal.Dialog>
        </Modal>


        
      </div>
    )
  }
}
export default Enquiry
