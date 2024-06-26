import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

class Reecent extends React.Component {
  state = {
    main_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://islec.herokuapp.com/api/blogs/main',
    )
    try {
      this.setState({
        main_list: response.data,
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
    const { isLoading, main_list } = this.state

    return (
      <React.Fragment>
        <Carousel>
          {!isLoading ? (
            main_list.map((main) => {
              const { _id, img } = main
              return (
                <Carousel.Item>
                  <img
                    key={_id}
                    src={img}
                    className="d-block w-100"
                    alt="slide"
                  />
                </Carousel.Item>
              )
            })
          ) : (
            <Skeleton height={350} width={90000} />
          )}
        </Carousel>
      </React.Fragment>
    )
  }
}
export default Reecent
