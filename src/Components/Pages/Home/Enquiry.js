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
    this.setState({ isSubmitting: false })
    const data = await res.json()
    !data.hasOwnProperty('error')
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true })

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: '',
          values: { name: '', mobile: '', dept: '', mark: '', cat: '' },
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
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Admissions 2020 - Enquiry Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={this.submitForm}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={this.state.values.name}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="mobile"
                      placeholder="Mobile No"
                      required
                      name="mobile"
                      value={this.state.values.mobile}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      defaultValue="Select..."
                      name="dept"
                      value={this.state.values.dept}
                      onChange={this.handleInputChange}
                    >
                      <option>Choose...</option>
                      <option value="cse">CSE</option>
                      <option value="ece">ECE</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Total Marks in Intermediate</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Total Intermediate Marks"
                      name="mark"
                      value={this.state.values.mark}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
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
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>

            <div className={`message ${this.state.isError && 'error'}`}>
              {this.state.isSubmitting ? (
                <div className="alert alert-primary" role="alert">
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
