import React from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
class Useful extends React.Component {
  state = {
    useful_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://mern1ayaz.herokuapp.com/api/infos/useful',
    )
    try {
      this.setState({
        useful_list: response.data,
        isLoading: false,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { isLoading, useful_list } = this.state

    return (
      <React.Fragment>
        <section className="useful  mb-25">
          <div className="site-heading text-left">
            <h4>Useful Links</h4>
          </div>

          {!isLoading ? (
            useful_list.map((news) => {
              const { title, link, value } = news
              return (
                <div className="section-content">
                  <div className="wrapper">
                    <h3 className="list">
                    <img src={value} alt="logos useful" height="40" />
                      <a href={link}>
                        {title}{' '}
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                      </a>
                    </h3>
                  </div>
                </div>
              )
            })
          ) : (
            <p>
              {' '}
              <Skeleton />
            </p>
          )}
        </section>
      </React.Fragment>
    )
  }
}
export default Useful
