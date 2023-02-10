import React from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
class News extends React.Component {
  state = {
    news_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://islec.herokuapp.com/api/infos',
    )
    try {
      this.setState({
        news_list: response.data,
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
    const { isLoading, news_list } = this.state

    return (
      <React.Fragment>
        <section className="news  mb-25">
          <div className="site-heading text-left">
            <h4>News & Updates</h4>
          </div>

          {!isLoading ? (
            news_list.map((news) => {
              const { date, title, link } = news
              return (
                <div className="section-content">
                  <article>
                    <figure className="date">
                      {moment(date).format('Do MMM YYYY')}
                    </figure>
                    <header>
                      <a href={link}>
                        {title}{' '}
                        {link ? (
                          <i class="fa fa-external-link" aria-hidden="true"></i>
                        ) : (
                          ''
                        )}
                      </a>
                    </header>
                  </article>
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
export default News
