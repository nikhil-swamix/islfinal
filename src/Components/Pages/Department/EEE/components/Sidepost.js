import React from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

class Sidepost extends React.Component {
  state = {
    sidepost_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://backend-isl.herokuapp.com/api/sideposts/eee',
    )
    try {
      this.setState({
        sidepost_list: response.data,
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
    const { isLoading, sidepost_list } = this.state

    return (
      <React.Fragment>
        {!isLoading ? (
          sidepost_list.map((sidepost) => {
            const { img, title, descp, link, value } = sidepost
            return (
              <div className="card mb-10">
                <img className="card-img-top" src={img} alt="CardImage " />
                <div className="card-body">
                  <h6 className="card-title">{title}</h6>
                  <p className="card-text">{descp}</p>

                  {!link ? (
                    ' '
                  ) : (
                    <a href={link} className="btn btn-primary btn-sm">
                      {value}
                    </a>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <Skeleton height={300} width={270} />
        )}
      </React.Fragment>
    )
  }
}
export default Sidepost
