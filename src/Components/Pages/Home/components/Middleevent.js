import React from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

class Middleevent extends React.Component {
  state = {
    event_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://islec.herokuapp.com/api/infos/event',
    )
    try {
      this.setState({
        event_list: response.data,
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
    const { isLoading, event_list } = this.state

    return (
      <React.Fragment>
        {event_list.length === 0 ? 'No data at all' : isLoading}

        <section className="events small  mb-25">
          <header>
            <div className="site-heading text-left">
              <h4>Upcoming Events</h4>
            </div>
          </header>

          {!isLoading ? (
            event_list.map((event) => {
              const { title, descp, date, month, link, time, venue } = event
              return (
                <div className="section-content">
                  <article className="event">
                    <figure className="date">
                      <span className="date-month">
                        <div className="day">{date}</div>
                        <div className="month">{month}</div>
                      </span>
                    </figure>
                    <aside>
                      <header>
                        <h3 className="content">
                          <a href={link}>
                            {title}: {descp}{' '}
                            {link ? (
                              <i
                                className="fa fa-external-link"
                                aria-hidden="true"
                              ></i>
                            ) : (
                              ''
                            )}
                          </a>
                        </h3>
                      </header>
                      <div className="additional-info">
                        {time ? (
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        ) : (
                          ''
                        )}{' '}
                        {time}
                        <br />
                        {venue ? (
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          ''
                        )}{' '}
                        {venue}
                      </div>
                    </aside>
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
        <div className="stick-bottom">All Events →</div>
      </React.Fragment>
    )
  }
}
export default Middleevent
