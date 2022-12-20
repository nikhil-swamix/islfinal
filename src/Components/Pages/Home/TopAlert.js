import React from 'react'
import axios from 'axios'

class TopAlert extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      news_list: [],
      errors: null,
      isActive: true,
    }
  }
  hideAlert() {
    this.setState({
      isActive: false,
    })
  }
  async getData() {
    const response = await axios.get(
      'https://sore-plum-shrug.cyclic.app/api/infos/topalert',
    )
    try {
      this.setState({
        news_list: response.data,
      })
    } catch (error) {
      this.setState({ error })
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { isActive, news_list } = this.state

    return (
      <React.Fragment>
        {isActive
          ? news_list.map((news) => {
              const { _id, title, link, value } = news
              return (
                <div
                  className="alert alert-warning alert-dismissible text-center topAlert"
                  role="alert"
                  key={_id}
                >
                  <a href={link} className="alertContent">
                    {title} <u>{value}</u>
                  </a>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => this.hideAlert()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  {this.props.text}
                </div>
              )
            })
          : ' '}
      </React.Fragment>
    )
  }
}
export default TopAlert
