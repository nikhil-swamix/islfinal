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
          <div
            className="alert alert-dark alert-dismissible "
            style={{
              backgroundColor: '#192f59',
              color: 'white',
            }}
            role="alert"
          >
            <p className="alertContent">
              Download our Newsletter & Brochure{' '}
              <a
                href="https://drive.google.com/file/d/1AueQSqZcrH6p0pfq-EoNahbIq9VRgjsm/view"
                class="btn btn-primary btn-md active"
                role="button"
                aria-pressed="true"
              >
                Newsletter <i className="fa fa-download" aria-hidden="true"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1W1zyVr8zmE_OGt6ibgJyb8voECePDwbY/view"
                class="btn btn-secondary btn-md active"
                role="button"
                aria-pressed="true"
              >
                Brochure <i className="fa fa-download" aria-hidden="true"></i>
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
