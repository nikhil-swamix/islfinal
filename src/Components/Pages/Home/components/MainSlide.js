import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

class MainSlide extends React.Component {
  state = {
    main_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://backend-isl.herokuapp.com/api/carousels/main',
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
              const { _id, img, title } = main
              return (
                <Carousel.Item>
                  <img
                    key={_id}
                    src={img}
                    className="img-fluid d-block w-100"
                    alt="CE Carousel Images"
                  />
                  {title}
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
export default MainSlide
