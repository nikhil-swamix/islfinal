import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class Sidebar extends React.Component {
  state = {
    quicklink_list: [],
    isLoading: true,
    errors: null,
  };
  getPosts() {
    axios
      .get("https://backend-isl.herokuapp.com/api/quicklinks/mba")
      .then(response => {
        this.setState({
          quicklink_list: response.data,
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { isLoading, quicklink_list } = this.state;
    return (
      <React.Fragment>
        {!isLoading ? (
          quicklink_list.map(quicklist => {
            const { _id, title, link, type } = quicklist;
            return (
              <ul>
                <li key={_id}>
                  <a href={link}>
                    {title}
                    <span>
                      {type === "file" ? (
                        <i class="fa fa-file" aria-hidden="true"></i>
                      ) : (
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                      )}
                    </span>
                  </a>
                </li>
              </ul>
            );
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
    );
  }
}

export default Sidebar;
