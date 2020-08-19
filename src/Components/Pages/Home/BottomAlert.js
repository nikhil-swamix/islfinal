import React from 'react'
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
          <div className="alert alert-dark alert-dismissible " role="alert">
            <p className="alertContent">
              Newsletter, Brochure & Booklet{' '}
              <a
                href="https://drive.google.com/file/d/1AueQSqZcrH6p0pfq-EoNahbIq9VRgjsm/view"
                class="btn btn-primary btn-sm active"
                role="button"
                aria-pressed="true"
              >
                Newsletter
              </a>
              <a
                href="https://drive.google.com/file/d/1W1zyVr8zmE_OGt6ibgJyb8voECePDwbY/view"
                class="btn btn-secondary btn-sm active"
                role="button"
                aria-pressed="true"
              >
                Brochure
              </a>
              <a
                href="https://drive.google.com/file/d/1v3wDuxFOuomXZJ5e4VkV3VX4FChoEdvi/view"
                class="btn btn-info btn-sm active"
                role="button"
                aria-pressed="true"
              >
                College Booklet
              </a>
            </p>

            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => this.hideAlert()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ''
        )}
      </React.Fragment>
    )
  }
}
export default BottomAlert
