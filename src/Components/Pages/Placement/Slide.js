import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

class Slide extends React.Component {
  state = {
    carousel_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://islec.herokuapp.com/api/blogs/placement',
    )
    try {
      this.setState({
        carousel_list: response.data,
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
    const { isLoading, carousel_list } = this.state

    return (
      <React.Fragment>
        <Carousel>
          {!isLoading ? (
            carousel_list.map((carousel) => {
              const { _id, img, descp } = carousel
              return (
                <Carousel.Item>
                  <img
                    key={_id}
                    src={img}
                    className="img-fluid d-block w-100"
                    alt="CE Carousel Images"
                  />
                  {!descp ? " " : (                  <Carousel.Caption>
                    <p>{descp}</p>
                  </Carousel.Caption>
)}
                </Carousel.Item>
              )
            })
          ) : (
            <Skeleton height={350} width={640} />
          )}
        </Carousel>
      </React.Fragment>
    )
  }
}
export default Slide
