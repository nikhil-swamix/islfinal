import React from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

class Sidebar extends React.Component {
  state = {
    quicklink_list: [],
    isLoading: true,
    errors: null,
  }
  getPosts() {
    axios
      .get('https://mern1ayaz.herokuapp.com/api/sidebars/eee')
      .then((response) => {
        this.setState({
          quicklink_list: response.data,
          isLoading: false,
        })
      })
      .catch((error) => this.setState({ error, isLoading: false }))
  }
  componentDidMount() {
    this.getPosts()
  }
  render() {
    const { isLoading, quicklink_list } = this.state
    return (
      <React.Fragment>
        {!isLoading ? (
          quicklink_list.map((quicklist) => {
            const { _id, title, link } = quicklist
            return (
              <ul>
                <li key={_id}>
                  <a href={link}>
                    {title}
                    <span>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                </li>
              </ul>
            )
          })
        ) : (
          <p>
            <Skeleton height={10} width={400} />
            <Skeleton height={10} width={400} />
            <Skeleton height={10} width={400} />
            <Skeleton height={10} width={400} />
          </p>
        )}
      </React.Fragment>
    )
  }
}

export default Sidebar
