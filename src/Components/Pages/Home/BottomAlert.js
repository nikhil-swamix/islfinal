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
              {/* Download our Newsletter & Brochure{' '} */}
              <a
                href="https://drive.google.com/file/d/1p1w3mmRlmWiwy0aOat0kYek4FRA2cHmu/view?usp=sharing"
                class="btn btn-primary btn-md active"
                role="button"
                aria-pressed="true"
              >
                Sports Brochure <i className="fa fa-download" aria-hidden="true"></i>
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
