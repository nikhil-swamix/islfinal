import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class Industrial extends React.Component {
  state = {
    carousel_list: [],
    isLoading: true,
    errors: null,
  };

  async getData() {
    const response = await axios.get(
      "https://backend-isl.herokuapp.com/api/carousels/ce"
    );
    try {
      this.setState({
        carousel_list: response.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, carousel_list } = this.state;

    return (
      <React.Fragment>
        <Carousel>
          {!isLoading ? (
            carousel_list.map(carousel => {
              const { _id, img, title, link } = carousel;
              return (
                <div className="card" style={{ width: 30 + "rem" }}>
                  <img
                    className="card-img-top"
                    src={img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">{title}</p>
                    {link ? (
                      <a href={link}>
                        <i
                          className="fa fa-external-link"
                          aria-hidden="true"
                        ></i>
                      </a>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <Skeleton height={350} width={640} />
          )}
        </Carousel>
      </React.Fragment>
    );
  }
}
export default Industrial;
