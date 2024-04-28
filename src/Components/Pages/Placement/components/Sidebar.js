import React from 'react'

class Sidebar extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="sidebar-item category mt-30">
          <div className="title">
            <h4>important Links</h4>
          </div>
          <div className="sidebar-info">
                  <ul>
                    <li>
                      <a href="https://islec.edu.in/placementTeam"> Placement Team
                        <span>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">Training
                        <span>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">Facilities
                        <span>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </li>

                  </ul>
                
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Sidebar
